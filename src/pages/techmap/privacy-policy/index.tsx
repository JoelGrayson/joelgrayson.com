import Page from "@/components/page/DefaultPage";
import Link from "next/link";

export default function TechMapPrivacyPolicy() {
    return <Page>
        <h1 className="text-4xl">TechMap Privacy Policy</h1>

        <p>TechMap collects data about which companies you have checked off as visited. This data is only linked to an anonymous account unless you sign in, in which case it is linked to your email address. It does not collect data about your location.</p>

        <p>For any questions, please contact Joel Grayson through <Link href='/contact?referrer=techmap_privacy_policy'>this form</Link> or by emailing joel@joelgrayson.com.</p>
    </Page>;
}

