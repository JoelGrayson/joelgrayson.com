export default async function getShanghaiDictionarySearches() {
    try {
        const request=await fetch('https://shanghaidictionary.com/api/analytics/searches');
        const res=await request.json();
        if (!res.searches)
            return console.error('ShanghaiDictionary.com API error:', res);
        return res.searches;
    } catch (err) {
        console.error('Caught shanghaiDictionary.com API error:', err);
        return -4;
    }
}
