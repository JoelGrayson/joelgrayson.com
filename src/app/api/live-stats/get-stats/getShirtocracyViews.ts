// https://plausible.io/docs/stats-api#get-apiv1statsaggregate

export default async function getShirtocracyViews() {
    const temp=await fetch("https://plausible.io/api/v1/stats/aggregate?site_id=$SITE_ID&period=6mo&metrics=pageviews");
    const res=await temp.json();

    return res?.results?.pageviews;
}

//   -H "Authorization: Bearer ${TOKEN}"
