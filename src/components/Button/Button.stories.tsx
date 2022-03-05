/*
 * @Description:
 * @Author: Gleason
 * @Date: 2022-03-01 22:38:10
 * @LastEditors: Gleason
 * @LastEditTime: 2022-03-05 21:44:56
 */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./button";

export default {
	title: "按钮",
	component: Button,
	componentSubtitle: "按钮组件支持",
	argTypes: {
		href: { href: "www.baidu.com" },
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
	<Button {...args}>按钮</Button>
);

export const 属性 = Template.bind({});
