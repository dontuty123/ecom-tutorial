/** @format */

import type { Meta, StoryObj } from "@storybook/react";
import Cart from ".";

const meta = {
  title: "Pages/Cart",
  component: Cart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Cart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
