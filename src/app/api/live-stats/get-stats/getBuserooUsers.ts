export default async function getBuserooUsers() {
    const request=await fetch('https://buseroo.com/api/stats/n-users');
    const res=await request.json();
    return res;
}
