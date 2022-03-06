/*
 * @Description:
 * @Author: Gleason
 * @Date: 2022-03-01 22:38:10
 * @LastEditors: Gleason
 * @LastEditTime: 2022-03-05 22:17:44
 */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./button";

export default {
	title: "按钮",
	component: Button,
	componentSubtitle: "Displays an image that represents a user or organization",
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
	<Button {...args}>按钮</Button>
);

export const 属性 = Template.bind({});
