import { Button } from "./Button";

import type { ButtonProps } from "./Button";
import type { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: {
      name: "Label",
      type: { name: "string", required: false },
      defaultValue: "Button",
      description: "Label of the button",
    },
    color: {
      name: "Color",
      options: ["Primary", "Secondary", "Success", "Error"],
      description: "Color of the button",
      control: { type: "select" },
    },
    variant: {
      name: "Type",
      options: ["Contained", "Outlined"],
      defaultValue: "Contained",
      description: "Type of the button",
      control: { type: "radio" },
    },
    size: {
      name: "Size",
      options: ["sm", "md", "lg"],
      defaultValue: "md",
      description: "Size of the button",
      control: { type: "radio" },
    },
    icon: {
      name: "Icon",
      control: { type: "boolean" },
      defaultValue: "false",
      description: "Enable to have icon on the button",
    },
    iconType: {
      name: "Icon type",
      control: { type: "select" },
      options: ["Search", "Save", "Rocket", "Calendar"],
      defaultValue: "Rocket",
      description: "Icon of the button",
    },
    menu: {
      name: "Menu",
      control: { type: "boolean" },
      defaultValue: "false",
      description: "Enable the menu with the button",
    },
    onButtonClick: {
      action: "onButtonClick",
      description: "Button click action",
    },
    onMenuFirstRowClick: {
      action: "onMenuFirstRowClick",
      description: "Menu first row click action",
    },
    onMenuSecondRowClick: {
      action: "onMenuSecondRowClick",
      description: "Menu second row click action",
    },
    onMenuThirdRowClick: {
      action: "onMenuThirdRowClick",
      description: "Menu third row click action",
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary: Story<ButtonProps> = Template.bind({});
Primary.storyName = "Classic button";
Primary.args = {
  color: "Primary",
  variant: "Contained",
  size: "md",
  icon: false,
  menu: false,
};

export const Icon: Story<ButtonProps> = Template.bind({});
Icon.storyName = "Button with icon";
Icon.args = {
  color: "Primary",
  variant: "Contained",
  size: "lg",
  icon: true,
  iconType: "Rocket",
  menu: false,
};

export const Menu: Story<ButtonProps> = Template.bind({});
Menu.storyName = "Button with menu";
Menu.args = {
  color: "Primary",
  variant: "Contained",
  size: "md",
  icon: false,
  menu: true,
};
