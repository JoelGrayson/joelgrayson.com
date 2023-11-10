import { CodeIcon } from '@/components/Icons';
import Page from '@/components/global/Page';
import { Tooltip } from 'antd';
import Image from 'next/image';

export default function NYCBudget() {
    const overallCategories: [number, string][]=[ //billions
        [32.4, 'Payroll'],
        [10.8, 'Capital expenditures'],
        [35.2, 'Contracts'],
        [3.1, 'Agencies & Trusts'],
        [16.5, 'Other'],
    ];

    return <Page bottomPadding>
        <style jsx>{`
            .overall-categories {
                display: flex;
                width: 100%;
                height: 80px;
            }
            .overall-categories>div {
                cursor: pointer;
                background-color: #ccc;
                height: 50px;
                margin: 1px;
                text-align: center;
                line-height: 50px;
                white-space: nowrap;
                min-width: 1px;
                overflow: hidden;
            }
        `}</style>

        <h1 className='text-center'>Visualization of NYC&apos;s Budget</h1>
        <h3>Overall Categories</h3>
        <p>Total: $98B</p>
        <p>Personal services (PS) and other than personal services (OTPS)</p>
        <div className='overall-categories'>
            {
                overallCategories.map(([billions, text]: [number, string])=>
                    <Tooltip title={`${text} ($${billions}B)`} key={text}>
                        <div style={{ width: `${billions/98*100}%` }}>{text}</div>
                    </Tooltip>
                )
            }
        </div>
        <p><a href='' target='_blank'>Source</a></p>


        <h3>Spending by Agency</h3>
        <p>Total: 107B</p>
        <Image src='/nyc/nyc-government/nyc-budget/department-spending.png' width={500} height={500} alt='Department Spending circular packing chart' />
        <p><a className='styled' href='https://www.nyc.gov/assets/omb/downloads/pdf/fps-jul-2023.pdf' target='_blank'>Source: July 2023 Financial Plan Statement Report 4 and 4a</a></p>


        <h3>Capital Commitments</h3>
        <Image src='/nyc/nyc-government/nyc-budget/capital-commitments.png' width={500} height={500} alt='Capital Commitments circular packing chart' />
        <p><a className='styled' href='https://www.nyc.gov/assets/omb/downloads/pdf/fps-jul-2023.pdf' target='_blank'>Source: July 2023 Financial Plan Statement Report 5</a></p>


        <br /><br />
        <p>Created in October, 2023</p>
        <a href='/nyc/nyc-government/nyc-budget/main.py' target='_blank' className='styled'>
            <CodeIcon width={30} />
            <span className='ml-3'>Download the code that generated the circular packing charts</span>
        </a>


        <br /><br /><br />
        <h3>From the CEC & IBO 2023 CB1 Training Session</h3>
        <Image src='/nyc/nyc-government/nyc-budget/expense-by-budget.png' width={500} height={500} alt='Capital Commitments circular packing chart' />
    </Page>;
}
