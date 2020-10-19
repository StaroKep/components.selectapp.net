import React, { FunctionComponent } from 'react';

import { TemplateTextProps } from './TemplateText.types';

export const TemplateText: FunctionComponent<TemplateTextProps> = (props) => {
    const { text, components } = props;
    const textParts = text.split(/{{|}}/g);

    return (
        <>
            {textParts.map((part) => {
                const component = components && components[part];

                if (!component) {
                    return part;
                }

                return component;
            })}
        </>
    );
};

export default TemplateText;
