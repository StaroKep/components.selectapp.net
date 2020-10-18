import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';

import { Input, InputProps } from './index';

export default {
    title: 'Input',
    component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Primary = Template.bind({});