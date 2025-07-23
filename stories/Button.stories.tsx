import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../src/Button';
import { expect, fn, userEvent, within } from 'storybook/test';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive']
    }
  },
  args: {
    isDisabled: false,
    children: 'Button'
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary'
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    
    // Find the button
    const button = canvas.getByRole('button');
    
    // Test that the button renders with correct text
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveTextContent('Button');
    
    // Test that the button can be clicked
    await userEvent.click(button);
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary'
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive'
  },
};
