import LoginSection from ".";
import { fn } from "@storybook/test";
export const ActionsData = {
  onSubmit: fn(),
};

export default {
  component: LoginSection,
  title: "Login Section",
  tags: ["autodocs"],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const Default = {
  args: {},
};
