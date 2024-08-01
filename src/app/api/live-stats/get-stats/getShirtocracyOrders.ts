export default async function getShirtocracyOrders() {
    const temp=await fetch("https://shirtocracy.com/api/stats/n-orders");
    const res=await temp.json();

    return res;
}
