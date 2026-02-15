'use client';

import { useState } from 'react';
import Script from 'next/script';

interface CalendlyPopupButtonProps {
    url: string;
    className?: string;
    children: React.ReactNode;
}

declare global {
    interface Window {
        Calendly: any;
    }
}

export default function CalendlyPopupButton({ url, className, children }: CalendlyPopupButtonProps) {
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (isScriptLoaded && window.Calendly) {
            window.Calendly.initPopupWidget({ url });
        } else {
            // Fallback: open in new tab
            window.open(url, '_blank');
        }
    };

    return (
        <>
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
                onLoad={() => setIsScriptLoaded(true)}
            />
            <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />

            <button onClick={handleClick} className={className}>
                {children}
            </button>
        </>
    );
}
