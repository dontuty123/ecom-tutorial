/** @format */

import React from "react";
import type { Preview } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import "../src/assets/index.css";
import { Provider } from "react-redux";
import { setupStore } from "./../src/redux/store";
import { initialize, mswDecorator } from "msw-storybook-addon";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

initialize();

export const decorators = [
  mswDecorator,
  withRouter,
  (Story) => (
    <Provider store={setupStore()}>
      <Story />
    </Provider>
  ),
];

export default preview;
