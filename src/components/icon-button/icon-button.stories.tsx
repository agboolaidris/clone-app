import { HiSearch } from 'react-icons/hi';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconButton } from './index';

export default {
  argTypes: {
    size: { control: 'color' },
  },
  args: {
    children: <HiSearch />,
    onClick: () => alert(),
  },
  component: IconButton,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'IconButton',
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (arg) => (
  <IconButton {...arg} />
);

export const primary = Template.bind({});

primary.args = {
  size: 'md',
  variants: 'primary',
};

export const Secondary = Template.bind({});
primary.args = {
  variants: 'normal',
};
