/*
 * @Description: 菜单组件
 * @Author: Gleason
 * @Date: 2022-02-17 21:46:22
 * @LastEditors: Gleason
 * @LastEditTime: 2022-02-20 13:32:08
 */
import React, { useState, createContext } from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";
type MenuMode = "horizontal" | "vertical";

type OnSelectCallback = (selectIndex: number) => void;

interface IMenuContext {
	index: number;
	onSelect?: OnSelectCallback;
}

export interface MenuProps {
	defaultIndex?: number;
	className?: string;
	mode?: MenuMode;
	style?: React.CSSProperties;
	onSelect?: OnSelectCallback;
}

export const MenuContext = createContext<IMenuContext>({
	index: 0,
});

const Menu: React.FC<MenuProps> = (props) => {
	const { defaultIndex, className, mode, style, children, onSelect } = props;
	const [cuttentActive, setActive] = useState(defaultIndex);
	const classes = classNames("viking-menu", className, {
		"menu-vertical": mode === "vertical",
	});
	const handleClick = (index: number) => {
		setActive(index);
		onSelect && onSelect(index);
	};
	const passedContext: IMenuContext = {
		index: cuttentActive ? cuttentActive : 0,
		onSelect: handleClick,
	};
	const renderChildren = () => {
		return React.Children.map(children, (child, index) => {
			const childElement =
				child as React.FunctionComponentElement<MenuItemProps>;
			const { displayName } = childElement.type;
			if (displayName === "MenuItem") {
				return React.cloneElement(childElement, { index });
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
	defaultIndex: 0,
	mode: "horizontal",
};

export default Menu;
