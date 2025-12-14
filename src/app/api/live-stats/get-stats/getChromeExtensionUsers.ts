export default async function getChromeExtensionUsers() {
    const res=await fetch(process.env.API_JOELGRAYSON_COM_LIVE_STATS_ENDPOINT as string);
    const data=await res.json();

    return {
        focusUsers: data.focusInstalls,
        homeworkCheckerUsers: data.hCInstalls
    };
}
