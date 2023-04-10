import ArticleWrapper from '@/components/perspective/layout/ArticleWrapper';
import { P } from '../../components/perspective/Components';
import Image from 'next/image';
import Link from 'next/link';

export default function ClimateChangeIsAnExponentialProblem() {
    return <ArticleWrapper title='Climate Change Is an Exponential Problem' hyphenatedTitle='climate-change-is-an-exponential-problem' date={new Date('Aug 17, 2022')}>
        <P>Combating climate change is like stopping a weed infestation. The later a farmer attempts to remove the weeds, the harder it becomes because they are more numerous and have deeper roots. The weed growth is exponential. When it exceeds the rate at which the farmer can remove them, the farmer has to resort to drastic measures, such as burning down a patch of crops and restarting. The best solution is for the farmer to address the weeds early in their development—before their toll on crop yield is significant. Unfortunately, at this early stage, the costs to remove the weeds outweigh the weeds’ damages to crop yield so the farmer may resist the action, calling it unnecessary. Though the easiest and most critical time to address the problem, it is the stage when people do not act.</P>
        <P>Similarly, for climate change, humanity is now in one of the last stages when climate action costs more than its immediate benefits, yet it is most needed. Again, because the results of climate action are cumulative and delayed, actions are more effective when done earlier. This understanding of how exponential growth affects climate change explains the urgency for action now. A constant nudge from the public to those in power is required to break the status quo of insufficient climate action. You, dear reader, can put pressure on those in power to transition to clean infrastructure, or, even better, get in power to do so yourself.</P>
    </ArticleWrapper>;
}
