import FancyOl from '@jcomponents/fancyol';

export default function Page() {
    return <>
        <h1>The Steps</h1>
        <FancyOl backgroundColor='purple'>
            <li>Sign into AWS Management Console.</li>
            <li>Open the RDS console.</li>
            <li>Choose the region where you wish to create your instance.</li>
            <li>In the navigation pane, click on &apos;Databases&apos;.</li>
            <li>Click on &apos;Create database&apos;.</li>
        </FancyOl>
    </>;
}
