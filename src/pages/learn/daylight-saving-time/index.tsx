import LearnPage from "@/components/page/LearnPage";
export default function LearningContent() {
	return <LearnPage markdown bottomPadding>
		<h1>Daylight Saving Time</h1>
		<div className="m:hidden">
			<Diagram />
		</div>
		<div className="d:hidden">
      {/* eslint-disable */}
			<img alt='Daylight Saving Time' src='/learn/daylight-saving-time/Daylight Savings Time Explained.png' />
      {/* eslint-enable */}
		</div>
		<br /><br />
		<Link href="/learn/daylight-saving-time/Daylight Savings Time Explained.png" className="button" download>
			Download as PNG
		</Link>
	</LearnPage>;
}




// Exported from Figma
import { memo } from 'react';
import type { FC } from 'react';

import classes from './diagram.module.css';
import Link from "next/link";

interface Props {
  className?: string;
}

/* @figmaId 1:47 */
export const Diagram: FC<Props>=memo(function Diagram() {
  return (
    <div className={`${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.jan}>Jan</div>
      <div className={classes.feb}>Feb</div>
      <div className={classes.mar}>Mar</div>
      <div className={classes.apr}>Apr</div>
      <div className={classes.may}>May</div>
      <div className={classes.jun}>Jun</div>
      <div className={classes.jul}>Jul</div>
      <div className={classes.aug}>Aug</div>
      <div className={classes.sep}>Sep</div>
      <div className={classes.oct}>Oct</div>
      <div className={classes.nov}>Nov</div>
      <div className={classes.dec}>Dec</div>
      <div className={classes.rectangle2}></div>
      <div className={classes.daylightSavingsTimeDST}>Daylight Savings Time (DST)</div>
      <div className={classes.standardTime}>Standard Time</div>
      <div className={classes.standardTime2}>Standard Time</div>
      <div className={classes.easternTimeET}>Eastern Time (ET):</div>
      <div className={classes.pacificTimePT}>Pacific Time (PT):</div>
      <div className={classes.coordinatedUniversalTimeUTC}>Coordinated Universal Time (UTC):</div>
      <div className={classes.easternStandardTimeESTUTC5}>
        <div className={classes.textBlock}>Eastern Standard Time (EST)</div>
        <div className={classes.textBlock2}>UTC-5</div>
      </div>
      <div className={classes.easternDaylightTimeEDTUTC4}>
        <div className={classes.textBlock3}>Eastern Daylight Time (EDT)</div>
        <div className={classes.textBlock4}>UTC-4</div>
      </div>
      <div className={classes.easternStandardTimeESTUTC52}>
        <div className={classes.textBlock5}>Eastern Standard Time (EST)</div>
        <div className={classes.textBlock6}>UTC-5</div>
      </div>
      <div className={classes.pacificStandardTimePSTUTC8}>
        <div className={classes.textBlock7}>Pacific Standard Time (PST)</div>
        <div className={classes.textBlock8}>UTC-8</div>
      </div>
      <div className={classes.uTC}>UTC+0</div>
      <div className={classes.uTC2}>UTC+0</div>
      <div className={classes.uTC3}>UTC+0</div>
      <div className={classes.pacificDaylightTimePDTUTC7}>
        <div className={classes.textBlock9}>Pacific Daylight Time (PDT)</div>
        <div className={classes.textBlock10}>UTC-7</div>
      </div>
      <div className={classes.pacificStandardTimePSTUTC82}>
        <div className={classes.textBlock11}>Pacific Standard Time (PST)</div>
        <div className={classes.textBlock12}>UTC-8</div>
      </div>
      <div className={classes.springForward}>Spring Forward</div>
      <div className={classes.fallBack}>Fall Back</div>
      <div className={classes._1226}></div>
      <div className={classes._12262}></div>
      <div className={classes.uk1}></div>
    </div>
  );
});

