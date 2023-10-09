/** @format */

import type { Meta, StoryObj } from "@storybook/react";
import ProductDetail from ".";
import { reactRouterParameters } from "storybook-addon-react-router-v6";

const meta = {
  title: "Pages/ProductDetail",
  component: ProductDetail,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof ProductDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { id: "3" },
      },
      routing: { path: "/product/:id" },
    }),
  },
};
