/*
 * @Description:
 * @Author: Gleason
 * @Date: 2022-03-01 22:38:10
 * @LastEditors: Gleason
 * @LastEditTime: 2022-03-05 22:14:28
 */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Icon from "./icon";

export default {
	title: "图标",
	component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => (
	<Icon {...args}>按钮</Icon>
);

export const 属性 = Template.bind({});
