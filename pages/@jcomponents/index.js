import Page from '../../components/@jcomponents/Page';

export default function Home() {
    return (<Page>
        <h1 style={{textAlign: 'center'}}>JComponents</h1>
        <p>Easily integrate custom-made components into your React projects.</p>
        <p>This page is a demo of all the components</p>
        
        <br/>
        <h3>Contribute</h3>
        <ul>
            <li>Source code: <a href='https://github.com/JoelGrayson/JComponents' target='_blank' rel='noreferrer'>github.com/JoelGrayson/JComponents</a></li>
            <li>Issue tracker: <a href="https://github.com/JoelGrayson/JComponents/issues" target='_blank' rel='noreferrer'>github.com/JoelGrayson/JComponents/issues</a></li>
        </ul>
    </Page>);
}
