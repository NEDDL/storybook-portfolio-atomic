module.exports = {
  stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-preset-craco",
  ],
  features: {
    postcss: false,
  },
  // webpackFinal is modified by nextjs/storybook-plugin to include node-modules and nextjs/babel
  typescript: {
    reactDocgen: "react-docgen",
  },
};
