/** @format */

import type { Meta, StoryObj } from "@storybook/react";
import Post from ".";
import { reactRouterParameters } from "storybook-addon-react-router-v6";

const meta = {
  title: "Components/Post",
  component: Post,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Post>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { id: "2" },
      },
      routing: { path: "/post/:id" },
    }),
  },
};
