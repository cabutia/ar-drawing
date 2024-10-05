import { ChangeEvent, useRef, useState } from 'react';
import { ArButton } from './ArButton';
import { Icon } from '@iconify/react/dist/iconify.js';

interface Props {
    image: string;
    onSelectImage: Function;
    onOpacityChange: Function;
    opacity: number;
}

export const Tools: React.FC<Props> = (props) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const onFileSelectorClick = () => {
        if (props.image) {
            props.onSelectImage(null);
        } else {
            fileInputRef.current.click();
        }
    };

    const onFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.currentTarget.files;
        if (files.length === 0) return;
        const file = files[0];
        props.onSelectImage(URL.createObjectURL(file));
    };

    const onAddOpacity = () =>
        props.onOpacityChange(Math.min(100, props.opacity + 10));
    const onSubOpacity = () =>
        props.onOpacityChange(Math.max(0, props.opacity - 10));

    return (
        <div className="fixed top-0 right-0 p-4 flex flex-col gap-4">
            <input
                type="file"
                className="hidden"
                ref={fileInputRef}
                onChange={onFileSelect}
                accept="image/*"
            />
            <ArButton onClick={onFileSelectorClick} square>
                {!props.image && (
                    <Icon icon="ph:folder-open" className="size-6" />
                )}
                {props.image && <Icon icon="ph:x" className="size-6" />}
            </ArButton>
            <ArButton onClick={onAddOpacity} square>
                <Icon icon="ph:plus" className="size-6" />
            </ArButton>
            <ArButton onClick={onSubOpacity} square>
                <Icon icon="ph:minus" className="size-6" />
            </ArButton>
        </div>
    );
};
