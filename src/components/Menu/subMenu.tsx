/*
 * @Description: submenu 组件
 * @Author: Gleason
 * @Date: 2022-02-21 21:37:06
 * @LastEditors: Gleason
 * @LastEditTime: 2022-02-28 22:55:07
 */
import React, { useState, useContext, FunctionComponentElement } from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";
import Icon from "components/Icon/icon";
import Transition from "components/Transition/transition";
export interface SubMenuProps {
	index?: string;
	title: string;
	className?: string;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
	const { index, title, className, children } = props;
	const context = useContext(MenuContext);
	const openedSubMenus = context.defaultOpenSubMenus as Array<string>;
	const isOpened =
		index && context.mode === "vertical"
			? openedSubMenus.includes(index)
			: false;
	const [menuOpen, setOpen] = useState(isOpened);

	let timer: any;
	const classes = classNames("menu-item submenu-item", className, {
		"is-active": context.index === index,
		"is-opened": menuOpen,
		"is-vertical": context.mode === "vertical",
	});

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		setOpen(!menuOpen);
	};

	const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
		clearTimeout(timer);
		e.preventDefault();
		timer = setTimeout(() => {
			setOpen(toggle);
		}, 300);
	};

	const clickEvent =
		context.mode === "vertical"
			? {
					onClick: handleClick,
			  }
			: {};
	const hoverEvent =
		context.mode !== "vertical"
			? {
					onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
					onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false),
			  }
			: {};

	const renderChildren = () => {
		const subMenuClasses = classNames("viking-submenu", {
			"menu-opened": menuOpen,
		});
		const childrenConponent = React.Children.map(children, (child, idx) => {
			const childElement = child as FunctionComponentElement<MenuItemProps>;
			if (childElement.type.displayName === "MenuItem") {
				return React.cloneElement(childElement, {
					index: `${index}-${idx}`,
				});
			} else {
				throw new Error("⚠️警告：传入组件非 MenuItem 类型");
			}
		});
		const animationType =
			context.mode === "vertical" ? "zoom-in-left" : "zoom-in-top";
		return (
			<Transition in={menuOpen} timeout={300} animation={animationType}>
				<ul className={subMenuClasses}>{childrenConponent}</ul>
			</Transition>
		);
	};
	return (
		<li key={index} className={classes} {...hoverEvent}>
			<div className="submenu-title" {...clickEvent}>
				{title}
				<Icon icon="angle-down" className="arrow-icon" />
			</div>
			{renderChildren()}
		</li>
	);
};
SubMenu.displayName = "SubMenu";
export default SubMenu;
