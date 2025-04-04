export default function Missing() { //bouncing red box that says 'Missing'
    return <div className='justify-self-end bg-red-500 w-fit h-fit p-2 bold rounded-2xl inline right-10 absolute animate-bounce'>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={20} height={20} className='inline mr-2'><g><path d="M0 0h24v24H0z" fill="none"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"/></g></svg>
        Missing
    </div>;
}
