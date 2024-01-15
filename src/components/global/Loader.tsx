import CircularProgress from '@mui/material/CircularProgress';

export default function Loader({ size=20 }: { size?: number }) {
    return <div className='w-full h-full grid place-items-center'>
        <CircularProgress size={size} />
    </div>;
}
