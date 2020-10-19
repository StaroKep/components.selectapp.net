import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { TemplateText, TemplateTextProps } from './index';

export default {
    title: 'TemplateText',
    component: TemplateText,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<TemplateTextProps> = (args) => <TemplateText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: "Hello,{{br}}my dear {{name}}",
    components: {
        br: <br/>,
        name: 'friend',
    }
}
