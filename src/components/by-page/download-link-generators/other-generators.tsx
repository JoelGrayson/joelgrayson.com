import Image from "next/image";
import Link from "next/link";

type Generator='drive' | 'onedrive' | 'box' | 'dropbox'; // | 'mega' | 'mediafire' | 'zippyshare' | 'anonfile' | 'gofile' | 'bayfiles' | 'uploadhub' | 'solidfiles' | 'file.io' | 'filebin' | 'filecrypt' | 'filesend' | 'filetransfer' | 'filezip' | 'filemail' | 'filehosting' | 'filelocker' | 'filecloud' | 'filestorage' | 'fileup';

export default function OtherGenerators({ currentGenerator }: { currentGenerator: Generator }) {
    return <div>
        Download link generators for related platforms:
        { currentGenerator!=='drive' && <Link href='/software/drive-download-link-generator' title="Drive">
            <Image src="/image/software/download-link-generators/drive.webp" alt="drive" className="inline mx-2" width={33.125} height={30} />
        </Link> }
        { currentGenerator!=='onedrive' && <Link href='/software/onedrive-download-link-generator' title="OneDrive">
            <Image src="/image/software/download-link-generators/onedrive.svg" alt="onedrive" className="inline mx-2" width={48} height={30} />
        </Link> }
        { currentGenerator!=='box' && <Link href='/software/box-download-link-generator' title="Box">
            <Image src="/image/software/download-link-generators/box.webp" alt="box" className="inline mx-2" width={62} height={33} />
        </Link> }
        { currentGenerator!=='dropbox' && <Link href='/software/dropbox-download-link-generator' title="Dropbox">
            <Image src="/image/software/download-link-generators/dropbox.webp" alt="dropbox" className="inline mx-2" width={36} height={33} />
        </Link> }
    </div>;
}
