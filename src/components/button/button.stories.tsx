import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./index";

export default {
	title: "按钮",
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
	<Button
		{...args}
		onClick={(e) => {
			console.log(e);
		}}
	>
		按钮
	</Button>
);

export const Primary = Template.bind({});
