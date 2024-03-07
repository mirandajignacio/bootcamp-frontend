import { ProduceCard } from "./produce-card";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Basket/ProduceCard",
  component: ProduceCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  //   tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    name: "Carrots",
    price: 2.99,
    information: "Freshly picked from the farm",
    imageUrl: "https://source.unsplash.com/300x300/?carrots",
    inBasket: false,
  },
};
