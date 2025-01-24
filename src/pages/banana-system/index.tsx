import Page from '@/components/page/DefaultPage';

export default function Banana() {
    return <Page bottomPadding pathname='/banana-system' seo={{
        title: 'The Banana System',
        keywords: [
            'Banana System',
            'Systems of Measurement'
        ],
        description: 'The banana system',
        og: {
            // TODO: image of banana
            // imageAlt: 'Joel Grayson Profile Photo'
        }
    }}>
        <h1>The Banana System</h1>
        <p>First, we had the imperial system. Then, we had the metric system. The 21st century brings about another revolutionary advancement in the way we measure: the Banana System.</p>
        
        <h3 id="-base-units-"><strong>Base Units</strong></h3>
        <div>
            <table className='styled'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Abbr</th>
                        <th>Definition</th>
                        <th>Metric Equivalent from Online</th>
                        <th>Our Measurements</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Banana eat</td>
                        <td>beat</td>
                        <td>Time to eat a banana</td>
                        <td />
                        <td>X minutes</td>
                    </tr>
                    <tr>
                        <td>Banana rot</td>
                        <td>brot</td>
                        <td>the time for banana to rot</td>
                        <td>5 days</td>
                        <td>X days</td>
                    </tr>
                    <tr>
                        <td>Banana mass</td>
                        <td>bmass</td>
                        <td>the mass of banana</td>
                        <td>118 grams</td>
                        <td>X grams</td>
                    </tr>
                    <tr>
                        <td>Banana length</td>
                        <td>blen</td>
                        <td>distance from one side of banana to other</td>
                        <td>15 cm</td>
                        <td>X cm</td>
                    </tr>
                    <tr>
                        <td>Banana current</td>
                        <td>bcur</td>
                        <td>how much current you can get from a banana before it stops giving out electricity</td>
                        <td />
                        <td>X A</td>
                    </tr>
                    <tr>
                        <td>Banana luminous intensity</td>
                        <td>blight</td>
                        <td>the amount of light that a banana reflects back from the sun when at the equator</td>
                        <td />
                        <td>X cd</td>
                    </tr>
                    <tr>
                        <td>Banana temperature</td>
                        <td>°B</td>
                        <td>0°B is the optimal temperature for a banana to grow in and every 1°B above or below is … How much the banana warms while in your hand in one µbeat</td>
                        <td />
                    </tr>
                </tbody>
            </table>
            <h3 id="-derived-units-"><strong>Derived Units</strong></h3>
            <table className='styled'>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'left' }}>Banana voltage</th>
                        <th style={{ textAlign: 'left' }}>bvolt</th>
                        <th style={{ textAlign: 'left' }}>Average voltage of a banana when electrodes are inserted at random places</th>
                        <th style={{ textAlign: 'left' }} />
                        <th style={{ textAlign: 'left' }}>X V</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ textAlign: 'left' }}>Banana weight</td>
                        <td style={{ textAlign: 'left' }}>bwt</td>
                        <td style={{ textAlign: 'left' }}>the weight of a banana</td>
                        <td style={{ textAlign: 'left' }} />
                        <td style={{ textAlign: 'left' }}>X N</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'left' }}>Banana energy</td>
                        <td style={{ textAlign: 'left' }}>beng</td>
                        <td style={{ textAlign: 'left' }}>the amount of energy you get from eating a banana</td>
                        <td style={{ textAlign: 'left' }}>439 kJ (105 Calories)</td>
                        <td style={{ textAlign: 'left' }}>X J</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'left' }}>Banana radiation</td>
                        <td style={{ textAlign: 'left' }}>brad</td>
                        <td style={{ textAlign: 'left' }}>the amount of radiation a banana releases</td>
                        <td style={{ textAlign: 'left' }}>0.1 μSv</td>
                        <td style={{ textAlign: 'left' }}>X µSv</td>
                    </tr>
                </tbody>
            </table>
            <h3 id="-prefixes-"><strong>Prefixes</strong></h3>
            <ul>
                <li>Nibble - 1/100th of a banana</li>
                <li>Bite - 1/10th of a banana</li>
                <li>Banana (finger)</li>
                <li>Hand of bananas - 10 bananas</li>
                <li>Bunch of bananas - 100 bananas</li>
                <li>Shipping container of bananas - </li>
                <li>Vessel of bananas - </li>
                <li>Dole of bananas - how many bananas dole produces every year</li>
                <li>India of bananas - 30 million bananas</li>
            </ul>
        </div>

    </Page>;
}

