const topOffset=40;

export default function PortraitPhoto({date, ratio, hovering, setHovering, ...props}: {
    date: string,
    ratio?: number /** height to width */
    hovering: boolean, /** determines whether or not to show background */
    setHovering: (hovering: boolean)=>void,
} & any) {
    return (<span style={{
        position: 'relative',
        top: topOffset,
        height: `${270+60}px`,
        width: `${270*ratio+20}px`,
        backgroundColor: hovering ? '#aaa' : '',
        borderRadius: 10,
        marginLeft: 3,
        marginRight: 3
    }}>
        <img
            src={`/images/home/portraits/${date}/Joel Grayson.png`}
            height={270} width={270*ratio}
            alt='Joel Grayson Profile Photo'
            style={{
                position: 'absolute',
                left: '10px',
                bottom: `${topOffset}px`,
            }}
            {...props}
        /> 
        {/* Show date text onHover */}
        { hovering && <span style={{
            position: 'absolute',
            bottom: 10,
            textAlign: 'center',
            width: '100%',
            fontWeight: 'bold',
        }}>{date.match(/(\d{4})$/)[1]}</span> } {/* Show year only */}
    </span>);
}
