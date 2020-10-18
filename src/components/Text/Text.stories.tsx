import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Text, TextProps } from './index';

export default {
    title: 'Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
