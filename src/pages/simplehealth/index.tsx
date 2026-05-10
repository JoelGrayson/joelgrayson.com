import Page from '@/components/page/DefaultPage';
import Image from 'next/image';
import Link from 'next/link';

const LAST_UPDATED = 'April 26, 2026';

const SCREENSHOTS = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

export default function SimpleHealth() {
    return <Page bottomPadding seo={{
        title: 'SimpleHealth — Privacy Policy & Terms',
        description: 'Privacy policy and terms of service for the SimpleHealth iOS app.'
    }}>
        <h1 className='mt-8 mb-2 text-center flex items-center justify-center gap-5 flex-wrap'>
            <Image alt='SimpleHealth logo' src='/image/simple-health/logo.png' width={60} height={60} />
            SimpleHealth
            <a href='https://apps.apple.com/app/id6761314044' target='_blank' rel='noopener noreferrer'
                aria-label='Download SimpleHealth on the App Store'
                style={{ display: 'inline-block', lineHeight: 0, marginLeft: 4, position: 'relative', bottom: 4 }}>
                <Image src='/image/software/worderoo/download-on-the-app-store.png'
                    alt='Download on the App Store' width={114} height={38} />
            </a>
        </h1>
        <p className='text-center max-w-2xl mx-auto'>SimpleHealth is an iOS app that shows your steps, sleep, and gym visits at a glance.</p>

        <div className='mt-8 mb-10 flex gap-4 overflow-x-auto pb-4 px-2 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:snap-none lg:grid-cols-3'>
            {SCREENSHOTS.map((n) => (
                <div key={n} className='shrink-0 snap-center md:shrink'>
                    <Image
                        src={`/image/simple-health/screenshot-${n}.png`}
                        alt={`SimpleHealth screenshot ${n}`}
                        width={1284}
                        height={2778}
                        className='rounded-2xl w-[240px] md:w-full h-auto shadow-md'
                        sizes='(max-width: 768px) 240px, (max-width: 1024px) 33vw, 400px'
                    />
                </div>
            ))}
        </div>

        <hr />

        <h2 id='privacy'>Privacy Policy</h2>

        <h3>The short version</h3>
        <p>
            SimpleHealth does <strong>not collect, transmit, sell, or share any of your data</strong>.
            Everything you see in the app — your step count, sleep duration, and gym visit history —
            stays on your device. There are no analytics, no third-party SDKs, no remote servers.
            We don&apos;t have a database where your data lives, because there is no &quot;we&quot; that ever sees it.
        </p>

        <h3>Data we read from your device</h3>
        <ul>
            <li>
                <strong>Apple Health (HealthKit).</strong> If you grant permission, the app reads your daily step count
                and sleep samples from Apple Health to display them in the app and its widget. We only read; we never write.
            </li>
            <li>
                <strong>Location.</strong> If you enable automatic gym detection, the app uses iOS region monitoring (geofencing)
                to detect when you arrive at and leave the gym address you set. Your location is processed entirely on your device
                and is never sent off it. The app does not log GPS traces or your movements outside of the small radius around your gym.
            </li>
            <li>
                <strong>Notifications.</strong> If you enable confirmation notifications, the app sends a local notification
                (generated on your device, never via a remote push server) after a 20-minute stay at the gym so you can confirm the visit.
            </li>
        </ul>

        <h3>Data we store on your device</h3>
        <ul>
            <li>Your goals (daily step goal, sleep goal, weekly gym goal) — stored in iOS UserDefaults.</li>
            <li>Your gym locations (address, coordinates, geofence radius, optional nickname) — stored in iOS UserDefaults / the App Group container so the home-screen widget can read the same values.</li>
            <li>A log of detected gym visits (enter time, exit time, whether you confirmed or rejected the visit) — stored in iOS UserDefaults / the App Group container.</li>
        </ul>
        <p>All of the above is removed when you delete the app from your device.</p>

        <h3>Data we do not collect</h3>
        <ul>
            <li>No personal information (name, email, phone, age, etc.).</li>
            <li>No account or login — there are no accounts.</li>
            <li>No analytics, telemetry, crash reports, or usage tracking.</li>
            <li>No advertising identifiers and no ads.</li>
            <li>No background location traces — only short-lived enter/exit events from the gym geofence are processed.</li>
        </ul>

        <h3>Third parties</h3>
        <p>
            SimpleHealth does not integrate any third-party SDKs that collect data. The only system frameworks used
            are Apple&apos;s own (HealthKit, Core Location, UserNotifications, WidgetKit), which run entirely on your device.
        </p>

        <h3>Children</h3>
        <p>
            SimpleHealth is not directed to children under 13 and does not knowingly collect any data from anyone of any age.
        </p>

        <h3>Changes to this policy</h3>
        <p>
            If this policy changes in any material way, the &quot;last updated&quot; date at the top of this page will change
            and the new policy will be available at this URL.
        </p>

        <h3>Contact</h3>
        <p>
            Questions? <Link href='/contact?referrer=simplehealth'>Get in touch</Link>.
        </p>

        <p className='text-sm'><em>Last updated: {LAST_UPDATED}</em></p>

        <hr />

        <h2 id='terms'>Terms of Service</h2>

        <h3>Acceptance</h3>
        <p>
            By installing or using SimpleHealth, you agree to these terms. If you do not agree, please uninstall the app.
        </p>

        <h3>License</h3>
        <p>
            You are granted a personal, non-exclusive, non-transferable, revocable license to use SimpleHealth on devices
            you own or control. You may not reverse-engineer, decompile, redistribute, or sell the app or any portion of it.
        </p>

        <h3>Not medical advice</h3>
        <p>
            SimpleHealth is a wellness and tracking app for personal informational purposes. It is <strong>not a medical
            device</strong> and <strong>does not provide medical advice, diagnosis, or treatment</strong>. Always consult
            a qualified healthcare professional for any health questions or concerns. Do not use SimpleHealth for any
            medical or emergency purpose.
        </p>

        <h3>Accuracy of data</h3>
        <p>
            Step counts, sleep durations, and gym detections come from sensors on your device or connected wearables.
            These signals can be inaccurate, missing, or delayed. SimpleHealth makes no guarantee about the accuracy,
            completeness, or timeliness of any data shown.
        </p>

        <h3>Location and geofencing</h3>
        <p>
            iOS region monitoring fires opportunistically and may miss visits, fire late, or fail entirely depending on
            iOS version, battery state, low-power mode, signal quality, and Apple&apos;s scheduling. SimpleHealth cannot
            guarantee that every gym visit will be detected.
        </p>

        <h3>No warranty</h3>
        <p>
            SimpleHealth is provided <strong>&quot;as is&quot;</strong> without warranty of any kind, express or implied,
            including but not limited to warranties of merchantability, fitness for a particular purpose, accuracy, or
            non-infringement. Your use of the app is at your own risk.
        </p>

        <h3>Limitation of liability</h3>
        <p>
            To the maximum extent permitted by law, in no event shall the developer or Lux Premier LLC be liable for any
            indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising
            from or related to your use of (or inability to use) SimpleHealth. Total aggregate liability is limited to
            the amount you paid for the app, if any.
        </p>

        <h3>Termination</h3>
        <p>
            You may stop using SimpleHealth at any time by deleting the app. We may discontinue or modify the app at
            any time without notice. Apple may also remove the app from the App Store at any time.
        </p>

        <h3>Changes to these terms</h3>
        <p>
            We may update these terms from time to time. The &quot;last updated&quot; date at the top of this page
            reflects the most recent revision. Continued use of the app after a revision constitutes acceptance of the
            updated terms.
        </p>

        <h3>Governing law</h3>
        <p>
            These terms are governed by the laws of the State of California, USA, without regard to conflict-of-law
            principles. Any dispute arising from these terms or your use of the app shall be brought exclusively in the
            state or federal courts located in California.
        </p>

        <p className='text-sm'><em>Last updated: {LAST_UPDATED}</em></p>

    </Page>;
}
