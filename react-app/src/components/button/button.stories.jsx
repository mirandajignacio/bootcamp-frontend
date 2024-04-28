import { Button } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
    },
    variant: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    children: "Button",
    variant: "primary",
  },
};
