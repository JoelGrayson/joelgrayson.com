import { Loader2 } from "lucide-react";

export default function Loader({ size=30 }: { size?: number }) {
    return <Loader2 style={{ height: size, width: size }} className="animate-spin text-gray-700" />;
}

