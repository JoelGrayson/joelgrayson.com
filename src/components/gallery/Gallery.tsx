import { useCallback, useEffect } from 'react';
import Button from '@jcomponents/button';

export default function Gallery({ images, renderChildren, galleryOpen, setGalleryOpen, index, setIndex }: {
    images: any[];
    /* eslint-disable no-unused-vars */
    renderChildren: (iterator: any)=>JSX.Element;
    galleryOpen: boolean;
    setGalleryOpen: (open: boolean)=>void;
    index: number;
    setIndex: (index: number)=>void;
    /* eslint-disable no-unused-vars */
}) {
    const numImages=images.length;
    const imagePath=images[index];

    function galleryLeft() { //decrement image index or loop to end
        let newIndex=(index-1) % numImages;
        while (newIndex<0)
            newIndex+=numImages;
        
        console.log('Going left', {index, newIndex, numImages});
        setIndex(newIndex);
    }

    function galleryRight() { //increment image index or loop around to start
        console.log('Going right', {index});
        setIndex((index+1) % numImages);
    }

    const eventHandler=useCallback((e: KeyboardEvent)=>{
        if (!galleryOpen) return;
        switch (e.key) {
            case 'ArrowLeft': return galleryLeft();
            case 'ArrowRight': return galleryRight();
            case 'Escape': return setGalleryOpen(false);
            default: return;
        }
    // eslint-disable-next-line
    }, []);

    useEffect(()=>{
        document.addEventListener('keyup', eventHandler, true);
        return ()=>document.removeEventListener('keyup', eventHandler, true);
    }, [numImages, eventHandler]);
    
    return <div id='gallery-container'>{
        galleryOpen && 
        <div id='gallery' style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100dvh',
            backgroundColor: 'white',
            zIndex: 1,
            overflow: 'hidden'
        }}>
            {/* Close Button */}
            <Button onClick={()=>setGalleryOpen(false)} style={{
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
            }} color='jred' aria-label='Close'>&times;</Button>
            
            {/* <- Artwork -> */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }}>
                <Button style={{ width: '40px', height: '40px', textAlign: 'center', verticalAlign: 'center' }} onClick={galleryLeft} aria-label='Previous Artwork'>&lt;</Button>

                <div className='px-3 py-2 mx-6' style={{ //Image
                    width: '60vw',
                    // border: '1px solid #888',
                    height: '80%',
                    borderRadius: 10
                }}>
                    {renderChildren(imagePath)}
                </div>

                <Button style={{ width: '40px', height: '40px', textAlign: 'center', verticalAlign: 'center' }} onClick={galleryRight} aria-label='Next Artwork'>&gt;</Button>
            </div>
        </div>
    }</div>;
}
