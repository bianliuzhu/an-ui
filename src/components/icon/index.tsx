/*
 * @Description: icon 组件
 * @Author: Gleason
 * @Date: 2022-02-24 22:10:30
 * @LastEditors: Gleason
 * @LastEditTime: 2022-03-06 21:54:33
 */
import React from "react";
import classNames from "classnames";
import {
	FontAwesomeIcon,
	FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

// 定义 theme 字符自变量
export type ThemeProps =
	| "primary"
	| "secondary"
	| "success"
	| "info"
	| "waring"
	| "danger"
	| "light"
	| "dark";

// 继承 FontAwesome 属性
export interface IconProps extends FontAwesomeIconProps {
	theme?: ThemeProps;
}

const Icon: React.FC<IconProps> = (props) => {
	const { className, theme, ...restProps } = props;
	const classes = classNames("viking-icon", className, {
		[`icon-${theme}`]: theme,
	});

	return <FontAwesomeIcon className={classes} {...restProps} />;
};
Icon.defaultProps = {
	theme: "primary",
	icon: "adn",
};
export default Icon;
