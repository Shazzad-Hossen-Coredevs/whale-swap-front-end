
const Button = ({text ='Button', className='', StartIcon, EndIcon, ...rest}) => {
    return (
        <button {...rest} className={` active:scale-95 flex items-center gap-[0.875rem] ${className}`}>
            {StartIcon? <StartIcon />:''}
            {text}
            {EndIcon? <EndIcon />:''}
        </button>
    );
};

export default Button;