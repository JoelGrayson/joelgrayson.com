export default function compareLinks({ pathname, link }: { pathname?: string, link?: string }) {
    if (link===pathname)
        return true;

    if (link?.split('?')[0]===pathname?.split('?')[0])
        return true;

    return false;
}
