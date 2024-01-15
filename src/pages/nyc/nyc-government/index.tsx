import Page from '@/components/page-client/DefaultPage';
import Image from 'next/image';
import Link from 'next/link';
import Flag from '@jcomponents/flag';
import { PDFIcon } from 'src/components/icons';

export default function NYCGoverment() {
    const root = '/nyc/nyc-government/';

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
            Read <a href={root + 'Reimagining Community Input_ Past Present and Future of New York.pdf'}>Fordham Urban Law Journal&apos;s review of community boards&apos; history, present, and future <PDFIcon></PDFIcon></a>.
        </p>
        <p>We met the author, Egor Shaknovskiy to ask him questions and learn more.</p>
        <p>
            Read <a href="https://www.nyc.gov/assets/planning/download/pdf/applicants/applicant-portal/lur.pdf">this chart</a> summarizing how ULURP works.
        </p>

        <br />
        <p>Unit summative: Write a short essay evaluating the strengths and weaknesses of having NYC government separated on the city, borough, and community district levels. The audience for this essay is an engaged citizen of NYC. Here is the essay that I wrote:</p>
        <Link href='/nyc/nyc-government/Unit 2 Essay Division of Power within NYC.pdf' className='inline'>
            Division of Power Essay
            <PDFIcon></PDFIcon>
        </Link>


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
            Watch a virtual City Council stated meeting from the <a href="https://legistar.council.nyc.gov/Calendar.aspx">calendar</a>. Then, attend a City Council stated meeting in person on the Chambers’ Observatory Mezzanine. Just like in British Parliament, you can sit above the council to watch it proceed. Write a reflection on what you notice and find interesting.
        </p>
        <p>
            Here is my reflection.
        </p>
        <p>
            <a href={root + '11_2_2023 City Stated Council Meeting (Watched Recording).pdf'}>11/2/2023 City Stated Council Meeting (Watched Recording) <PDFIcon></PDFIcon></a>
        </p>
        <p>
            <a href={root + '11_15_23 City Council Stated Meeting.pdf'}>11/15/23 City Council Stated Meeting <PDFIcon></PDFIcon></a>
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
        <p>We have seen the names of many people repeated. Take a look at <a href={root + "names-of-positions"}>this list of names and positions
        </a>.</p>

        <h3>Unit 4: Accountability</h3>


        <p>
            <strong>Module 4.1: Public Advocate (Ombudsman)</strong>
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

        <strong>Module 4.3: Budgeting Process</strong>
        <p>Read&nbsp;
            <a href="/nyc/nyc-government/How Budget Process Works.pdf">How Budget Process Works</a>
            &nbsp;and&nbsp;
            <a href="/nyc/nyc-government/Understanding the Budget.pdf">Understanding the Budget</a>
            .
        </p>


        <strong>Module 4.4: Comptroller</strong>
        <p>Read Kivelson pages 25–27 to learn about the comptroller.</p>



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
        <p>Keep a Google document log of government agencies with a summary of their impact.</p>
        <a href={root + 'NGOs.pdf'}>Here is our document</a>.



        <h3>Unit 6: State Court System</h3>
        <div>
            <strong>Module 6.1: State Courts</strong>
            <p>In this unit, learn the functions and divisions of the different New York State courts, of which NYC is a part. Read:</p>
            <ul>
                <li><a href="https://video.dos.ny.gov/lg/handbook/html/the_judicial_system.html">The Judicial System · GitBook</a>
                </li><li><a href={root + 'NY Courts-Intro Guide.pdf'}>NY Courts-Intro Guide.pdf</a>
                </li><li><a href="https://spectrumlocalnews.com/nys/central-ny/news/2022/03/01/covid-impact-on-ny-courts-still-felt--two-years-later">COVID impact on NY courts still felt, two years later</a>
                </li><li><a href="https://www.findlaw.com/litigation/filing-a-lawsuit/civil-cases-vs-criminal-cases-key-differences.html">Civil Cases vs. Criminal Cases: Key Differences - FindLaw</a>
                </li>
            </ul>
        </div>
        <p>Notes were taken in <a href={root + 'NYS Courts.pdf'}>this document</a>.</p>



        <h3>Unit 7: City Processes</h3>

        <p>
            <strong>Module 7.1: Zoning</strong>
        </p>
        <p>
            Read parts of <a href="https://zr.planning.nyc.gov">NYC’s Zoning Resolution</a> as well as legal summaries elsewhere and learn the history behind its passing and how zoning laws can be amended. <a href="https://discovery-ebsco-com.riverdale.idm.oclc.org/c/sjqbnh/viewer/html/7aq2vdar45">Read this page on Moses</a> and <a href="https://buildingtheskyline.org/zoning-moses-1/">this article on zoning and Moses</a>. Read Kivelson 59–69 on land use and city planning.
        </p>
        <p>
            Summative: Write an essay comparing the benefits of either having Robert Moses or the Zoning Resolution control NYC infrastructure.
        </p>
        <p>
            <strong>Module 7.2 City Planning Commission</strong>
        </p>
        <p>
            Learn how the City Planning Commission (CPC) reviews land use applications and enacts zoning policy. Explore the history of redlining and gentrification (e.g., Harlem, Greenwich Village, SoHo, Williamsburg, and Bushwick). Is Chinatown at risk of gentrification?
        </p>
        <p>
            <strong>Module 7.3: Budgeting</strong>
        </p>
        <p>
            Learn about the budgeting process. Read Kivelson pages 25–27 to learn about the comptroller. Read Kivelson 43–56 to learn about the budget process and revenue generation. Learn how the community board helps with the city budgeting process.
        </p>
        <p>
            Formative: Make a presentation explaining the NYC budgeting process and its purpose.
        </p>


        <h3>Unit 8: Federalism</h3>
        <div>
            <p>
                <strong>Module 8.1: Relationship to the NY State Government</strong>
            </p>
            <p>
                Just like city budget proposals go to the state government, many other agencies and processes are shared with the state government. How does the MTA operate? How do the city and state collaborate to run the MTA? Why did DeBlasio and Cuomo bicker all the time and over what? How do NYC and NYS courts relate? Read Chapter 3 of Berg.
            </p>
            <p>
                Meet Assemblyman Ron Kim, Riverdale graduate. Prepared questions and took notes <a href={root + "Meeting Ron Kim.pdf"}>in this document</a>.
            </p>
            <p>
                <strong>Module 8.2: Relationship to the Federal Government</strong>
            </p>
            <ul>
                <li>How do projects receive federal funding? Learn about grants.
                </li><li>Learn about the U.S. Army Corps and the role it is playing in coastal resiliency and other civil engineering projects.
                </li><li>Read Chapter 4 of Berg.
                </li></ul>
        </div>



        <h3>Unit 9: Current Issues (Optional)</h3>
        <div>
            <p>
                Depending on how much time this course takes, this unit can be skipped. Reports from the mayor or departments can be found <a href="https://www.nyc.gov/site/operations/performance/mmr.page">here</a>.
            </p>
            <p>
                <strong>Module 9.1: Climate Resiliency</strong>
            </p>
            <p>
                Read <a href="https://www.nyc.gov/assets/orr/pdf/publications/Coastal-Protection-Guidance.pdf">Coastal Protection Guidance</a> written partly by Jeff Galloway of MCB1. Then, read the United States Army Corps’ (USACE) NY-NJ HATS plan and think about the pros (preventing flooding) and cons (blocking views of the river).
            </p>
            <p>
                Summative: Write an essay answering the prompt: Is USACE’s plan a good idea, and how does USACE compare to Lower Manhattan’s coastal resiliency?
            </p>
            <p>
                <strong>Module 9.2: Local Laws</strong>
            </p>
            <p>
                Learn how the local laws help fight climate change, such as local law 60, 64, and 97.
            </p>
            <p>
                <strong>Module 9.2: Housing Crisis</strong>
            </p>
            <p>
                Why has the construction of new housing been so scarce since the 1930s? In what ways are poor zoning regulations contributing to this (i.e., the Garment District only permits manufacturing buildings)? How is public housing created? Read pages 337–383 of the 2022 Mayor’s Management Report.
            </p>
            <p>
                <strong>Module 9.3: Storefront Vacancies</strong>
            </p>
            <p>
                Formative assessment: A vacancy tax has been thrown around as a way to prevent overly high tenant rates by taxing landlords for storefront vacancies. Write a paragraph or two in favor of or against enacting this policy.
            </p>
            <p>
                <strong>Module 9.4: Immigration</strong>
            </p>
            <p>
                NYC has committed to taking care of refugees, including those being bused in from Texas right now. How are immigrants and refugees supported and integrated into society by the government or NGOs?
            </p>
            <p>
                <strong>Module 9.5: Homelessness</strong>
            </p>
            <p>
                How does the government help homeless people? Read the <a href="https://www.nyc.gov/site/hpd/about/housing-blueprint.page">Housing Blueprint</a> government report.
            </p>
            <p>
                <strong>Module 9.6: Prisons</strong>
            </p>
            <p>
                How does the NYCDOC operate? How are the new prisons being built to replace Riker’s Island more humane? What sort of mental health services are available in the city?
            </p>
            <h3>Unit 10: Wrapping Up</h3>
            <p>
                <strong>Module 10.1: Reflection</strong>
            </p>
            <p>
                Write a reflection about what your thoughts are on what the course covered. What are your recommendations for changing the structure of NYC’s government? Where is the city government underfunded or overfunded?
            </p>
            <p>
                <strong>Module 10.2: Party</strong>
            </p>
            <p>
                Play Inner City Blues by Joe Cocker. It embodies the passion that community board members have at addressing the city’s issues.
            </p>
        </div>

        {/* <p>
            {/* TODO: insert coursework /}
            Summative: Write an essay answering the following prompt: Why do non-governmental agencies exist? How do they organize themselves and interact with the government?
        </p> */}


        <h3>Overarching Observations</h3>
        <ul>
            <li>The Wendy Chapman Rule: all City Hall officials move at once. You may go from getting &quot;no&quot;s or no responses for years from different officials to all of a sudden one day they all say &quot;yes.&quot;</li>
            <li>The Third Law of Historical Motion: </li>
            <li>
                There are often overlapping agencies governing the same property. Just take a look at this CB1 resolution:
                <Image src={root + 'overlapping-resolution.png'} alt="Overlapping resolution" width={430} height={89} />
            </li>
            <li>
                Is CB1 what replaced congregations for me since I am an atheist? Perhaps, because we meet regularly as a parochial entity. The definition of &quot;church&quot; can be more flexible for modern context. Mr. Kildahl sees Riverdale as a church because it is one of the sources of his faith.
            </li>
            <li>Assemblyman Ron Kim said that it is easier to make your opponent&apos;s voters not turn out to vote than it is to excite voters to vote for you. I have noticed this in my council district&apos;s 2023 election. There were 23,212 voters in 2021 for Manhattan Council District 1 but only 12,486 in 2023 (<a href='https://ballotpedia.org/Christopher_Marte'>source</a>). This low turnout occurred after attack ads against the incument Councilmember Marte from Susan Lee in the primary and Helen Qiu in the general election were put all over the district: on the buildings, in shops, and in the mail. Turnout went down by about half, likely because these ads made Marte supporters not want to vote.</li>
        </ul>

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
        <Image width={325} height={350} src="/nyc/nyc-government/joel-and-mr-kildahl.jpg" alt="Joel and Mr. Kildahl" className='inline mx-3' />
        <Image width={262.5} height={350} src="/nyc/nyc-government/municipal-building.jpg" alt="Municipal Building" className='inline' />

    </Page>;
}

export function Markdown({ title, hyphenatedTitle }: { title: string, hyphenatedTitle: string; }) {
    return <Link href={`/nyc/nyc-government/${hyphenatedTitle}`}>
        {title}
    </Link>;
}
