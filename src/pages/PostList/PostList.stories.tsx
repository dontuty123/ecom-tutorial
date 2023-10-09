/** @format */

import type { Meta, StoryObj } from "@storybook/react";
import PostList from ".";

const meta = {
  title: "Pages/PostList",
  component: PostList,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof PostList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
