/*
 * @Description:
 * @Author: Gleason
 * @Date: 2022-03-01 22:38:10
 * @LastEditors: Gleason
 * @LastEditTime: 2022-03-01 23:02:51
 */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button, { ButtonType, ButtonSize } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "例子 Button 组件",
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		href: { href: "www.baidu.com" },
	},
} as ComponentMeta<typeof Button>;

{
	/* <Button>普通</Button>
<Button autoFocus>autoFocus</Button>
<Button size={ButtonSize.Large}>large</Button>
<Button size={ButtonSize.Small}>small</Button>
<Button disabled>禁用</Button>
<Button btnType={ButtonType.Primary}>primary</Button>
<Button btnType={ButtonType.Danger}>danger</Button>
<Button btnType={ButtonType.Link}>link</Button>
<Button btnType={ButtonType.Link} disabled> */
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
	<Button {...args}>按钮</Button>
);

export const BtnType = Template.bind({});
BtnType.args = {
	btnType: ButtonType.Primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
	disabled: true,
};

export const Large = Template.bind({});
Large.args = {
	size: ButtonSize.Large,
};

export const Small = Template.bind({});
Small.args = {
	size: ButtonSize.Small,
};
