import { useEffect } from 'react';
import Button from '@jcomponents/button';

export default function Gallery({ images, renderChildren, galleryOpen, setGalleryOpen, index, setIndex }: {
    images: any[];
    renderChildren: (iterator: any)=>JSX.Element;
    galleryOpen: boolean;
    setGalleryOpen: (open: boolean)=>void;
    index: number;
    setIndex: (index: number)=>void;
}) {
    const numImages=images.length;
    const imagePath=images[index];

    function galleryLeft() { //decrement image index or loop to end
        let newIndex=(index-1) % numImages;
        while (newIndex<0)
            newIndex+=numImages;
        
        setIndex(newIndex);
    }
    function galleryRight() { //increment image index or loop around to start
        setIndex((index+1) % numImages);
    }
    useEffect(()=>{
        document.addEventListener('keyup', e=>{
            if (galleryOpen) {
                if (e.key==='ArrowLeft') galleryLeft();
                else if (e.key==='ArrowRight') galleryRight();
                if (e.key==='Escape') setGalleryOpen(false);
            }
        }, true);
    });
    
    return <div id='gallery'>{
        galleryOpen && 
        <div id='gallery' style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'white',
            zIndex: 1
        }}>
            {/* Close Button */}
            <Button onClick={_=>setGalleryOpen(false)} style={{
                position: 'absolute',
                top: '20px',
                right: '50px',
                borderRadius: '50%',
                padding: '2px 7px',
                width: '30px',
                height: '30px',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '36px'
            }} color='jred'>&times;</Button>
            
            {/* <- Artwork -> */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }}>
                <Button style={{ width: '40px', height: '40px', textAlign: 'center', verticalAlign: 'center' }} onClick={galleryLeft}>&lt;</Button>

                <div className='px-3 py-2 mx-6' style={{ //Image
                    width: '60vw',
                    // border: '1px solid #888',
                    height: '80%',
                    borderRadius: 10
                }}>
                    {renderChildren(imagePath)}
                </div>

                <Button style={{ width: '40px', height: '40px', textAlign: 'center', verticalAlign: 'center' }} onClick={galleryRight}>&gt;</Button>
            </div>
        </div>
    }</div>;
}
