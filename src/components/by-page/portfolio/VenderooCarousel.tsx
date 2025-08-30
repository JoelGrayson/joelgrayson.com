import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Yt from "@/components/global/Yt";
import Image from "next/image";

export default function VenderooCarousel() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, _setCurrent]=useState(0); //don't use _setCurrent. this is set by the carousel element
    const [count, _setCount]=useState(0);
    const [stopAutoAdvancing, setStopAutoAdvancing]=useState(true); //when user manually triggers auto advance, it stops automatically auto-advancing

    useEffect(()=>{
        if (!api) return;

        _setCount(api.scrollSnapList().length);
        _setCurrent(api.selectedScrollSnap());

        api.on('select', ()=>{
            _setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    useEffect(()=>{
        if (!api) return;

        if (stopAutoAdvancing) return;

        const intervalId=setInterval(()=>{
            if (current===count-1) {
                api.scrollTo(0);
            } else {
                api.scrollNext();
            }
        }, 5000);

        return ()=>{
            clearInterval(intervalId);
        };
    }, [api, current, count, stopAutoAdvancing]);
    
    return <div className="flex justify-center items-center">
        <div
            style={{
                visibility: current===0 ? 'hidden' : 'visible'
            }}
            className="cursor-pointer"
            onClick={()=>{
                setStopAutoAdvancing(true);
                api?.scrollPrev();
            }}
        >
            {/* left.svg */}
            <svg width="21" height="33" viewBox="0 0 21 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-gray-700 stroke-gray-700 hover:fill-gray-900 hover:stroke-gray-900" d="M1.84972 15.7421L17.8344 1.48555C18.4789 0.910696 19.5 1.3682 19.5 2.23184V30.313C19.5 31.1695 18.4936 31.6296 17.8458 31.0694L1.86118 17.2448C1.40469 16.85 1.3993 16.1439 1.84972 15.7421Z" />
            </svg>
        </div>

        <Carousel setApi={setApi} className="max-w-[400px]">
            <CarouselContent>
                <Item padding={false}>
                    <Yt width='100%'>bHHk2FL5Ujs</Yt>
                </Item>
                <ImageItem slug='1-Electrical Compartment.jpg' alt='Electrical compartment' />
                <ImageItem slug='2-Separators.jpg' alt='Separators' />
                <ImageItem slug='3.5-Blueprint-and-parts.jpg' alt='Blueprint and parts' />
                <ImageItem slug='5-Venderoo.jpg' alt='Venderoo' />
                <ImageItem slug='6-Customers.jpg' alt='Customers' />
            </CarouselContent>
        </Carousel>
        
        {/* Right button */}
        <div
            style={{
                visibility: current===count-1 ? 'hidden' : 'visible'
            }}
            className="cursor-pointer"
            onClick={()=>{
                setStopAutoAdvancing(true);
                api?.scrollNext();
            }}
        >
            {/* right.svg */}
            <svg width="21" height="33" viewBox="0 0 21 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-gray-700 stroke-gray-700 hover:fill-gray-900 hover:stroke-gray-900" d="M19.1503 15.7421L3.16562 1.48555C2.52108 0.910696 1.5 1.3682 1.5 2.23184V30.313C1.5 31.1695 2.50637 31.6296 3.15415 31.0694L19.1388 17.2448C19.5953 16.85 19.6007 16.1439 19.1503 15.7421Z" />
            </svg>
        </div>
    </div>;
}

export function ImageItem({ slug, alt }: { slug: string; alt: string }) {
    return <Item padding={false}>
        <img src={'/portfolio/Venderoo/'+slug} alt={alt} />
    </Item>;
}

export function Item({ children, padding=true }: { children: any; padding: boolean }) {
    return <CarouselItem>
        <div style={{
            padding: padding ? 5 : 0,
            width: '100%',
        }}>
            <Card>
                <CardContent className="flex items-center justify-center" style={{
                    aspectRatio: 1.3
                }}>
                    {children}
                </CardContent>
            </Card>
        </div>
    </CarouselItem>;
}

