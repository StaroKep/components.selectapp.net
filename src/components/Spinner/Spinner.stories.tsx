import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Spinner, SpinnerProps, SpinnerSize } from './index';

export default {
    title: 'Spinner',
    component: Spinner,
} as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Medium = Template.bind({});
Medium.args = { size: SpinnerSize.MEDIUM };

export const Small = Template.bind({});
Small.args = { size: SpinnerSize.SMALL };

export const Big = Template.bind({});
Big.args = { size: SpinnerSize.BIG };
