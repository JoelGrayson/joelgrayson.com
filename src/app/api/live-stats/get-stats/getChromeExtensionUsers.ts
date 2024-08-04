export default async function getChromeExtensionUsers() {
    const res=await fetch('https://api.joelgrayson.com/live-stats');
    const data=await res.json();

    return {
        focusUsers: data.focusInstalls,
        homeworkCheckerUsers: data.hCInstalls
    };
}
