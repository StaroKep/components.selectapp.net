import { BackgroundType } from './Background.enums';

export interface BackgroundProps {
    /** Set background-image prop in this class */
    rootClassName: string;

    type?: BackgroundType;
}