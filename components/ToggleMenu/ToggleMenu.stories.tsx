import type { Meta, StoryObj } from '@storybook/react';

import { ToggleMenu } from './ToggleMenu';

const meta = {
  component: ToggleMenu,
} satisfies Meta<typeof ToggleMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};