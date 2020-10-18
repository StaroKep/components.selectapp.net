import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './index';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
