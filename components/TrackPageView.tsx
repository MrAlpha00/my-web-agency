'use client';

import { useEffect } from 'react';
import { event } from '@/lib/analytics';

export default function TrackPageView({ eventName, title }: { eventName: string; title: string }) {
    useEffect(() => {
        event({
            action: eventName,
            category: 'content',
            label: title,
        });
    }, [eventName, title]);

    return null;
}
