'use client';

import { Suspense, useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

// --- Custom Shader for the Energy Shard ---
// This shader combines a base color, fresnel glow on the edges, 
// and an emissive intensity that we can modulate outside.
const shardVertexShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform float uTime;

  // Simple pseudo-random noise for slight vertex distortion
  float hash(float n) { return fract(sin(n) * 1e4); }
  float noise(float x) {
      float i = floor(x);
      float f = fract(x);
      float u = f * f * (3.0 - 2.0 * f);
      return mix(hash(i), hash(i + 1.0), u);
  }

  void main() {
    vNormal = normalize(normalMatrix * normal);
    
    // Very subtle vertex displacement based on time and position
    vec3 pos = position;
    float displace = noise(pos.x * 2.0 + uTime) * 0.05;
    pos += normal * displace;
    
    vPosition = (modelViewMatrix * vec4(pos, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const shardFragmentShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  
  uniform vec3 uColor1; // Base purple
  uniform vec3 uColor2; // Core warm/magenta
  uniform float uPulse; // Animated intensity
  uniform float uTime;

  void main() {
    // Calculate Fresnel
    vec3 viewDir = normalize(-vPosition);
    float fresnel = dot(viewDir, vNormal);
    fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
    fresnel = pow(fresnel, 3.0); // sharp edge glow
    
    // Mix colors based on fresnel and a bit of y-position for gradient
    vec3 mixedColor = mix(uColor1, uColor2, fresnel + sin(uTime * 0.5)*0.2);
    
    // Emissive component boosted by the pulse
    vec3 emissive = mixedColor * (fresnel * 2.5) * uPulse;
    
    vec3 finalColor = mixedColor * 0.3 + emissive;
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

// --- The Shard Mesh Component ---
function Shard() {
    const meshRef = useRef<THREE.Mesh>(null);
    const materialRef = useRef<THREE.ShaderMaterial>(null);

    // Custom Irregular Sharp Geometry (like an elongated crystal/shard)
    const geometry = useMemo(() => {
        // Base is an Icosahedron, but we scale it to be tall and thin
        const geo = new THREE.IcosahedronGeometry(1.5, 0); // detail 0 = sharp flat faces
        geo.scale(0.8, 1.8, 0.6); // tall, flattened on Z

        // Scramble vertices slightly to make it asymmetrical
        const posAttribute = geo.getAttribute('position');
        for (let i = 0; i < posAttribute.count; i++) {
            let x = posAttribute.getX(i);
            let y = posAttribute.getY(i);
            let z = posAttribute.getZ(i);
            // Random slight offsets per vertex
            x += (Math.random() - 0.5) * 0.3;
            y += (Math.random() - 0.5) * 0.4;
            z += (Math.random() - 0.5) * 0.2;
            posAttribute.setXYZ(i, x, y, z);
        }
        geo.computeVertexNormals();
        return geo;
    }, []);

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color('#4a3194') }, // Deep purple core
        uColor2: { value: new THREE.Color('#ff6bcb') }, // Magenta/Warm fresnel
        uPulse: { value: 1.0 }
    }), []);

    // Animation Loop
    useFrame((state) => {
        const t = state.clock.elapsedTime;

        if (meshRef.current) {
            // Very slow rotation
            meshRef.current.rotation.y = t * 0.05;
            meshRef.current.rotation.z = Math.sin(t * 0.1) * 0.1;
        }

        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = t;

            // Pulse effect: base 1.0, peaks to 1.8 every 8-12 seconds loosely
            // Using a combination of sine waves to make it organic not strict
            const pulse = Math.pow(Math.sin(t * 0.5), 8) * 0.8 + 1.0;
            materialRef.current.uniforms.uPulse.value = pulse;
        }
    });

    return (
        <Float
            speed={1.5} // Animation speed, defaults to 1
            rotationIntensity={0.2} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
            <mesh ref={meshRef} geometry={geometry}>
                <shaderMaterial
                    ref={materialRef}
                    vertexShader={shardVertexShader}
                    fragmentShader={shardFragmentShader}
                    uniforms={uniforms}
                    transparent={true}
                />
            </mesh>
        </Float>
    );
}

// --- Main Canvas Export ---
export default function EnergyShardCanvas() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Media query to check if we are on mobile/tablet
        const mql = window.matchMedia('(max-width: 1024px)');
        setIsMobile(mql.matches);

        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mql.addEventListener('change', handler);
        return () => mql.removeEventListener('change', handler);
    }, []);

    // Fallback for mobile: Provide a visual glow/static representation
    // in a real prod scenario, we'd place an explicit optimized PNG here.
    if (isMobile) {
        return (
            <div className="w-64 h-64 rounded-full blur-[80px] bg-gradient-to-tr from-[#8a6bff] to-[#ff6bcb] opacity-50" />
        );
    }

    // Desktop: Render the real 3D Canvas
    return (
        <div className="w-full h-full relative">
            {/* Layer 2: Subtle radial light spill strictly behind the object to integrate it into the environment */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-[rgba(138,107,255,0.15)] to-[rgba(255,107,203,0.1)] rounded-full blur-[120px] pointer-events-none -z-10" />

            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
                dpr={[1, 2]} // limit DPI to max 2 for performance
            >
                <Suspense fallback={null}>
                    {/* Layering & Lighting */}
                    {/* Low intensity ambient */}
                    <ambientLight intensity={0.4} />

                    {/* Purple Rim Directional Light */}
                    <directionalLight position={[-5, 5, -2]} intensity={2.5} color="#8a6bff" />

                    {/* Warm Point Light for Core Contrast */}
                    <pointLight position={[2, -1, 3]} intensity={3.0} color="#ffb86b" distance={10} />

                    {/* The Object */}
                    <Shard />

                    {/* Environment for glossy reflections (even if shader handles most of it) */}
                    <Environment preset="city" />

                    {/* Controlled Post-processing Bloom */}
                    <EffectComposer disableNormalPass multisampling={4}>
                        <Bloom
                            luminanceThreshold={0.5} // Only bloom the bright emissive edges
                            luminanceSmoothing={0.4}
                            intensity={1.2} // Controlled, no over-glow
                            mipmapBlur // smooth bloom
                        />
                    </EffectComposer>
                </Suspense>
            </Canvas>
        </div>
    );
}
