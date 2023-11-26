import { useState } from "react";
import Page from "@/components/page/DefaultPage";
import Table from "@jcomponents/table";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Record() {
    const victoryClass='!bg-green-100 text-green-700';
    const lossClass=   '!bg-red-100   text-red-700';

    const [showOnlyVictories, setShowOnlyVictories]=useState<boolean>(false);
    
    const items=[
        { victory: true, date: '2019', position: '8th Grade Representative', spots: 4, candidates: 11 },
        { victory: false, date: '2019', position: 'MS President', spots: 2, candidates: 11 },
        { victory: true, date: '2020', position: '9th Grade Representative', spots: 3, candidates: 18 },
        { victory: true, date: '2021', position: '10th Grade Representative', spots: 3, candidates: 9 },

        { victory: true, date: '2022', position: 'Jolli Humanitarian Nominee', spots: 5, candidates: 13 },
        { victory: true, date: '2022', position: 'Jolli Humanitarian Award', spots: 13, candidates: 1 },

        { victory: true, date: '2022', position: 'Rise Finalist', spots: 500, candidates: 10_000 },
        { victory: false, date: '2022', position: 'Rise Winner', spots: 100, candidates: 10_000 },

        { victory: true, date: '2022', position: '11th Grade Representative', spots: 3, candidates: 11 },
        { victory: true, date: '2023', position: '12th Grade Representative', spots: 4, candidates: 12 },
        { victory: false, date: '2023', position: 'US Co-President', spots: 2, candidates: 12 },
    ];
    
    return <Page>
        <h1 className='text-center'>Record</h1>
        <p>You win some, you lose some. The most important thing is that you tried and know you did your best.</p>
        
        <FormControlLabel
            control={
                <Switch onChange={e=>setShowOnlyVictories(e.target.checked)} />
            }
            label="Show only victories (a loss is an absence of a win)"
        />
        
        <Table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Position</th>
                    <th># Spots</th>
                    <th># Candidates</th>
                    <th>Odds</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, i)=>{
                    if (showOnlyVictories && !item.victory) return;

                    return <tr className={item.victory ? victoryClass : lossClass} key={i}>
                        <td>{item.date}</td>
                        <td>{item.position}</td>
                        <td>{item.spots}</td>
                        <td>{item.candidates}</td>
                        <td>{Math.round(item.spots/item.candidates*100)}%</td>
                    </tr>;
                })}
            </tbody>
        </Table>
        
    </Page>;
  }
