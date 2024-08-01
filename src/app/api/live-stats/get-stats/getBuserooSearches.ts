export default async function getBuserooSearches() {
    const request=await fetch('https://buseroo.com/api/stats/n-searches');
    const res=await request.json();
    return res;
}
