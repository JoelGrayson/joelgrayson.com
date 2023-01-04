export enum viewers { //viewer types
    // Special
    none,
    hidden,
    // Pages
    solar,
    seb,
    msCCCPresentation,
    busIdlingBan,
    petitionForElectricSchoolBuses,
    presentationOnNuclearRenaissance
};

export default function InfoRenderer({status}: {status: viewers}) {
    switch (status) {
        case viewers.none:
            return <p className='px-4'>Hover a section to see its description</p>;
        case viewers.solar:
            return <p className='px-4'>Solar description.</p>;
        case viewers.seb:
            return <p className='px-4'>SEB description.</p>;
        case viewers.msCCCPresentation:
            return <p className='px-4'>TODO:</p>;
        case viewers.busIdlingBan:
            return <p className='px-4'>TODO:</p>;
        default:
            return <p className='px-4'>No description for section &quot;{status}&quot;</p>;
    }
}
