import PerspectiveBody from "@/components/perspective/PerspectiveBody";
import { useRouter } from "next/router";

export default function Article(props: any) {
    const title=useRouter().query.title;
    return <PerspectiveBody>
        {title}
    </PerspectiveBody>;
}
