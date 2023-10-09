/** @format */

import type { Meta, StoryObj } from "@storybook/react";
import ProductList from ".";

const meta = {
  title: "Pages/ProductList",
  component: ProductList,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof ProductList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
