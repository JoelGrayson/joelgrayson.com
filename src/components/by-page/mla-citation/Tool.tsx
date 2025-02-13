import { useState } from 'react';
import { Segmented } from "antd";
import { useRef } from 'react';

export default function Tool() {
    // For both
    const [websiteOrBook, setWebsiteOrBook]=useState<'Book' | 'Website'>('Book');
    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [showMore, setShowMore]=useState(false);

    
    // Book specific
    const [bookTitle, setBookTitle]=useState('');
    const [bookContainerTitle, setBookContainerTitle]=useState('');
    const [publicationDate, setPublicationDate]=useState<Date | null>(null); //if before 1900, show the city of publication field
        // optional
    const [cityOfPublication, setCityOfPublication]=useState('');
    const [bookNumber, setBookNumber]=useState(''); //such as vol. 64, no. 1
    const [publisher, setPublisher]=useState('');
    const [location, setLocation]=useState('');
    
    // Website specific
    const [url, setUrl]=useState('');
    const [websiteTitle, setWebsiteTitle]=useState('');
    const [websiteRootTitle, setWebsiteRootTitle]=useState('');
    const [accessedDate, setAccessedDate]=useState(new Date());

    const dateFormat='MM/DD/YYYY';

    const generatedRef=useRef<HTMLParagraphElement>(null);
    
    const title=websiteOrBook==='Book' ? bookTitle : websiteTitle;
    const containerTitle=websiteOrBook==='Book' ? bookContainerTitle : websiteRootTitle;
    
    return <div>
        <div className='grid gap-4 items-center' style={{ gridTemplateColumns: 'fit-content(150px) min-content' }}>
            <div>Media type:</div>
            <div>
                <Segmented
                    options={['Book', 'Website']}
                    value={websiteOrBook}
                    onChange={setWebsiteOrBook}
                />
            </div>
            <div><label htmlFor="firstName">Author first name:</label></div>
            <div><input value={firstName} id='firstName' onChange={e=>setFirstName(e.target.value)} /></div>
            <div><label htmlFor="lastName">Author last name:</label></div>
            <div><input value={lastName} id='lastName' onChange={e=>setLastName(e.target.value)} /></div>
            {
                websiteOrBook==='Book'
                ? <>
                    <div><label htmlFor="bookTitle">Book title:</label></div>
                    <div><input value={bookTitle} id='bookTitle' onChange={e=>setBookTitle(e.target.value)} /></div>
                    <div><label htmlFor="containerTitle">Container title:</label></div>
                    <div><input value={bookContainerTitle} id='containerTitle' onChange={e=>setBookContainerTitle(e.target.value)} placeholder='e.g., The Georgia Review' /></div>
                    <div><label htmlFor="publicationDate">Publication date:</label></div>
                    <div>
                        {/* <DatePicker defaultValue={defaultValue} format={dateFormat} /> */}
                        <input type="date" id="publicationDate" value={publicationDate ?publicationDate.toISOString().split('T')[0] : ''} onChange={e=>setPublicationDate(new Date(e.target.value))} />
                    </div>
                    {
                        publicationDate && publicationDate.getFullYear()<1900 && <>
                            <div><label htmlFor="cityOfPublication">City of publication (should include for books before 1900):</label></div>
                            <div><input value={cityOfPublication} id='cityOfPublication' onChange={e=>setCityOfPublication(e.target.value)} placeholder='e.g., New York City' /></div>
                        </>
                    }

                    { showMore 
                    ? <>
                        <h3 style={{ gridColumn: 'span 2' }}>Optional</h3>
                        {/* TODO: city of publication */}
                        <div><label htmlFor="bookNumber">Book number:</label></div>
                        <div><input value={bookNumber} id='bookNumber' onChange={e=>setBookNumber(e.target.value)} placeholder='e.g., vol. 64, no. 1' /></div>

                        <div><label htmlFor="bookLocation">Location:</label></div>
                        <div><input value={location} id='bookLocation' onChange={e=>setLocation(e.target.value)} placeholder='e.g., pp. 69–420' /></div>
    

                        <div style={{ gridColumn: 'span 2' }}><button onClick={()=>setShowMore(false)}>Show Less</button></div>
                    </>
                    : <>
                        <div style={{ gridColumn: 'span 2' }}><button onClick={()=>setShowMore(true)}>Show More</button></div>
                    </> }
                    
                    {/* <div><input value={publicationDate} onChange={e=>setBookContainerTitle(e.target.value)} placeholder='e.g., The Georgia Review' /></div> */}
                </>
                : <>
                    <div><label htmlFor="url">URL:</label></div>
                    <div>
                        <input value={url} id='url' onChange={e=>{
                            const newUrl=e.target.value;
                            setUrl(newUrl);
                            if (isValidUrl(newUrl)) {
                                fetch(newUrl)
                                    .then(res=>res.text())
                                    .then(text=>{
                                        const parser=new DOMParser();
                                        const doc=parser.parseFromString(text, 'text/html');
                                        const title=doc.querySelector('title');
                                        if (title && !websiteTitle) { //fill in value if not already there
                                            setWebsiteTitle(title.textContent || '');
                                        }

                                        // Website root title
                                        const metaOgSiteName=doc.querySelector('meta[property="og:site_name"]');
                                        if (metaOgSiteName && !websiteRootTitle) {
                                            setWebsiteRootTitle(metaOgSiteName.getAttribute('content') || '');
                                        }
                                    });
                            }
                        }} />
                    </div>

                    <div><label htmlFor="websiteTitle">Webpage title:</label></div>
                    <div><input value={websiteTitle} id='websiteTitle' onChange={e=>setWebsiteTitle(e.target.value)} /></div>
                    <div><label htmlFor="websiteContainerTitle">Website container title:</label></div>
                    <div><input value={websiteRootTitle} id='websiteContainerTitle' onChange={e=>setWebsiteRootTitle(e.target.value)} placeholder='e.g., The New York Times' /></div>
                    
                    <div><label htmlFor="publicationDate">Publication date:</label></div>
                    <div className='flex items-center'>
                        {/* <DatePicker defaultValue={defaultValue} format={dateFormat} /> */}
                        <input type="date" id="publicationDate" value={publicationDate ? publicationDate.toISOString().split('T')[0] : ''} onChange={e=>setPublicationDate(new Date(e.target.value))} />
                    </div>

                    <div><label htmlFor="accessedDate">Accessed date:</label></div>
                    <div>
                        {/* <DatePicker defaultValue={defaultValue} format={dateFormat} /> */}
                        <input type="date" id="accessedDate" value={accessedDate.toISOString().split('T')[0]} onChange={e=>setAccessedDate(new Date(e.target.value))} />
                    </div>
                </>
            }

        </div>

        <h4>Generated Citation</h4>
        <p
            ref={generatedRef}
            style={{
                fontFamily: 'Times New Roman',
                // double spacing
                lineHeight: '200%',
                // hanging indent
                textIndent: '-.5in',
                paddingLeft: '.5in',
                // no indent on first line
                marginLeft: 0,
            }}
        >
            {(lastName && firstName) ? `${lastName}, ${firstName}. ` : ''}{title ? `"${title}." ` : ''}<i>{containerTitle}</i>{bookNumber && `${bookNumber}`}{lastName && firstName || title || containerTitle || bookNumber ? ', ' : ''}{publicationDate ? formatDate(publicationDate) : ''}{cityOfPublication && `, ${cityOfPublication}`}{location && `, ${location}`}.{websiteOrBook==='Website' && accessedDate ? ` Accessed ${formatDate(accessedDate)}.` : ''}
        </p>
        <button onClick={()=>{
            navigator.clipboard.write([
                new ClipboardItem({
                    'text/html': new Blob([generatedRef.current?.outerHTML || ''], { type: 'text/html' })
                })
            ]);
        }}>Copy</button>
    </div>;
}

export function formatDate(date: Date) { //follows MLA format
    return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
}

// https://www.freecodecamp.org/news/check-if-a-javascript-string-is-a-url/
function isValidUrl(urlString: string): boolean {
    let urlPattern=new RegExp('^(https?:\\/\\/)?'+ // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
    return !!urlPattern.test(urlString);
}
