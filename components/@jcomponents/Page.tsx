import Header from '@jcomponents/header';
import Container from '@jcomponents/container';
import Nav from '@jcomponents/nav';
import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

export default function Home({children}: {children: ReactNode}) {
    return <>
        <Header color='#a9ceff'>
            <div> {/* Left */}
                <Link href='/@jcomponents/'>
                    <Image src='/image/software/@jcomponents/logo.png' width='80' height='80' alt='logo' />
                </Link>
            </div>
            <div> {/* Right */}
                <Nav>
                    <Nav.Item Link={Link} href='/@jcomponents/'>All</Nav.Item>
                    <Nav.Item Link={Link} href='/@jcomponents/header'>Header</Nav.Item>
                    <Nav.Item Link={Link} href='/@jcomponents/modal'>Modal</Nav.Item>
                    <Nav.Item Link={Link} href='/@jcomponents/button'>Button</Nav.Item>
                    <Nav.Item Link={Link} href='/@jcomponents/link'>Link</Nav.Item>
                    <Nav.Item Link={Link} href='/@jcomponents/nav'>Nav</Nav.Item>
                    <Nav.Item Link={Link} href='/@jcomponents/container'>Container</Nav.Item>
                </Nav>
            </div>
        </Header>
        
        <Container>
            {children}
        </Container>
        <div style={{height: 100}}></div>
    </>;
}
