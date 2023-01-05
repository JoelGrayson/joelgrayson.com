import Page from '../../../components/Page';
import Button from '@jcomponents/button';
// import { Document, Page as PDFPage } from 'react-pdf';
// import 
export default function index() {
    return (<Page>
        <a href="/maths"><Button style={{
            position: 'absolute',
            top: '1.5rem',
            left: '3rem'
        }}>
            ⏎ Return to all maths
        </Button></a>
        
        <h1 className='text-center'>Icosahedron Navigation</h1>
        <Button href='/maths/icosahedron-navigation/Icosahedron-Navigation.zip'>Download the code</Button>
        <iframe src="/maths/icosahedron-navigation/Icosahedron Navigation.pdf" width="100%" height="500px" />
    </Page>);
}
