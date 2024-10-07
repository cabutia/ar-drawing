import { useEffect, useRef, useState } from 'react';
import { ArButton } from './ArButton';

export const CameraView: React.FC = () => {
    const [init, setInit] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const onInit = () => {
        setLoading(true);
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then((stream: MediaStream) => {
                    if (!videoRef.current.srcObject) {
                        videoRef.current.srcObject = stream;
                    }
                })
                .catch((err: string) => {
                    setError(err);
                })
                .finally(() => {
                    setLoading(false);
                    setInit(true);
                });
        }
    };

    return (
        <div
            className={`fixed size-full flex-center ${
                init ? 'z-auto' : 'z-50'
            }`}
            onClick={onInit}
        >
            <video
                ref={videoRef}
                className="size-full border border-red-500 object-cover object-center"
                autoPlay={true}
            />
            {error && <span>{error}</span>}
            {!init && (
                <div className="absolute inset-0 flex-center z-30">
                    <ArButton
                        label={loading ? 'Cargando...' : 'Toca para comenzar!'}
                    />
                </div>
            )}
        </div>
    );
};
