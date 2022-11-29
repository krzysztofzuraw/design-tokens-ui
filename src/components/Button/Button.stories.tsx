import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => (
  <Button variant="primary">Button</Button>
);

export const Secondary: ComponentStory<typeof Button> = () => (
  <Button variant="secondary">Button</Button>
);
