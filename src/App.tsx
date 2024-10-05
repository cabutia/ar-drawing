import { useState } from 'react';
import { CameraView } from './components/CameraView';
import { OverlayView } from './components/OverlayView';
import { Tools } from './components/Tools';

export const App: React.FC = () => {
    const [image, setImage] = useState<string>(null);
    const [opacity, setOpacity] = useState<number>(50);

    return (
        <div className="fixed inset-0 bg-gray-900">
            <CameraView />
            <OverlayView image={image} opacity={opacity} />
            <Tools
                onSelectImage={(src: string) => setImage(src)}
                image={image}
                onOpacityChange={(value: number) => setOpacity(value)}
                opacity={opacity}
            />
        </div>
    );
};
