import type { Meta } from '@storybook/react-vite';
import React from 'react';
import { ColorWheel } from '../src/ColorWheel';

const meta: Meta<typeof ColorWheel> = {
  component: ColorWheel,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

export const Example = (args: any) => <ColorWheel {...args} />;
