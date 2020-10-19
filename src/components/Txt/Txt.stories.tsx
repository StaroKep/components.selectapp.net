import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Txt, TxtProps } from './index';

export default {
    title: 'Txt',
    component: Txt,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<TxtProps> = (args) => (
    <Txt {...args}>
        Hello, how are you!? <br /> Привет, как дела!?
    </Txt>
);

export const Primary = Template.bind({});
