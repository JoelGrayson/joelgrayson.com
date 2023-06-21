import Page from '@/components/global/Page';
import Table from '@jcomponents/table';

export default function StudentGovernment() {
    return <Page>
        <h1 className='text-center'>Student Government</h1>
        <p>I have had a fun career of being elected grade representative for five years straight. It has been an exhilirating and emotion-full experience.</p>

        <h3>Record</h3>
        <Table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Position</th>
                    <th>Victory</th>
                    <th># Spots</th>
                    <th># Candidates</th>
                    <th>Odds</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2019</td>
                    <td>8th Grade Representative</td>
                    <td>✅</td>
                    <td>4</td>
                    <td>11</td>
                    <td>36%</td>
                </tr>
                <tr>
                    <td>2019</td>
                    <td>MS President</td>
                    <td>❌</td>
                    <td>2</td>
                    <td>11</td>
                    <td>18%</td>
                </tr>
                <tr>
                    <td>2020</td>
                    <td>9th Grade Representative</td>
                    <td>✅</td>
                    <td>3</td>
                    <td>18</td>
                    <td>17%</td>
                </tr>
                <tr>
                    <td>2021</td>
                    <td>10th Grade Representative</td>
                    <td>✅</td>
                    <td>3</td>
                    <td>9</td>
                    <td>33%</td>
                </tr>
                <tr>
                    <td>2022</td>
                    <td>11th Grade Representative</td>
                    <td>✅</td>
                    <td>3</td>
                    <td>11</td>
                    <td>27%</td>
                </tr>
                <tr>
                    <td>2023</td>
                    <td>12th Grade Representative</td>
                    <td>✅</td>
                    <td>4</td>
                    <td>12</td>
                    <td>33%</td>
                </tr>
                <tr>
                    <td>2023</td>
                    <td>US Co-President</td>
                    <td>❌</td>
                    <td>2</td>
                    <td>12</td>
                    <td>17%</td>
                </tr>
            </tbody>
        </Table>
        
        <br />

        <h3>Campaigns</h3>
        <p>Here is a record of some of my campaign posters.</p>
        
    </Page>;
}

/*
2022
Rise Winner
25% (1:5)
2022-23
11th Grade Representative
27% (3:11)
2021-22
Rise Finalist
<5% (500:10,000s)
2022
Jolli Humanitarian Award
25%		(1:5)
2022
Jolli Humanitarian Nominee
38%		(5:13)
2021-22
10th Grade Representative
33%		(3:9)
2020-21
9th Grade Representative
17%		(3:18)
2019-20
MS Co-President
50%		(2:4)
2019-20
8th Grade Representative
36%   	(4:11)


*/