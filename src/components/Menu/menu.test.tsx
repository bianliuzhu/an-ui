/*
 * @Description: menu 测试组件
 * @Author: Gleason
 * @Date: 2022-02-20 10:47:36
 * @LastEditors: Gleason
 * @LastEditTime: 2022-02-22 21:58:31
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Menu, { MenuProps } from "./menu";
import MenuItem from "./menuItem";

const testProps: MenuProps = {
	defaultIndex: "0",
	onSelect: jest.fn(),
	className: "test",
};

const testVerProps: MenuProps = {
	defaultIndex: "0",
	mode: "vertical",
};

const generateMenu = (props: MenuProps) => {
	return (
		<Menu mode={props.mode}>
			<MenuItem>active</MenuItem>
			<MenuItem disabled>disabled</MenuItem>
			<MenuItem>xyz</MenuItem>
			<li>234234</li>
		</Menu>
	);
};

let menuElement: HTMLElement,
	activeElement: HTMLElement,
	disabledElement: HTMLElement,
	thirdItem: HTMLElement;

describe("测试 menu 及 menuItem 组件", () => {
	it("根据默认的 props 呈现正确的 Menu 及 MenuItem", () => {
		render(generateMenu(testProps));
		menuElement = screen.getByTestId("test-menu");
		disabledElement = screen.getByText("disabled");
		// 断言是否在document中存在 menu 元素
		expect(menuElement).toBeInTheDocument();
		expect(menuElement).toHaveClass("viking-menu");
		// eslint-disable-next-line testing-library/no-node-access
		expect(menuElement.getElementsByTagName("li").length).toEqual(3);
		expect(disabledElement).toHaveClass("menu-item is-disabled");
	});
	it("点击切换 item，回调触发", () => {
		render(generateMenu(testProps));
		activeElement = screen.getByText("active");
		thirdItem = screen.getByText("xyz");
		disabledElement = screen.getByText("disabled");

		fireEvent.click(thirdItem);
		expect(thirdItem).toHaveClass("is-active");
		expect(activeElement).not.toHaveClass("is-active");
		// expect(testProps.onSelect).toHaveBeenCalledWith(0);
		fireEvent.click(disabledElement);
		expect(disabledElement).not.toHaveClass("is-active");
		// expect(testProps.onSelect).toHaveBeenLastCalledWith(0);
	});
	it("传入 mode 渲染对应的 class", () => {
		render(generateMenu(testVerProps));
		menuElement = screen.getByTestId("test-menu");
		expect(menuElement).toBeInTheDocument();
		expect(menuElement).toHaveClass("menu-vertical");
	});
});

/// @testing-library 理念：测试案例越贴近使用者的使用方法，测试结果就能给你越大的信心，
/// 所以它的api一般都是通过渲染dom元素内容取得的节点，而不是通过class和id
