/*
 * @Description: 菜单子项组件
 * @Author: Gleason
 * @Date: 2022-02-17 22:02:25
 * @LastEditors: Gleason
 * @LastEditTime: 2022-02-22 21:51:57
 */
import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
export interface MenuItemProps {
	index?: string;
	disabled?: boolean;
	classNmae?: string;
	style?: React.CSSProperties;
}
const MenuItem: React.FC<MenuItemProps> = (props) => {
	const { index, disabled, classNmae, style, children } = props;
	const context = useContext(MenuContext);
	const classes = classNames("menu-item", classNmae, {
		"is-disabled": disabled,
		"is-active": context.index === index,
	});
	const handleClick = () => {
		if (context.onSelect && !disabled && typeof index === "string") {
			context.onSelect(index);
		}
	};
	return (
		<li className={classes} style={style} onClick={handleClick}>
			{children}
		</li>
	);
};
MenuItem.displayName = "MenuItem";
export default MenuItem;
