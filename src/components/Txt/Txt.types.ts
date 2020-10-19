import { TxtAlign, TxtColor, TxtTag, TxtType, TxtWeight } from './Txt.enums';

export interface TxtProps {
    color?: TxtColor;
    type?: TxtType;
    tag?: TxtTag;
    align?: TxtAlign;
    weight?: TxtWeight;
    className?: string;
}