import ArticleWrapper from '@/components/blog/ArticleWrapper';
import Info from '@/components/global/Info';
import { DownloadIcon } from '@/components/icons';
import { Citation, Footnote, P, H2 } from '@jcomponents/writing-components';
import Link from 'next/link';
import Image from 'next/image';

export function Citations({ numbers }: { numbers: string }) {
    const numList = numbers.split(',');

    return <>
        {numList.map((n, i)=>{
            const isLast = i === numList.length - 1;

            return <>
                <Citation number={n} />
                { !isLast && <sup>,</sup> }
            </>;
        })}
    </>;
}

export default function Meat() {
    
    return <ArticleWrapper title='A Realistic Path to Ending 99% of Human-Induced Animal Suffering' date={new Date('March 13, 2025')} hyphenatedTitle='meat'>
        <div className="flex justify-end mb-10">
            <Link href="/blog/meat.pdf" className="button" target='_blank'>
                <DownloadIcon />
                Download as PDF
            </Link>
        </div>
        
        <P>Factory-farmed meat makes up the overwhelming majority of human-induced animal suffering. In the U.S., there are 500 times more animals that are factory farmed than are used in lab testing (10 billion versus 20 million per year) <Citations numbers='1,2' />. When we think of meat, we may imagine cows and chickens roaming around on a farm and eventually being slaughtered by a good ol’ farmer wearing a straw hat. However, this is not the reality for most meat. A whopping 99% of global meat is produced in factory farms <Citation number='1' />. The current state of meat production is abysmal. Factory farming companies are economically incentivized to treat their animals poorly in the name of efficiency, cramming them into tiny spaces where they cannot walk or turn around for most of their lives, force-feeding them, and separating children from their mothers <Citations numbers='3,4' />. Ending suffering in factory farming would therefore end 99% of human-induced animal suffering, so this goal will be the focus herein. Reforming the modern meat industry and developing cellular agriculture are the two most effective and realistic ways to achieve this goal.</P>

        <P>Part 1 will address why treating animals poorly is wrong and additional issues with factory farming. Parts 2 and 3 examine solutions. Part 2 proposes the Minimally Evil And Torture-free (MEAT) label, which the USDA would issue to meat if it fulfills certain quality of life requirements. This label would empower consumers to pay the premium for raising meat ethically, reforming the meat industry with accountability from the government. Part 3 proposes cellular agriculture, an entirely new way of procuring meat.</P>
        
        <H2>Part 1: Current Factory Farming Is Problematic</H2>
        <P>Let us state as an axiom that suffering is bad and should be avoided if possible. Even though animals are less intelligent than humans, they are sentient (able to feel pain and suffer). In <em>Animal Liberation Now</em>, Peter Singer demonstrates that mammals and birds are sentient by pointing to experiments in which rats make decisions with pain, weighing the pain of a shock with the desire for food. He also references scientific studies that show that the human brain structure is mainly different from that of animals in the ability to reason, not in sentience and consciousness.</P>
        
        <P>A pig has the same intelligence level as a three-year-old. Is it wrong to cram a three-year-old boy in a crate where he cannot move around for most of his life, castrate him without anesthesia, and force-feed him? Obviously yes. Is it wrong to do it to a pig instead? If not, why? Perhaps it seems wrong with the toddler but not the pig because only the toddler will grow up to be an adult human who can reason and is smarter than the pig. This argument is weak because then what if we change the thought experiment so the three-year-old never grows up but lives as a three-year-old for 50 years? Would it be okay to treat him like that now? No. Also, if this argument based on future potential were valid, then it would be unethical to destroy sperm because it has the potential to turn into a reasoning being in the future. Nonsense! Perhaps the distinction then is that the three-year-old is a human, not a pig, and deserves special treatment. However, we already established that their intelligence levels are the same, they both experience pain and suffer, and they both are social creatures who like to play. There seem to be no differences in these creatures despite their outward appearances, hooves instead of feet and snouts instead of noses. The human brain is tricking people into thinking that humans are worth more than animals by virtue of being human. However, this thought experiment demonstrates that there is no distinction in wrongness between mistreating a three-year-old human and a pig.</P>
        <P>To go one step further, would it be less unethical to mistreat a three-year-old in these ways than a 40-year-old? Instinctively no, meaning even age does not matter. Only sentience, the ability to feel pain, ethically matters regarding treating other creatures. By the transitive property, if it is equally wrong to torture a pig as a three-year-old human and a three-year-old human as a 40-year-old human, then it is equally wrong to torture a pig as an adult human. Thus, from a moral standpoint, it is as important to stand up against pigs&apos; suffering as if adult humans were the ones suffering on the farms.</P>
        <P>Another way to reach this conclusion is to imagine someone waved a wand and turned you into a pig. You would still be conscious, self-aware, have memories, want to socialize with others, and even reason, albeit to a much lesser extent. Do you not deserve rights anymore? No, because you can still suffer.</P>
        <P>Perhaps it is the case that three-year-olds have more sentience than pigs and adults more sentience than three-year-olds, so the suffering of a three-year-old would be twice that of the suffering of a pig and the suffering of an adult four times that of a pig. Even so, that would make the suffering of pigs in the status quo equivalent to torturing 18 million adults.<Citation number='1' /></P>
        <P>If you still believe that whether someone is intelligent, rather than whether they are sentient, should decide whether it is immoral to torture them, remember that we do not treat elderly people who develop Alzheimer’s as if they do not matter anymore. We do not treat them as if it is fine to let them suffer now, since they are not intelligent anymore. We know that though they are no longer intelligent, since they can still experience pain, we should try to help them avoid pain. Since they are unable to do so themselves in the late stages of this disease, we have to intervene to ensure they do not suffer. The same goes for animals. We have to ensure that they are not being tortured since they have no say in how factory farms are run.</P>
        
        <P>Throughout human history, different groups of people have resisted oppression. Today, there is overall more equality than in the past because people stood up for themselves. Women fought for their rights in the women’s rights movement, and men joined them. Likewise, the Civil Rights Movement advocated for granting the same rights to black people as white people. In both cases, two things happened. First, the oppressed group stood up for themselves, resisting oppression and advocating for equality. Second, the group in power joined the oppressed because they realized that their rights are just as important because although different on the surface (men and women have different bodies, and black and white people look different), they both share the same abilities to think, suffer, and prosper. By contrast, animals cannot effectively advocate for themselves. However, hopefully, people can come around to realize that the second conclusion applies to them too: though different on the surface from us, they deserve rights because they share the ability to think, suffer, and prosper.</P>

        <P>Besides animal cruelty, there are other issues with the status quo of factory farming. Regarding the environment, livestock production emits 18% of global greenhouse gas emissions, takes up two-thirds of agricultural land, uses a large portion of the freshwater supply, destroys forests and grasslands, causes soil erosion, and creates coastal “dead areas.” <Citation number='5' /> Since a large portion of greenhouse gas emissions comes from methane from the animals themselves, it is difficult to imagine getting to zero-emission targets while still producing meat in the conventional way. Factory farming causes disease and makes antibiotics less effective.<Citation number='4' /> Birds and pigs have caused influenza virus infections. Since factory-farmed animals are cramped together, they are in prime condition for infecting each other. Farmers use copious amounts of antibiotics to avoid losing their animals to disease. In the U.S., three-quarters of antibiotics go to factory farms, and globally half go to farm animals.<Citation number='4' /> Factory farms increase the risk of viral epidemics and act as a ground for developing zoonotic diseases (diseases that can be transferred between animals and humans) that are antibiotic-resistant.</P>
        
        

        {/* Footnotes til here */}

        <H2>Part 2: Factory Farm Reform with the Minimally Evil and Torture Free (MEAT) Label</H2>
        
        <P>Animals are mistreated because of the way the economy and present-day incentive structures are set up. Without a nudge from the government, it is unrealistic to expect consumers or meat producers to change their behavior to fix the issue. Currently, grocery store shoppers and kitchens sourcing meat usually look for the cheapest options. Market forces to make meat as cheap as possible make meat producers take measures for efficiency that result in animal suffering. If a meat producer treated their animals better than competitors, their meat would be more expensive, so people would not buy it, and they would go out of business. On the consumer side, it is difficult to tell which meat was ethically produced. However, there is potential for change. According to a study from NSF International, 67% of American consumers say animal wellness is very or extremely important to purchasing decisions, and 66% say they would be more willing to pay for products certified for animal wellness.<Citation number='6' /></P>

        <P>Here is a better way: introducing the Minimally Evil And Torture-free (MEAT) label, a proposal to guide market forces to reform the meat industry to stop animal suffering. For meat being sold to earn this label, it must satisfy five stipulations enforced by the USDA:</P>

        <Image src={'/image/blog/meat/MEAT.png'} alt='MEAT' width={100} height={100} className='float float-right' />

        <ol>
            <li>Room, sunlight, and ventilation</li>
            <li>Natural growth pace</li>
            <li>No unnecessary death or mutilation</li>
            <li>Ability to satisfy instincts</li>
            <li>Transparency and enforceability</li>
        </ol>
        
        <P>The first requirement is regarding the animals’ living space. Animals should have enough room to live comfortably, as they are currently crammed into spaces for most of their lives where they cannot walk or turn around. There should be a minimum square footage per animal based on which species it is. If the animals are inside a shed, it should have windows for sunlight and openings for fresh air. These requirements go one step beyond the EU’s ban of battery cages for hens—typically involving stuffing half a dozen hens into a cage so crowded they can barely move—and gestation crates for veal and sows.<Citation number='4' /></P>

        <P>Second, animals should grow at a natural pace. They should not be force-fed to make them balloon in size or given growth hormones. Genetic variations of chickens that allow them to grow at a comfortable pace are preferable. The current industry heavily selects chickens for their growth speed, leading to chickens that cannot walk. If a chicken is to be brought to this world by us to live a life, it should not be miserable all the time.</P>

        <P>Third, there should be no unnecessary killing and suffering from mutilation. In the name of efficiency, seven billion male chicks are culled annually, usually by being ground up alive.<Citation number='7' /> The U.S. should join France and Germany in banning chick culling. The alternative is to use in ovo sexing, which means identifying the sex of a chick while it has not hatched yet so that the males can be eliminated as unhatched eggs instead of sentient chicks.<Citation number='7' /> Similarly, practices like tail docking (cutting off pigs’ tails) and beak trimming (cutting off chickens’ beaks) to prevent animals from biting or even eating one another are usually done without anesthesia, resulting in widespread suffering. The solution to this problem should be to give them more space, not cut off their body parts.<Citation number='8' /> Castration, ear notching (for identification), and dehorning should also be stopped.<Citation number='8' /></P>

        <P>Fourth, animals should be able to satisfy their natural instincts. Chickens should be given elevated platforms, so they can roost at ease, and pigs should be allowed to root. While these activities may seem unappealing to us humans, they let the creatures be less stressed and have a better quality of life. Baby animals should also not be separated from their parents until their natural instincts are fine with separation, unlike the present-day practice of separating calves from their mothers shortly after birth. The USDA should research the suffering levels in animals—perhaps with EEG measurements—and experiment with different economical approaches to improve their quality of life.</P>

        <P>Fifth and finally, factory farms should be transparent for these measures to be enforced. Currently, the harsh realities of factory farms are hidden because it is illegal to film inside a factory farm, farms are often windowless and located far from inhabited areas, and “ag-gag” laws prevent employees from reporting animal rights violations.<Citations numbers='9,10' /> MEAT would require a live stream of all rooms with animals to be sent to the USDA. This footage should be analyzed with AI to detect if there are any MEAT violations, so the USDA could step in to enforce the rules or terminate the farm’s right to use the MEAT label. This footage should also be available to the public through FOIA (the Freedom of Information Act, which allows citizens to request federal records). Transparency is important because the Humane Methods of Livestock Slaughter Act, which requires sedating animals before they are slaughtered, is currently poorly enforced.<Citations numbers='4,9,11' /> Alongside AI footage detection, the USDA should do annual inspections of factory farms that claim to produce MEAT to make sure the rules are being followed.</P>

        <P>You may be wondering why we need to create a new label since meat already has many labels. The existing labels are misleading and do not guarantee that animals do not suffer. “Grass-fed meat” sounds desirable, but cows are often still kept in cramped feedlots, the only difference being that they eat grass pellets instead of grain and soy. “Free-range” only applies to chickens and stipulates that at least half of their life must be in an outside field. However, since the chickens are grown unnaturally quickly and have trouble walking, they often choose to stay in cramped conditions despite having the option to go outside.<Citation number='12' /> “Pasture-raised meat” can still involve chick culling, and the label is not USDA-regulated. The “organic” label is the closest existing version of the MEAT label. It is overseen by a board run by the federal government. However, its requirements focus more on animal feed than animal quality of life and have an unscientific bias against GMOs. The “Certified Humane” label is not enforced by the government, charges fees to companies to use it, and still allows for suffering.<Citation number='13' /> Unlike present-day labels, MEAT would be guaranteed to prevent animal suffering without strings attached and enforced by the government. Most consumers will not research the intricacies of what all the different meat labels mean. In a sea of often misleading labels, it would be more effective to have one noticeable, trustworthy label that consumers understand means the meat inside comes from animals that lived a somewhat decent life: MEAT.</P>

        <P>There are currently no laws protecting animals inside factory farms, and the meat industry would likely lobby to continue not having regulation.<Citation number='9' /> Thus, rather than forcing all factory farms to follow the MEAT standard, they are left to operate however they please, but if they want to slap the MEAT label on their products, they must follow its rules. The MEAT label should be easily identifiable in supermarkets. Even if MEAT is twice the price of traditional meat, consumers now have the option to spend extra to ensure that their meat is ethically sourced. People can finally eat their hamburgers without having to suppress their conscience. By adding MEAT as an option for farmers to adopt and consumers to purchase rather than forcing farmers to adopt MEAT, the policy is more palatable and puts the American consumer in power. There could be a separate discussion on whether the government should subsidize MEAT, but I would argue that doing so could lead to corruption—as has been demonstrated with electric school bus rebates causing bus companies to raise the price—and be controversial because the government would be interfering with the economy and spending taxpayer dollars. The whole point is to let market forces stop animal suffering by giving consumers the option to buy ethical meat.</P>

        <P>The equivalent of MEAT for fish could be FISH: Farmed In Stress-free Habitats. Hundreds of millions of fish are killed every day, on par with the hundreds of millions of land animals killed daily.<Citation number={14} /> In aquafarms, which account for half of current fish consumption by weight, salmon are overcrowded, have a high mortality and infection rate, are starved for several days before slaughter, and are killed in horrific, non-instantaneous ways <Citations numbers='15,16' />. FISH could require giving enough room to practice natural behavior, reducing the prevalence of parasites, and making sure their slaughtering is quick and painless.</P>

        <P>Ideally, MEAT would have early adopters (perhaps a quarter of the population) who would purchase it out of concern for animal welfare, starting a cultural shift. Then, the masses would adopt it as followers or out of peer pressure. Restaurants and dining halls could be pushed by their employees to use MEAT, or a donor could offer to put up the money to cover the MEAT premium (additional cost of using MEAT instead of traditional meat), as it seems like a great cause for philanthropy. A donor could give to Stanford, for example, to cover Stanford using MEAT instead of traditional meat for ten years, upgrading the lives of a million animals a year from torturous to decent. Preventing this much suffering sounds like a worthy donation to me, and one I would love to have my name associated with.</P>

        <P>The average American spent $507 per year on meat<Info>$1,216÷2.4 people/core unit</Info>.<Citation number={17} /> If MEAT costs twice as much, they would have to pay an additional $507, or around half what they currently pay to charity ($1,148).<Citation number={17} /> $152 billion would be required annually for Americans to eat MEAT instead of traditional meat.<Info>$507*300,000,000 Americans=$152 billion</Info> This amount seems sizable, but there are hidden costs to traditional meat not reflected in market prices because factory farms do not pay for the consequences of their farming. Meat contributes to 30.9% of foodborne illnesses, leading to $20.3 billion in annual economic costs.<Citation number='18' /> Moreover, concentrated animal feeding operations (CAFOs), a form of factory farming, make it more likely for superbugs to arise, which could be devastating to public health and expensive to treat because antibiotics do not work on them. Already, the 2009 H1N1 pandemic, whose development may have been aided by CAFOs, caused 12,469 deaths in the U.S., a cost of $92 billion using the EPA’s value of a statistical life at $7.4 million, not including hospitalization costs and costs to those who were infected but did not die.<Citations numbers='19,20' /> The past and future economic costs of people inevitably being infected by diseases created at CAFOs are not currently factored into the cost of meat. </P>

        <P>Another stipulation that could be added to MEAT, although unrelated to animal ethics, is regulating antibiotics. Avian and swine flu outbreaks have cost the government too. In February 2025, the USDA announced that it would spend $1 billion to help with the avian flu that has led to a shortage of and price spike in eggs. The U.S. is paying for the problems that factory farmers created. There would be less risk for avian flu had the chickens been spaced out more and not stressed their whole lives. As this paper is being written, egg prices are more than double their typical prices ($5 instead of $2 per dozen), so MEAT eggs would be cheaper. Also, factory farms contribute to harmful algal blooms, which have cost the U.S. around $100 million per year in the last decade.<Citations numbers='21,22' /></P>

        <P>However, the elephant in the room in terms of unfactored costs is the environment. Unfortunately, MEAT would be worse for the environment than meat since it requires more resources per pound. If successfully developed, cellular meat can overcome these problems and more.</P>


        <H2>Part 3: The Need for Cellular Meat</H2>
        <P>While MEAT could reform the meat industry to make it less unethical, it cannot be the only solution. Meat demand is expected to increase 40% by 2050 as more countries develop and demand it.<Citation number='23' /> Already, two-thirds of agricultural land is devoted to growing animal feed.<Citation number='5' /> On top of that, MEAT is less efficient than traditional meat since it gives animals more time to grow (thus requiring more animal feed over their lifespan) and produces smaller sizes. It may be challenging to produce enough MEAT for global demand. Therefore, we must consider another solution, cellular meat, which is meat grown from animal cells in labs.</P>

        <P>To get the terminology straight, let traditional meat refer to meat as it is procured today. MEAT and traditional meat are the two forms of conventional meat (from killing an animal), which is differentiated from cellular meat. It is crucial to develop cellular meat to supplement and eventually replace conventional meat because it further solves ethical issues, overcomes conventional meat’s problems (land, antibiotics, methane, water, fertilizer), and has the potential to fulfill rising meat demands and be healthier than conventional meat.</P>

        <P>While MEAT is more ethical than traditional meat, it still raises problems that are hard for conventional meat to solve. For example, pigs are killed at six months old on average while their natural lifespan is 15–20 years, and broiler chickens (chickens raised for their meat) are killed at 47 days old while their natural lifespan is 5–12 years.<Citation number='24' /> Given that the average human lifespan today is around 70 years, this is analogous to killing a human at age one or two. Although MEAT would be slaughtered at a later age due to more natural growth rates instead of the current forced fast growth rates, they would still be killed young relative to their whole lifespan because young creatures’ meat is tastier and more tender. However, this may or may not be bad because it is unclear whether ten people living for ten years each is more or less ethical than one person living for 100 years. My gut tells me that introducing one person to live for 100 years is better than introducing ten people to live with their lives cut short by 90%, but it could be argued that they are equally good, as both are 100 years of life. After all, it is not the animal’s death that is the differentiating factor between factory farms and nature, as animals die horrible deaths in both cases. Being sliced open by a factory knife is equivalent to being eaten alive in nature. The difference is in the quality of the animal’s life while alive. The part of an animal’s life spent dying is brief (five minutes compared to years of living), so even if it is horrible, due to its relatively short duration, the net experience of living that life in nature is positive. Still, the sheer number of animals that would have to be slaughtered for conventional meat is chilling.</P>

        <P>In addition to questions of whether killing the animal so early in their life is problematic, conventional meat also grapples with issues like whether forced insemination is unethical since it is rape. I would argue that it is fine as long as it is not painful (it currently is), but it could be argued that it violates their rights.<Citation number='16' /> While the quality of life of MEAT animals is much higher than that of traditional meat animals, it may still be negative, meaning it is unethical to raise them. In the case that these unclear issues are unethical, it is better to play safe than sorry by replacing conventional meat with cellular meat.</P>

        <P>Cellular meat avoids all these potential ethical issues by involving no killing or potential suffering, with the exception of extracting the initial myocytes. The goal of this paper was to reduce human-induced animal suffering by 99%, so given that 202 million chickens are slaughtered a day, even if 2 million chickens were used every single day for extracting the initial myocytes (a preposterously high number), our goal will still have been reached.<Citation number='14' /></P>

        <P>Besides ethics, there are limitations to MEAT that hopefully cellular meat could surpass if developed significantly. No matter what, MEAT will always be more expensive than traditional meat, and there will always be people who will buy traditional meat over MEAT to save money or out of personal preference. Perhaps it would even be politicized, with meat companies that do not want to adopt MEAT lobbying politicians to have their political bases not eat it, leading to half the country eating traditional meat, much like cellular meat has been banned in Florida under Governor DeSantis.<Citation number='25' /> Cellular meat is the only solution that is actually meat (unlike plant-based substitutes) and has a shot at reaching the same costs as traditional meat. While MEAT can alleviate traditional meat’s issues, cellular meat is the only solution that has a chance of solving them completely and doing so through market forces without a heavy-handed government.</P>

        <P>Cellular meat should be used to make meat production zero-emission and return land currently used for animal feed to nature. Wali et al. simulate transitioning from conventional meat to cellular meat by 2050 in a system dynamics–based model. They found that it could reduce meat’s annual greenhouse gas emissions by 52% and land use by 83% by 2050\. While it conserves land resources, it is more energy-intensive, requiring a third of global energy for a 100% transition to cellular meat. This would result in a 69–83% increase in the amount of energy required for the global food system, depending on whether solar or wind is its predominant energy source.<Citation number='23' /> The increased energy costs can be justified as humanity progressing up the Kardashev scale. While conventional meat could never be zero-emission without buying emission offsets, cellular meat could be zero-emission if its equipment production is zero-emission, the operational processes are zero-emission, and renewable energy is used.</P>

        <P>Cellular meat has additional benefits over conventional meat that further justify its development. It does not require antibiotics, which can help prevent antibiotic resistance and the disease outbreaks that Anomaly warned of. Also, one in seven Americans gets a foodborne illness, and 3,000 die from it each year. Many of these illnesses, such as <i>Salmonella</i>, <i>E. Coli</i>, and <i>Listeria</i>, are caused by meat.<Citation number='26' /> Food poisoning from meat would be prevented if Americans ate cellular meat since it is cultivated in sterile environments. By not being affected by avian or swine flu, cellular meat would avoid the occasional shortages and price hikes from disease. Cellular meat fish is free of mercury, which is significant because there is no known safe level of mercury consumption. One study found that 88% of conventional meat has microplastics.<Citation number='27' /> Cellular meat would not have any microplastics. Besides these inherent benefits, cellular meat could also be engineered to be healthier than conventional meat. It is possible that some problems with eating conventional meat, such as increased risk of cardiovascular disease and colon cancer, could be solved with cultured meat.<Citation number='28' /> It could be altered to contain more omega-3s instead of other forms of fat, enhanced to have more protein and vitamins, and made tastier.</P>

        <P>All these benefits are predicated on cellular meat overcoming significant challenges, including biomimicry, scaling, driving down costs, convincing consumers to adopt it, and manufacturing more complex meats. Cellular agriculture is an up-and-coming industry, with $3.1 billion in investment from 2015 to 2023, 100 patents in 2024, and 200 companies as of 2023.<Citation number='29' /> In analyzing the economics of cellular meat, Skorbiansky et al. acknowledge the uncertainty inherent in any nascent technological market. They mention that there is a wide range of suggested production costs. For the reasons stated in this part, it is essential to develop cellular meat as quickly as possible.</P>

        <H2>Conclusion</H2>

        <P>With meat demand expected to increase 40% by 2050 as more countries develop and demand it, the stakes (and steaks) are increasing. Currently, a collective action problem prevents farmers from treating their animals properly. MEAT and cellular meat can solve the economic misalignment between not torturing animals and making money. These two solutions are the most practical to stopping animal torture because they give choices to consumers and farmers without forcing anyone to do anything against their will. MEAT should be implemented today to unleash the market forces to reform factory farming. Cellular meat is a more elegant solution than MEAT because of ethics, the environment, and costs. Cellular meat’s development should be accelerated in hopes that its prices can be lower than conventional meat to replace it entirely.</P>

        <P>Other proposed solutions are either impractical or do not solve the underlying problem. Telling people to stop eating meat is not only impractical but also a loss for society: meat is tasty and part of cultures all over the world, and humans were biologically designed to eat meat. Eating meat has played a major role in human evolution: humans have done so for 1.5 million years, contributing to our brain size growth and digestive system.<Citation number='28' /> While less extreme than banning meat, telling people to eat less of it would require a cultural shift and would not solve the underlying problem of animal suffering. This approach would make the problem’s magnitude smaller rather than solving it, much like energy efficiency reduces the amount of emissions but can never make emissions zero. Likewise, plant-based meat can help reduce meat consumption but is impractical for replacing meat entirely because it would require a cultural shift and is not actually meat, differing in taste and having fewer nutrients.</P>

        <P>Every time I eat chicken in the dining hall, I simultaneously think about the chicken that was tortured and the fact that I as a consumer should not be responsible, but the system should be changed. I am a big believer in changing systems rather than demanding individual sacrifice to solve large problems. Rather than tell people to drive less or turn down their heaters to fight climate change, internal combustion engines should be replaced with electric vehicles and traditional heating systems with heat pumps, and electricity should be generated by renewable and nuclear energy. By changing the systems, regardless of how many miles one drives or how high one turns the thermostat, there are zero emissions. On the contrary, telling people to change their individual behavior without changing the system not only causes people to sacrifice their comfort (which is impractical as people will not always do this), but there will still always be emissions, just to a lesser degree: people cannot drive zero and avoid heating their homes altogether. Demanding personal sacrifice reduces a problem, while changing the systems solves it entirely without needing sacrifice. The same logic applies to meat. Changing the system would mean producing MEAT and cellular meat so that no matter how much meat people eat, no animals suffer (or at least suffer less in the case of MEAT). The personal sacrifice version would be to tell people to eat less meat or become vegans. This path is impractical, unenjoyable for the consumer, and would only decrease meat consumption without solving the underlying problem.</P>

        <P>In the future, I hope people will look back at how animals are treated today and say, “how could we have done that?” much in the same way that people today look back at slavery and gender inequality as backward. Introducing the MEAT label and developing cellular meat are the way to reach this future.</P>


        <br /><br /><br />
        <H2>Terminology</H2>
        <ul>
            <li>Minimally Ethical And Torture-free (MEAT): meat that meets the requirements proposed in part 2.</li>
            <li>Traditional meat: meat as it is currently raised in factory farms.</li>
            <li>Conventional meat: traditional meat or MEAT (as compared to cellular meat).</li>
            <li>Cellular meat: meat grown in labs. Also known as cultured meat, in vitro meat, cellular agriculture (cell ag), cultivated meat, clean meat, lab-grown meat, cell-based meat, cell-cultured meat, synthetic meat (synthetically created meat), and artificial meat.</li>
            <li>Sentient: able to experience pain.</li>
            <li>Myocyte: meat cell.</li>
        </ul>

        
        <H2>Citations</H2>
        <div>
            <Footnote number='1'>
                Ritchie, Hannah. &quot;How Many Animals Are Factory-Farmed? - Our World in Data.&quot; <em>Our World in Data</em>, 31 Aug 2025. Accessed 12 Feb 2025.
            </Footnote>

            <Footnote number='2'>
                &quot;Use of Laboratory Animals in Biomedical and Behavioral Research.&quot; <em>National Research Council (US) and Institute of Medicine (US) Committee on the Use of Laboratory Animals in Biomedical and Behavioral Research</em>, <a href="https://www.ncbi.nlm.nih.gov/books/NBK218261">www.ncbi.nlm.nih.gov/books/NBK218261</a>, 31 Dec 1987. Accessed 9 Mar 2025.
            </Footnote>

            <Footnote number='3'>
                Singer, Peter. <em>Animal Liberation Now</em>, Diversion Books, 31 Dec 2022.
            </Footnote>

            <Footnote number='4'>
                Anomaly, Jonathan. &quot;What’s Wrong with Factory Farming? - PMC.&quot; <em>Oxford University Press</em>, <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9757169/">pmc.ncbi.nlm.nih.gov/articles/PMC9757169</a>. Accessed 21 Feb 2025.
            </Footnote>

            <Footnote number='5'>
                Brooks, Cassandra. &quot;Meat&#39;s Environmental Impact.&quot; <em>Stanford Woods Institute for the Environment</em>, <a href="https://woods.stanford.edu/news/meats-environmental-impact">woods.stanford.edu/news/meats-environmental-impact</a>, 24 Jul 2011. Accessed 21 Feb 2025.
            </Footnote>

            <Footnote number='6'>
                &quot;Nearly 70% of Americans Say Animal Wellness Plays an Important Role in Purchasing Decisions.&quot; <em>NSF International</em>, <a href="https://www.nsf.org/news/nsf-reveals-americans-say-animal-wellness-important-role-purchasing-decisions">www.nsf.org/news/nsf-reveals-americans-say-animal-wellness-important-role-purchasing-decisions</a>, 13 Feb 2024. Accessed 2 Mar 2025.
            </Footnote>

            <Footnote number='7'>
                Krautwald-Junghanns, M. E., et al. “Current Approaches to Avoid the Culling of Day-Old Male Chicks in the Layer Industry, with Special Reference to Spectroscopic Methods.” <em>Poultry Science</em>, vol. 97, no. 3, Mar. 2018, pp. 749–57, <a href="https://doi.org/10.3382/ps/pex389">https://doi.org/10.3382/ps/pex389</a>.
            </Footnote>

            <Footnote number='8'>
                Bugga, Hannah. &quot;Animal Mutilations Are Standard Procedure at Factory Farms.&quot; <em>Mercy For Animals</em>, <a href="https://mercyforanimals.org/blog/animal-mutilations-factory-farms/">mercyforanimals.org/blog/animal-mutilations-factory-farms/</a>, 2 Jun 2024. Accessed 3 Mar 2025.
            </Footnote>

            <Footnote number='9'>
                Kutzer, Kayla. &quot;Overview - Student Project: Factory Farming - Research Guides at Elisabeth Haub School of Law, Pace University.&quot; <em>Pace Law Library Research Guides</em>, <a href="https://libraryguides.law.pace.edu/factoryfarming">libraryguides.law.pace.edu/factoryfarming</a>. Accessed 12 Feb 2025.
            </Footnote>

            <Footnote number='10'>
                Roberson, Claire. “9 Cruel yet Legal Farming Practices.” <em>Animal Equality</em>, <a href="https://animalequality.org/blog/9-cruel-yet-legal-farming-practices">animalequality.org/blog/9-cruel-yet-legal-farming-practices</a>, 14 Oct 2022. Accessed 9 Mar 2025.
            </Footnote>

            <Footnote number='11'>
                Roberson, Claire. &quot;Everything You Need to Know about Factory Farming.&quot; <em>Animal Equality</em>, <a href="https://animalequality.org/blog/factory-farming-facts/">animalequality.org/blog/factory-farming-facts</a>, 13 Oct 2022. Accessed 1 Mar 2025.
            </Footnote>

            <Footnote number='12'>
                Alexander, Ames. &quot;The package says the chicken is ‘free range.’ That may not mean what you think.&quot; <em>The Charlotte Observer</em>, <a href="https://www.charlotteobserver.com/news/state/north-carolina/article267895477.html">www.charlotteobserver.com/news/state/north-carolina/article267895477.html</a>, 7 Dec 2023. Accessed 4 Mar 2025.
            </Footnote>

            <Footnote number='13'>
                Jacobs, Sadie. “‘Certified Humane’ Labeling: Implications for Animal Welfare and Consumer Protection&quot; <em>Center for Animal Law Studies</em>, <a href="https://law.lclark.edu/live/profiles/16517-certified-humane-labeling-implications-for-animal">law.lclark.edu/live/profiles/16517-certified-humane-labeling-implications-for-animal</a>. Accessed 13 Mar 2025.
            </Footnote>

            <Footnote number='14'>
                Roser, Max. &quot;How many animals get slaughtered every day?&quot; <em>Our World in Data</em>, <a href="https://ourworldindata.org/how-many-animals-get-slaughtered-every-day">ourworldindata.org/how-many-animals-get-slaughtered-every-day</a>. Accessed 19 Oct 2025.
            </Footnote>

            <Footnote number='15'>
                FAO. &quot;World Fish Production from 2007 to 2023, by Fishing and Aquaculture (in Million Metric Tons).&quot; <em>Statista</em>, Statista Inc., 2 Jan 2024, <a href="https://www-statista-com.stanford.idm.oclc.org/statistics/272311/world-fish-production-by-fishing-and-aquaculture-since-2004/">https://www-statista-com.stanford.idm.oclc.org/statistics/272311/world-fish-production-by-fishing-and-aquaculture-since-2004</a>
            </Footnote>

            <Footnote number='16'>
                MacAskill, William. &quot;What We Owe the Future.&quot; Basic Books, 15 Sep 2022.
            </Footnote>

            <Footnote number='17'>
                Meyers, Shane, et al. &quot;Consumer expenditures in 2022.&quot; <em>BLS Reports</em>, <a href="https://www.bls.gov/opub/reports/consumer-expenditures/2022/">www.bls.gov/opub/reports/consumer-expenditures/2022/</a>, 30 Nov 2023. Accessed 2 Mar 2025.
            </Footnote>

            <Footnote number='18'>
                Scharff, Robert L. “Food Attribution and Economic Cost Estimates for Meat- and Poultry-Related Illnesses.” <em>Journal of Food Protection</em>, vol. 83, no. 6, June 2020, pp. 959–67, <a href="https://doi.org/10.4315/JFP-19-548">https://doi.org/10.4315/JFP-19-548</a>.
            </Footnote>

            <Footnote number='19'>
                &quot;Mortality Risk Valuation | US EPA.&quot; <em>US EPA</em>, <a href="https://www.epa.gov/environmental-economics/mortality-risk-valuation">www.epa.gov/environmental-economics/mortality-risk-valuation</a>, 11 Feb 2025. Accessed 11 Mar 2025.
            </Footnote>

            <Footnote number='20'>
                Schmidt, Charles. &quot;Swine CAFOs &amp; Novel H1N1 Flu: Separating Facts from Fears.&quot; <em>National Library of Medicine</em>, <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2737041">pmc.ncbi.nlm.nih.gov/articles/PMC2737041</a>. Accessed 19 Oct 2025.
            </Footnote>

            <Footnote number='21'>
                Moen, Mike. &quot;Factory farms cited as one cause of rise in toxic algae blooms.&quot; <em>WXPR</em>, <a href="https://www.wxpr.org/energy-environment/2024-08-28/factory-farms-cited-as-one-cause-of-rise-in-toxic-algae-blooms">www.wxpr.org/energy-environment/2024-08-28/factory-farms-cited-as-one-cause-of-rise-in-toxic-algae-blooms</a>, 23 Aug 2024. Accessed 2 Mar 2025.
            </Footnote>

            <Footnote number='22'>
                Schechinger, Anne. &quot;The High Cost of Algae Blooms in U.S. Waters.&quot; <em>EWG</em>, <a href="https://www.ewg.org/research/high-cost-of-algae-blooms">www.ewg.org/research/high-cost-of-algae-blooms</a>, 25 Aug 2020. Accessed 3 Mar 2025.
            </Footnote>

            <Footnote number='23'>
                Wali et al. “Transition to cellular agriculture reduces agriculture land use and greenhouse gas emissions but increases demand for critical materials.” <em>Communications Earth &amp; Environment</em>, pp. 1–17, <a href="https://doi.org/10.1038/s43247-024-01227-8">doi.org/10.1038/s43247-024-01227-8</a>. Accessed 9 February 2025.
            </Footnote>

            <Footnote number='24'>
                &quot;What Are Broiler Chickens and How Long Do They Live?&quot; <em>The Humane League</em>, <a href="https://thehumaneleague.org/article/broiler-chickens">thehumaneleague.org/article/broiler-chickens</a>, 20 Feb 2023. Accessed 5 Mar 2025.
            </Footnote>

            <Footnote number='25'>
                &quot;Governor DeSantis Signs Legislation to Keep Lab-Grown Meat Out of Florida | Executive Office of the Governor.&quot; <em>Executive Office of the Governor</em>, <a href="https://www.flgov.com/eog/news/press/2024/governor-desantis-signs-legislation-keep-lab-grown-meat-out-florida">www.flgov.com/eog/news/press/2024/governor-desantis-signs-legislation-keep-lab-grown-meat-out-florida</a>, 15 Sep 2022. Accessed 2 Mar 2025.
            </Footnote>

            <Footnote number='26'>
                &quot;Foodborne Illness and Disease.&quot; <em>USDA</em>, <a href="https://www.fsis.usda.gov/food-safety/foodborne-illness-and-disease">www.fsis.usda.gov/food-safety/foodborne-illness-and-disease</a>. Accessed 2 Mar 2025.
            </Footnote>

            <Footnote number='27'>
                Milne, Madeleine H., et al. “Exposure of U.S. Adults to Microplastics from Commonly-Consumed Proteins.” <em>Environmental Pollution</em>, vol. 343, Feb. 2024, p. 123233, <a href="https://doi.org/10.1016/j.envpol.2023.123233">https://doi.org/10.1016/j.envpol.2023.123233</a>.
            </Footnote>

            <Footnote number='28'>
                Post, M et al. “New Sources of Animal Proteins: Cultured Meat”, <em>New Aspects of Meat Quality</em>, Woodhead Publishing, 2017, pp. 425–441. <a href="https://doi.org/10.1016/B978-0-08-100593-4.00017-5">doi.org/10.1016/B978-0-08-100593-4.00017-5</a>
            </Footnote>

            <Footnote number='29'>
                Skorbiansky, Sharon, et al. &quot;The Economics of Cellular Agriculture | Economic Research Service.&quot; <em>USDA.gov</em>, <a href="https://www.ers.usda.gov/publications/pub-details?pubid=110622">www.ers.usda.gov/publications/pub-details?pubid=110622</a>, 16 Dec 2024. Accessed 9 Feb 2025.
            </Footnote>
        </div>
    </ArticleWrapper>;
}
