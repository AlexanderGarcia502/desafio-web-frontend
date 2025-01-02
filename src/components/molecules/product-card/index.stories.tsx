import ProductCard from "./index";

export default {
  component: ProductCard,
  title: "ProductCard",
  tags: ["autodocs"],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {},
};

export const Default = {
  args: {},
};
