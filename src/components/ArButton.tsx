interface Props {
    label?: string;
    children?: React.ReactNode;
    square?: boolean;
    onClick?: Function;
}

export const ArButton: React.FC<Props> = (props) => {
    const { label, children, square, onClick } = props;
    const classes: string[] = [
        'h-14 bg-white flex-center rounded-md hover:bg-gray-200',
    ];
    if (square) {
        classes.push('w-14 px-0');
    } else {
        classes.push('px-6');
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
