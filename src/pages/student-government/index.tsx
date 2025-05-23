import Page from '@/components/page/DefaultPage';
import Table from '@jcomponents/table';
import Image from 'next/image';

export default function StudentGovernment() {
    const victoryClass='bg-green-400 text-green-700';
    const lossClass='bg-red-400 text-red-700';

    return <Page bottomPadding seo={{
        title: 'Student Government',
        og: {
            image: '/image/opengraph/student-government.png'
        }
    }}>
        <h1 className='text-center'>Student Government</h1>
        <p>I have had a fun career of being elected grade representative for five years straight. It has been an exhilirating and emotion-full experience. Thank you to those who put their faith in me.</p>

        <h2>Record</h2>
        <Table>
            <thead>
                <tr>
                    <th>Victory</th>
                    <th>Date</th>
                    <th>Position</th>
                    <th># Spots</th>
                    <th># Candidates</th>
                    <th>Odds</th>
                </tr>
            </thead>
            <tbody>
                <tr className={victoryClass}>
                    <td className='text-center'>✅</td>
                    <td>2019</td>
                    <td>8th Grade Representative</td>
                    <td>4</td>
                    <td>11</td>
                    <td>36%</td>
                </tr>
                <tr className={lossClass}>
                    <td className='text-center'>❌</td>
                    <td>2019</td>
                    <td>MS President</td>
                    <td>2</td>
                    <td>11</td>
                    <td>18%</td>
                </tr>
                <tr className={victoryClass}>
                    <td className='text-center'>✅</td>
                    <td>2020</td>
                    <td>9th Grade Representative</td>
                    <td>3</td>
                    <td>18</td>
                    <td>17%</td>
                </tr>
                <tr className={victoryClass}>
                    <td className='text-center'>✅</td>
                    <td>2021</td>
                    <td>10th Grade Representative</td>
                    <td>3</td>
                    <td>9</td>
                    <td>33%</td>
                </tr>
                <tr className={victoryClass}>
                    <td className='text-center'>✅</td>
                    <td>2022</td>
                    <td>11th Grade Representative</td>
                    <td>3</td>
                    <td>11</td>
                    <td>27%</td>
                </tr>
                <tr className={victoryClass}>
                    <td className='text-center'>✅</td>
                    <td>2023</td>
                    <td>12th Grade Representative</td>
                    <td>4</td>
                    <td>12</td>
                    <td>33%</td>
                </tr>
                <tr className={lossClass}>
                    <td className='text-center'>❌</td>
                    <td>2023</td>
                    <td>US Co-President</td>
                    <td>2</td>
                    <td>12</td>
                    <td>17%</td>
                </tr>
            </tbody>
        </Table>
        
        <br />

        <h2>Campaigns</h2>
        <p>Here is a record of some of my campaign posters.</p>


        <h3 className='mt-5'>12th Grade</h3>
        <Image src="/student-government/posters/12th/Poster.png" alt="Poster" width={500} height={310} />
        <div className="flex gap-3">
            <Image src="/student-government/posters/12th/Poster 2.png" alt="Poster 2" width={247} height={350} />
            <Image src="/student-government/posters/12th/I Want You.png" alt="I Want You" width={294} height={350} />
        </div>
        <div className="flex gap-3">
            <Image src="/student-government/posters/12th/Coders Unite.png" alt="Coders Unite" width={350} height={251} />
            <Image src="/student-government/posters/12th/Makers Unite.png" alt="Makers Unite" width={350} height={251} />
        </div>
        
        <h3 className='mt-5'>11th Grade</h3>
        <Image src="/student-government/posters/11th/Poster.png" alt="Poster" width={500} height={323} />
        
        <h3 className='mt-5'>10th Grade</h3>
        <Image src="/student-government/posters/10th/Poster.png" alt="Poster" width={500} height={358.5} />

        <h3 className='mt-5'>9th Grade</h3>
        <Image src="/student-government/posters/9th/Drake Hotline.jpg" alt="Drake Hotline" width={250} height={250} />
        <div className="flex items-center gap-5">
            <p>Endorsement from Obama:</p>
            <video
                src="/student-government/posters/9th/Obama Endorses Joel 2020.mov"
                poster='/student-government/posters/9th/Obama Endorses Joel 2020 Thumbnail.png' //thumbnail
                controls
                width={300}
            />
        </div>

        <h3 className='mt-5'>8th</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3EzSVfP8dms" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

    </Page>;
}

