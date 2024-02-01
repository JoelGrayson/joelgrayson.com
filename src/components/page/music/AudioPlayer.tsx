'use client';
import { useState, useEffect, useRef } from 'react';

export default function AudioPlayer(source: string) {
    const [isPlaying, setIsPlaying]=useState<boolean>(false);
    const [progress, setProgress]=useState<number>(0);
    const audioRef=useRef(new Audio(source));
    
    useEffect(()=>{
        if (isPlaying)
            audioRef.current.play();
        else
            audioRef.current.pause();
    }, [isPlaying]);
}
