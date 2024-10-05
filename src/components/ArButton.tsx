interface Props {
    label?: string;
    children?: React.ReactNode;
    square?: boolean;
    onClick?: Function;
}

export const ArButton: React.FC<Props> = (props) => {
    const { label, children, square, onClick } = props;
    const classes: string[] = ['h-14 bg-white flex-center rounded-md'];
    if (square) {
        classes.push('w-14');
    }

    return (
        <button
            className={classes.join(' ')}
            onClick={(ev) => (onClick ? onClick(ev) : null)}
        >
            {label ? label : children}
        </button>
    );
};
