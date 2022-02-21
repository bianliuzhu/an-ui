/*
 * @Description: submenu 组件
 * @Author: Gleason
 * @Date: 2022-02-21 21:37:06
 * @LastEditors: Gleason
 * @LastEditTime: 2022-02-21 23:12:46
 */
import React, { useState, useContext, FunctionComponentElement } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";

export interface SubMenuProps {
	index?: number;
	title: string;
	className?: string;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
	const { index, title, className, children } = props;
	const [menuOpen, setOpen] = useState(false);
	const context = useContext(MenuContext);
	let timer: any;
	const classes = classNames("menu-item submenu-item", className, {
		"is-active": context.index === index,
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
		const childrenConponent = React.Children.map(children, (child, index) => {
			const childElement = child as FunctionComponentElement<MenuItemProps>;
			if (childElement.type.displayName === "MenuItem") {
				return child;
			} else {
				throw new Error("⚠️警告：传入组件非 MenuItem 类型");
			}
		});
		return <ul className={subMenuClasses}>{childrenConponent}</ul>;
	};
	return (
		<li key={index} className={classes} {...hoverEvent}>
			<div className="submenu-title" {...clickEvent}>
				{title}
			</div>
			{renderChildren()}
		</li>
	);
};
SubMenu.displayName = "SubMenu";
export default SubMenu;
