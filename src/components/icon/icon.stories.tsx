/*
 * @Description: Icon 组件文档
 * @Author: Gleason
 * @Date: 2022-03-06 21:30:55
 * @LastEditors: Gleason
 * @LastEditTime: 2022-03-22 22:10:35
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Icon from "./Icon";

export default {
	title: "图标",
	component: Icon,
	argTypes: {
		icon: {
			description: "此属性可选，如果不设置将无法显示icon",
		},
		size: {
			description: "可选，控制icon的大小",
		},
	},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	icon: "coffee",
	size: "10x",
};
