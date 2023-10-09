/** @format */

import type { Meta, StoryObj } from "@storybook/react";
import MainLayout from "./index";

const meta = {
  title: "Components/MainLayout",
  component: MainLayout,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof MainLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
