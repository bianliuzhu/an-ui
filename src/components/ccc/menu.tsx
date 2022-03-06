/*
 * @Description: 菜单组件
 * @Author: Gleason
 * @Date: 2022-02-17 21:46:22
 * @LastEditors: Gleason
 * @LastEditTime: 2022-02-22 22:06:42
 */
import React, { useState, createContext } from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";
type MenuMode = "horizontal" | "vertical";

type OnSelectCallback = (selectIndex: string) => void;

interface IMenuContext {
	index: string;
	onSelect?: OnSelectCallback;
	mode?: MenuMode;
	defaultOpenSubMenus?: string[];
}

export interface MenuProps {
	defaultIndex?: string;
	className?: string;
	mode?: MenuMode;
	style?: React.CSSProperties;
	onSelect?: OnSelectCallback;
	defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({
	index: "0",
});

const Menu: React.FC<MenuProps> = (props) => {
	const {
		defaultIndex,
		className,
		mode,
		style,
		children,
		onSelect,
		defaultOpenSubMenus,
	} = props;
	const [cuttentActive, setActive] = useState(defaultIndex);
	const classes = classNames("viking-menu", className, {
		"menu-vertical": mode === "vertical",
		"menu-horizontal": mode !== "vertical",
	});
	const handleClick = (index: string) => {
		setActive(index);
		onSelect && onSelect(index);
	};
	const passedContext: IMenuContext = {
		index: cuttentActive ? cuttentActive : "0",
		onSelect: handleClick,
		mode,
		defaultOpenSubMenus,
	};
	const renderChildren = () => {
		return React.Children.map(children, (child, index) => {
			const childElement =
				child as React.FunctionComponentElement<MenuItemProps>;
			const { displayName } = childElement.type;
			if (displayName === "MenuItem" || displayName === "SubMenu") {
				return React.cloneElement(childElement, { index: index.toString() });
			} else {
				throw new Error("传入的 不是一个 MenuItem 类型的元素");
			}
		});
	};
	return (
		<ul className={classes} style={style} data-testid="test-menu">
			<MenuContext.Provider value={passedContext}>
				{renderChildren()}
			</MenuContext.Provider>
		</ul>
	);
};

Menu.defaultProps = {
	defaultIndex: "0",
	mode: "horizontal",
	defaultOpenSubMenus: [],
};

export default Menu;
