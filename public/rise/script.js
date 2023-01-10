const videos=[
    { name: '1.1 Introducing Self | Climate Change', url: 'lYSaV6HVWKc' },
    { name: '1.2 Privilege', url: '_R1u5mERa0A' },
    { name: '2.1 Focus & Research', url: 'xei9L_9igv4' },
    { name: '2.2 Design & Plan', url: 'NQaFaE-HXzI' },
    { name: '2.3 Act & Reflect', url: 'WFzexo-z6XY'},
];

const videosEl=document.getElementById('videos');
for (let video of videos) {
    videosEl.innerHTML+=`
    <iframe
        src="https://www.youtube.com/embed/${video.url}?controls=0"
        title="${video.name}"
        width="200" height="315"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>`;
}
