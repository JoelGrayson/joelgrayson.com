export default function UpDownArrow({dir}: {dir: 'up' | 'down'}) {
    return <svg width='14' height='12' viewBox='0 0 21 18' fill='none' xmlns='http://www.w3.org/2000/svg'
        className='inline ml-2'
        style={{
            animation: 'transform 0.5s',
            transform: dir==='up' ? 'scaleY(-1)' : 'scale(1)' //flip arrow onHover
        }}
    >
        <path d='M1 1L10.328 16.7104C10.4055 16.8409 10.5945 16.8409 10.672 16.7104L20 1' stroke='black' strokeWidth='2' strokeLinecap='round'/>
    </svg>;
}
