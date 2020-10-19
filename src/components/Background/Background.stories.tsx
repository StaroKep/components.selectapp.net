import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Background, BackgroundProps } from './index';

export default {
    title: 'Background',
    component: Background,
} as Meta;

const Template: Story<BackgroundProps> = (args) => <Background {...args} />;

export const Primary = Template.bind({});
