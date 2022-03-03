/*
 * @Description:
 * @Author: Gleason
 * @Date: 2022-03-01 22:38:10
 * @LastEditors: Gleason
 * @LastEditTime: 2022-03-03 22:07:23
 */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "按钮",
	component: Button,
	componentSubtitle: "按钮组件支持",
	argTypes: {
		href: { href: "www.baidu.com" },
	},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
	<Button {...args}>按钮</Button>
);

export const BtnType = Template.bind({});
BtnType.args = {
	btnType: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
	disabled: true,
};

export const Large = Template.bind({});
Large.args = {
	size: "large",
};

export const Small = Template.bind({});
Small.args = {
	size: "small",
};
