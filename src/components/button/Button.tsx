/*
 * @Description: 按钮组件
 * @Author: Gleason
 * @Date: 2022-02-13 11:29:09
 * @LastEditors: Gleason
 * @LastEditTime: 2022-03-09 22:30:42
 */
import React from "react";
import classNames from "classnames";

type ButtonSize = "large" | "small";

type ButtonType = "default" | "primary" | "danger" | "link";

interface BaseButtonProps {
	/**
	 * 跳转链接，该属性仅在 btnType=link 时生效
	 */
	href?: string;
	/**
	 * button 尺寸
	 */
	size?: ButtonSize;
	/**
	 * 按钮类型
	 */
	btnType?: ButtonType;
	/**
	 * 是否禁用按钮
	 */
	disabled?: boolean;
	/**
	 * 自定义样式 css class 名称
	 */
	className?: string;
	/**
	 * 按钮显示文案可以是任意的 ReactNode
	 */
	children?: React.ReactNode;
}

type NativeButtonProps = BaseButtonProps &
	React.ButtonHTMLAttributes<HTMLElement>;

type AnchorButtonProps = BaseButtonProps &
	React.AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

/**
- 简约风按钮
- 支持 HTML 原生各种属性，简单封装，内置5种主题色，多种状态，多种环境使用
**/
const Button: React.FC<ButtonProps> = (props) => {
	const { btnType, disabled, size, children, href, className, ...restProps } =
		props;

	const classes = classNames("btn", className, {
		[`btn-${btnType}`]: btnType,
		[`btn-${size}`]: size,
		disabled: btnType === "link" && disabled,
	});

	// 判断是否为连接
	if (btnType === "link" && href) {
		return (
			<a href={href} className={classes} {...restProps}>
				{children}
			</a>
		);
	} else {
		return (
			<button className={classes} disabled={disabled} {...restProps}>
				{children}
			</button>
		);
	}
};
// 设置默认属性
Button.defaultProps = {
	disabled: false,
	btnType: "default",
};

export default Button;
