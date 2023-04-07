export default function onFormSubmit(setSubmitted: Function) {
    return (e: any)=>{
        e.preventDefault();
        
        const values={
            name: e.target[0].value,
            email: e.target[1].value,
            message: e.target[2].value
        };

        fetch('/api/contact/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        })
        .then(res=>res.json())
        .then(res=>{
            console.log('form submitted:', res);
            setSubmitted(true);
        });
    };
}