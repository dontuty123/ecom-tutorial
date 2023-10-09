/** @format */

import type { Meta, StoryObj } from "@storybook/react";
import Product from ".";
import products from "src/mockdata/products";

const meta = {
  title: "Components/Product",
  component: Product,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Product>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    product: products[2],
  },
  //   parameters: {
  //     reactRouter: reactRouterParameters({
  //       location: {
  //         pathParams: { id: "3" },
  //       },
  //       routing: { path: "/product/:id" },
  //     }),
  //   },
};
