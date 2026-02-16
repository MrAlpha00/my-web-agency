'use client';

import { useState, useEffect } from 'react';
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

    useEffect(() => {
        if (typeof window !== 'undefined' && window.Calendly) {
            setIsScriptLoaded(true);
        }
    }, []);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();

        // Track event
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'strategy_call_click', {
                event_category: 'engagement',
                event_label: 'calendly_popup',
            });
        }

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
