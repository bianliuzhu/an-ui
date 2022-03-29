import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "./input";

export default {
	title: "输入框",
	component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
	<Input {...args}></Input>
);

export const Primary = Template.bind({});
