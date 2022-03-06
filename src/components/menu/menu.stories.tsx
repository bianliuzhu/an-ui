/*
 * @Description: menu 组件
 * @Author: Gleason
 * @Date: 2022-03-06 22:24:14
 * @LastEditors: Gleason
 * @LastEditTime: 2022-03-06 22:29:16
 */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Menu from "./menu";
import MenuItem from "./menuItem";
export default {
	title: "按钮",
	component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => (
	<Menu {...args}>
		<MenuItem>下拉菜单1</MenuItem>
		<MenuItem>下拉菜单2</MenuItem>
	</Menu>
);

export const Primary = Template.bind({});
