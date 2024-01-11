import Page from '@/components/page/DefaultPage';
import Image from 'next/image';
import Link from 'next/link';
import Flag from '@jcomponents/flag';
import { PDFIcon } from '@/components/icons';

export default function NYCGoverment() {
    const root='/nyc/nyc-government/';
    
    return <Page bottomPadding seo={{
        title: 'NYC Government Curriculum'
    }}>
        <div className='flex justify-center'>
            <div className='relative w-[48ch]'>
                <h1 className='m:text-4xl my-3'>NYC Government</h1>
                <Flag
                    src='/image/patriotism/nyc-flag.jpg'
                    style={{
                        position: 'absolute',
                        top: '5ch',
                        left: '125ch',
                        zoom: .4
                    }}
                    className='m:hidden'
                />
            </div>
        </div>

        <h3>Rationale</h3>
        {/* TODO: overarching course material */}
        <p>
            This course covers NYC government&apos;s organization and processes. I created it as a senior at Riverdale Country School in order to be a better informed citizen and community board member.
        </p>
        <p>Having benefited greatly from Khan Academy and other free online courses, I am publicizing NYC Government&apos;s curriculum here so you, dear reader, can benefit too.</p>

        <h3>Unit 0: Overview</h3>
        <p>This broad overview will help with making connections throughout the course.
        Take at <a href='/nyc/nyc-government/NYC Government Structure.pdf'>this overview of NYC&apos;s goverment structure <PDFIcon /></a> and <a href="/nyc/nyc-government/NYS Government Structure.pdf">this overview of the state&apos;s government structure <PDFIcon /></a>. Next, skim over <Link href='/nyc/nyc-government/timeline'>this timeline of NYC <PDFIcon /></Link>.</p>
        <p>NYC&apos;s laws and rules are included in the Charter, Administrative Code, and Rules <a href="https://codelibrary.amlegal.com/codes/newyorkcity/latest/overview" target="_blank">published here</a>. The state&apos;s laws are part of the <a href='https://www.nysenate.gov/legislation/laws/CONSOLIDATED' target='_blank'>Consolidated Laws of New York</a>.</p>
        
        

        <h3>Unit 1: The Mayor & Departments</h3>
        <div>
        <p>
            Essential questions: How do departments interact with other government agencies? How do they evolve over time? How does their funding change from mayor to mayor?
        </p>
        <p>
            <strong>Module 1.1: Mayorship</strong>
        </p>
        <div>
            Learn about the mayor&apos;s powers, which include appointing and overseeing departments, acting during states of emergencies, and representing NYC outside of the city (e.g., Conference of Mayors). Read pages 19–24 in Kivelson on the roles of the mayor. Then, the mayoralties of Adams, De Blasio, Bloomberg, Giuliani, Dinkins, Koch, Beame, Lindsay, Wagner Jr., and La Guardia <a href="/nyc/nyc-government/Meet the Mayors.pdf">in this compilation <PDFIcon /></a>. As you read, see if you can find examples of the Third Law of Historical Motion (i.e., which mayors succeeded each other because of a campaign contrasting their predecessor). When you have finished, 
            <details>
                <summary className='cursor-pointer'>click here for the examples we found</summary>
                <ul>
                    <li>Adam&apos;s was elected in response to the police violence and Black Lives Matter. Some mayors manage to take both sides, like Adams with the police and black protesters, and others manage to lose both sides by staying in the middle, like Dinkins with the Crown Heights rioters.</li>
                    <li>De Blasio was elected in response to five Republican terms (three terms of Bloomberg and two terms of Giuliani).</li>
                    <li>Bloomberg was elected in response to 9/11, as a need for a businessman to revive the city.</li>
                    <li>Dinkins was a reaction to Ed Koch, who created racial tension by being racially insensitive in his comments and closing down a hospital serving a Black neighborhood.</li>
                    <li>Ed Koch was a reaction to Tammany Hall. He helped to dismantle it.</li>
                </ul>
            </details>
        </div>
        <div>Skim over the mayor&apos;s <a href="https://www.nyc.gov/assets/omb/downloads/pdf/typ4-23.pdf">ten-year capital budget</a>.</div>
        
        <br />
        <p>
            <strong>Module 1.2: City Agencies</strong>
        </p>
        <p>
            Read Kivelson pages 79–99.
        </p>
        <p>
            Read through the about pages of departments and agencies and learn how the mayor oversees and interacts with them:
        </p>
        <ul>
            <li><a href="/nyc/nyc-government/Department of Education.pdf">Department of Education (DOE) <PDFIcon /></a></li>
            <li><a href="/nyc/nyc-government/NYC DOT.pdf">Department of Transportation (DOT) <PDFIcon /></a></li>
            <li><a href="/nyc/nyc-government/NYC Parks.pdf">NYC Parks &amp; Recreation <PDFIcon /></a></li>
            <li>Department of Buildings (DOB) </li>
            <li>NYC Housing Authority (NYCHA)
            </li>
            <a href="/nyc/nyc-government/Wrapping up City Agencies.pdf">
            <li>Department of Sanitation (DSNY)
            </li><li>NYC Police Department (NYPD)
            </li><li>Economic Development Cooperation (EDC)
            </li><li>Department of City Planning
            </li><li>Department of Housing Preservation and Development
            </li>
            </a>
            <li><a href="https://www.nyc.gov/nyc-resources/agencies.page">nyc.gov&apos;s agency page</a></li>
        </ul>
        <p>
            Formative: Take note of which are well-funded or underfunded in addition to their importance and current issues. Why are some underfunded, and what is the effect?
        </p>
        </div>

        
        <p>Congratulations for making it to the end of unit 1. It&apos;s time for <Link href='/nyc/nyc-government/unit-1-test'>a quiz</Link> to see if you were paying attention!</p>

        <h3 id='borough'>Unit 2: Within the Borough</h3>
        <p>Essential question: What is the interface between the community boards and the borough boards and borough presidents?</p>

        <p>
        <strong>Module 2.1: The Borough Presidents</strong>
        </p>
        <p>
            Read Kivelson pages 28–30 and <a href="/nyc/nyc-government/NYC Charter Borough Presidents.pdf">Chapter 8 of the NYC Charter sections 82 and 83 <PDFIcon></PDFIcon></a> to understand the office of the borough president. Read the <a href="/nyc/nyc-government/Borough Presidents.pdf">biographies of the current borough presidents, Mark Levine, Vanessa Gibson, Antonio Reynoso, Donovan Richards, and Vito Fossella <PDFIcon></PDFIcon></a>.
            Next, read <em><a href="/nyc/nyc-government/A Case for and Against the Borough President in Twenty-First Century New York City.pdf">A Case for and Against the Borough President in Twenty-First Century New York City <PDFIcon></PDFIcon></a></em>. This is a note by a Fordham law student. A note is shorter than an article and provides a summary and analysis of a subject that an uninformed reader should be able to understand.
        </p>
        <details>
            <summary>Here are my thoughts on the Berg reading</summary>
            <ul>
            
            <li>The City Council is actually less citywide than I thought. It is more parochial whereas the mayor and departments are citywide.</li>
                
            <li>We saw federalism government interplay between the city and federal government in Berg 234. The city government defaults to the mayor&apos;s authority when it comes to federal matters because the mayor has more experience and has existed for longer and represents the city outside of the city. He (or she) also has a citywide view as opposed to the representatives, which are concerned about both their districts and the entire city.</li>
                
            <li>Resolutions allow the council to send requests to the federal government. I know the mayor has called on the federal government to prevent the migration influx in NYC, but I wonder if the council has taken any action around this issue? Resolutions to the state and federal government are suggestions, but carry no real weight.</li>
                
            <li>Home rule messages ask the state for the granting of more rights to the city. For example, all taxes besides property taxes require home rule provisions.</li>
                
            <li>The mayor has better staff and media coverage than the council. The mayor is more powerful than the council.
            </li>  
            </ul>
        </details>

        <p>
        <strong>Module 2.2: The Borough Boards</strong>
        </p>
        <p>
        Learn about the issues talked about in the borough boards, including Uniform Land Use Review Procedure (ULURP), borough issues past, and conflicts between community boards. Watch a borough board meeting recording from <a href="https://www.manhattanbp.nyc.gov/resources/manhattan-borough-board/">their website</a>.
        </p>



        <p>
        <strong>Module 2.3: The Community Boards</strong>
        </p>
        <p>
        Read CB1&apos;s monthly minutes, reports, resolutions, and other online archives. Read <a href="https://drive.google.com/file/d/1HB2eJ6d1wxKb1sUSAcVZgLWQe0bhJGZg/view?usp=drive_link">Fordham Urban Law Journal&apos;s review of community boards&apos; history, present, and future <PDFIcon></PDFIcon></a>.
        </p>
        <p>
        Read <a href="https://www.nyc.gov/assets/planning/download/pdf/applicants/applicant-portal/lur.pdf">this chart</a> summarizing how ULURP works.
        </p>

        <br />
        <p>Unit summative: Write a short essay evaluating the strengths and weaknesses of having NYC government separated on the city, borough, and community district levels. The audience for this essay is an engaged citizen of NYC. Here is the essay that I wrote:</p>
        <Link href='/nyc/nyc-government/Unit 2 Essay Division of Power within NYC.pdf' className='inline'>
            Division of Power Essay
            <PDFIcon></PDFIcon>
        </Link>

        <h3>Overarching Observations</h3>
        <ul>
            <li>The Wendy Chapman Rule: all City Hall officials move at once. You may go from getting &quot;no&quot;s or no responses for years from different officials to all of a sudden one day they all say &quot;yes.&quot;</li>
            <li>The Third Law of Historical Motion: </li>
            <li>
                There are often overlapping agencies governing the same property. Just take a look at this CB1 resolution:
                <Image src={root+'overlapping-resolution.png'} alt="Overlapping resolution" width={430} height={89} />
            </li>
            <li>
                Is CB1 what replaced congregations for me since I am an atheist? Perhaps, because we meet regularly as a parochial entity. The definition of &quot;church&quot; can be more flexible for modern context. Mr. Kildahl sees Riverdale as a church because it is one of the sources of his faith.
            </li>
            <li>Assemblyman Ron Kim said that it is easier to make your opponent&apos;s voters not turn out to vote than it is to excite voters to vote for you. I have noticed this in my council district&apos;s 2023 election. There were 23,212 voters in 2021 for Manhattan Council District 1 but only 12,486 in 2023 (<a href='https://ballotpedia.org/Christopher_Marte'>source</a>). This low turnout occurred after attack ads against the incument Councilmember Marte from Susan Lee in the primary and Helen Qiu in the general election were put all over the district: on the buildings, in shops, and in the mail. Turnout went down by about half, likely because these ads made Marte supporters not want to vote.</li>
        </ul>

        <h3>Unit 3: City Council</h3>


        <p>
        Essential question: What is the purpose of the City Council, and how does it integrate with the executive positions (Mayor and Borough Presidents)?
        </p>
        <p>
        <strong>Module 3.1: Election Process</strong>
        </p>
        <p>
        Learn about term limits and how elections are conducted. Analyze the 2023 City Council election.
        </p>
        <p>
        <strong>Module 3.2: Field Trip</strong>
        </p>
        <p>
        Watch a virtual City Council stated meeting from the <a href="https://legistar.council.nyc.gov/Calendar.aspx">calendar</a>. Then, attend a City Council stated meeting in person on the Chambers’ Observatory Mezzanine. Just ike in British Parliament, you can sit above the council to watch it proceed. Write a reflection on what you notice and find interesting.
        </p>
        <p>
        Here is my reflection.
        </p>
        <p>
        <a href={root+'11_2_2023 City Stated Council Meeting (Watched Recording).pdf'}>11/2/2023 City Stated Council Meeting (Watched Recording) <PDFIcon></PDFIcon></a>
        </p>
        <p>
        <a href={root+'11_15_23 City Council Stated Meeting.pdf'}>11/15/23 City Council Stated Meeting <PDFIcon></PDFIcon></a>
        </p>
        <p>
        Attend a City Council meeting publicly (either in-person or remotely). Read parts of the NYC administrative code to see examples of passed regulations.
        </p>
        <p>
        <strong>Module 3.3: City Council Rules</strong>
        </p>
        <p>
        Read Chapter 8 of Berg on council rules.
        </p>


        <br />
        <p>We have seen the names of many people repeated. Take a look at <a href={root+"names-of-positions"}>this list of names and positions
        </a>.</p>

        <h3>Unit 4: Public Advocate (Ombudsman)</h3>


        <p>
        <strong>Module 4.1: Public Advocate Office</strong>
        </p>
        <p>
        Read Kivelson pages 24–25 on the public advocate. Find issues that former public advocates have brought up.
        </p>
        <p>
        <strong>Module 4.2: Jumaane Williams</strong>
        </p>
        <p>
        Read about Jumaane Williams, what his main issues are, and what he has done while in office.
        </p>
        <p>
        Formative: Write a paragraph about the importance of the public advocate. What has this role achieved? Is it too weak? Then, write a paragraph about the relationship between the public advocate and the Mayor and City Council. 
        </p>



        <h3>Unit 5: Non-Government Organizations</h3>


        <p>
        Read page 56 of Kivelson to learn about the procurement process. Then, learn about the NGOs, union, and advocacy groups, including:
        </p>
        <ul>

        <li>Downtown Alliance</li>

        <li>Battery Park City Authority (BPCA)</li>

        <li>NY Public Library (NYPL)</li>

        <li>NYC Economic Development Corporation (EDC)</li>

        <li>Robin Hood Foundation</li>

        <li>City Harvest</li>

        <li>NY Immigration Coalition (NYIC)</li>

        <li>Rocking the Boat (founded as a Riverdale middle school club)
        </li>
        </ul>
        <p>
        Keep a Google document log of government agencies with a summary of their impact.
        </p>
        <p>
        Summative: Write an essay answering the following prompt: Why do non-governmental agencies exist? How do they organize themselves and interact with the government?
        </p>

        {/* <p>Watch <a href='https://www.kanopy.com/en/product/my-brooklyn-demystifying-gentrification' target='_blank'>My Brooklyn</a>, a film about gentrification in Downtown Brooklyn.</p> */}

        {/* TODO: insert course notes https://drive.google.com/drive/folders/14nZ9QgbKep7FxUL_hEuR81PILg49WHpl */}
        {/* TODO: insert my writing and initial reflection */}
        {/* TODO: insert materials in overview so people know what Kivelson is */}
        {/* TODO: city budget
        https://drive.google.com/open?id=1xBsZGSgMYFJD213ziwKnpi0hghOMXKgeksAXRz9kh2o&usp=drive_copy
        */}


        {/* <h2>About</h2> */}
        {/* <Image width={262.5} height={350} src="/nyc/nyc-government/municipal-building.jpg" alt="Municipal Building" className='inline' /> */}
        <h3>Resources</h3>
        <ul>
            <li><a target='_blank' href='https://nycadmincode.readthedocs.io'>Administrative Code</a></li>
            <li><a target='_blank' href='https://intro.nyc/local-laws'>Local Laws</a></li>
            <li><a href="https://www.nyc.gov/site/civicengagement/our-programs/community-boards.page">Civic Engagement Commission’s Resources</a></li>
            <li><a href="https://www.amazon.com/What-Makes-New-York-City-ebook/dp/B07JDGMY7L/ref=sr_1_11?crid=140T8B2PSDWSH&keywords=new+york+city+government&qid=1680284825&s=books&sprefix=new+york+city+gove%2Cstripbooks%2C92&sr=1-11">What Makes New York City Run?: A Citizen&apos;s Guide to How City Government Works</a> by Adrienne Kivelson (2018) </li>
            <li>Adrienne Kivelson - City Affairs Chair of NYC League of Women Voters </li> 
            <li><a href="https://www.rutgersuniversitypress.org/new-york-city-politics/9780813586663">New York City Politics: Governing Gotham</a> by Bruce F. Berg (2018)</li>
            <li><a href="https://codelibrary.amlegal.com/codes/newyorkcity/latest/overview">AMLegal</a> - Administrative Code, Charter, and Rules</li>
            <li>CB1 monthly minutes, reports, resolutions, and other online archives </li>
        </ul>


        
        <h3>Logistics</h3>
        <p>We met twice a week in the fall of 2023 for a total of 25 classes.</p>
        <p>Thank you, Mr. Kildahl.</p>
        <Image width={262.5} height={350} src="/nyc/nyc-government/joel-and-mr-kildahl.jpg" alt="Municipal Building" />

    </Page>;
}

export function Markdown({ title, hyphenatedTitle }: { title: string, hyphenatedTitle: string }) {
    return <Link href={`/nyc/nyc-government/${hyphenatedTitle}`}>
        {title}
    </Link>;
}
