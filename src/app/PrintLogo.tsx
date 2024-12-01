'use client';

import { useEffect } from 'react';
import printLogo from '@/components/page/printLogo';

export default function PrintLogo() {
    useEffect(printLogo, []);
    return null;
}
