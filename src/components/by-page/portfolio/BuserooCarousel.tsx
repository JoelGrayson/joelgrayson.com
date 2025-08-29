import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

export default function BuserooCarousel() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, _setCurrent]=useState(0); //don't use _setCurrent. this is set by the carousel element
    const [count, _setCount]=useState(0);

    useEffect(()=>{
        if (!api) return;

        _setCount(api.scrollSnapList().length);
        _setCurrent(api.selectedScrollSnap());

        api.on('select', ()=>{
            _setCurrent(api.selectedScrollSnap());
        });
    }, [api]);
    
    return <div className="flex justify-center items-center">
        <div className="cursor-pointer" onClick={()=>{
            api?.scrollTo(current-1);
        }}>
            {/* left.svg */}
            <svg width="21" height="33" viewBox="0 0 21 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.84972 15.7421L17.8344 1.48555C18.4789 0.910696 19.5 1.3682 19.5 2.23184V30.313C19.5 31.1695 18.4936 31.6296 17.8458 31.0694L1.86118 17.2448C1.40469 16.85 1.3993 16.1439 1.84972 15.7421Z" fill="black" stroke="black"/>
            </svg>
        </div>
        <Carousel setApi={setApi} className="max-w-[300px]">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                    <div className="p-1">
                    <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
        {/* Right button */}
        <div className="cursor-pointer" onClick={()=>{
            api?.scrollTo(current+1);
        }}>
            {/* right.svg */}
            <svg width="21" height="33" viewBox="0 0 21 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.1503 15.7421L3.16562 1.48555C2.52108 0.910696 1.5 1.3682 1.5 2.23184V30.313C1.5 31.1695 2.50637 31.6296 3.15415 31.0694L19.1388 17.2448C19.5953 16.85 19.6007 16.1439 19.1503 15.7421Z" fill="black" stroke="black"/>
            </svg>
        </div>
    </div>;
}

