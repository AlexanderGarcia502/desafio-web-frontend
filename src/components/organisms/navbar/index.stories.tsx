import Navbar from "./index";

export default {
  component: Navbar,
  title: "Navbar",
  tags: ["autodocs"],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {},
};

export const Default = {
  args: {
    title: "Operador",
  },
};
