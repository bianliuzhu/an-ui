/*
 * @Description:
 * @Author: Gleason
 * @Date: 2022-02-13 11:29:33
 * @LastEditors: Gleason
 * @LastEditTime: 2022-03-06 22:46:53
 */
import { render, screen, fireEvent } from "@testing-library/react";
import Button, { ButtonProps } from "./Button";

const defaultProps = {
	onClick: jest.fn(),
};
const testProps: ButtonProps = {
	btnType: "primary",
	size: "large",
	className: "kclass",
};
const disabledProps: ButtonProps = {
	disabled: true,
	onClick: jest.fn(),
};
describe("button 组件测试", () => {
	it("默认测试", () => {
		render(<Button {...defaultProps}>nice</Button>);
		const element = screen.getByText("nice") as HTMLButtonElement;
		// 断言 存在 button 标签
		expect(element.tagName).toEqual("BUTTON");
		// 断言 存在 默认 class 【btn btn-default】
		expect(element).toHaveClass("btn btn-default");
		expect(element.disabled).toBeFalsy();
		// 模拟 点击
		fireEvent.click(element);
		// 断言 已经被调用
		expect(defaultProps.onClick).toHaveBeenCalled();
	});
	it("根据不同 props 显示样式", () => {
		render(<Button {...testProps}>nice</Button>);
		const element = screen.getByText("nice");
		expect(element).toHaveClass("btn-primary btn-large kclass");
	});
	it("a连接状态", () => {
		render(
			<Button btnType="link" href="www.baidu.com">
				link
			</Button>
		);
		const element = screen.getByText("link");
		expect(element.tagName).toEqual("A");
		expect(element).toBeInTheDocument();
		expect(element).toHaveClass("btn btn-link");
	});
	it("禁用测试", () => {
		render(<Button {...disabledProps}>nice</Button>);
		const element = screen.getByText("nice") as HTMLButtonElement;
		expect(element.disabled).toBeTruthy();
		fireEvent.click(element);
		// 没有被调用
		expect(disabledProps.onClick).not.toHaveBeenCalled();
	});
});
