import { BackgroundType } from './Background.enums';

export interface BackgroundProps {
    url: string;

    type?: BackgroundType;
    rootClassName?: string;
}