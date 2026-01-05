export async function GET() {
    return new Response('j', {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}

// > fetch('http://localhost:3000/j').then(res=>res.text()).then(res=>console.log(res))
// j
