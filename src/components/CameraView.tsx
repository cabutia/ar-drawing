import { useEffect, useRef, useState } from 'react';

export const CameraView: React.FC = () => {
    const [error, setError] = useState<string>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
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
                });
        }
    });

    return (
        <div className="fixed size-full flex-center">
            <video
                ref={videoRef}
                className="size-full border border-red-500 object-cover object-center"
                autoPlay={true}
            />
            {error && <span>{error}</span>}
        </div>
    );
};
