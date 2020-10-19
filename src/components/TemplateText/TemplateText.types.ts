import { ReactNode } from 'react';

export interface TemplateTextProps {
    text: string;
    components: {
        [key: string]: ReactNode;
    };
}
