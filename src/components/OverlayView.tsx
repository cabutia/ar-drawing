interface Props {
    image: string;
    opacity: number;
}

export const OverlayView: React.FC<Props> = ({ image, opacity }) => {
    return (
        <div className="fixed inset-0">
            {image && (
                <img
                    src={image}
                    className="fixed inset-0 object-center object-cover size-full transition-all"
                    style={{
                        opacity: opacity / 100,
                    }}
                />
            )}
        </div>
    );
};
