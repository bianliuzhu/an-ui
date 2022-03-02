/*
 * @Description:
 * @Author: Gleason
 * @Date: 2022-02-13 11:29:09
 * @LastEditors: Gleason
 * @LastEditTime: 2022-03-01 22:46:03
 */
import classNames from "classnames";

export enum ButtonSize {
	Large = "lg",
	Small = "sm",
}
export enum ButtonType {
	Primary = "primary",
	Default = "default",
	Danger = "danger",
	Link = "link",
}
interface BaseButtonProps {
	/**
	 * 跳转链接
	 */
	href?: string;
	/**
	 * button 尺寸
	 */
	size?: ButtonSize;
	/**
	 * button 类型
	 */
	btnType?: ButtonType;
	/**
	 * 是否禁用
	 */
	disabled?: boolean;
	/**
	 * 自定义样式 class 名称
	 */
	className?: string;
	/**
	 * 按钮显示文案可以是任意的ReactNode
	 */
	children?: React.ReactNode;
}

/**
 * 支持原生 button 属性
 */
type NativeButtonProps = BaseButtonProps &
	React.ButtonHTMLAttributes<HTMLElement>;

/**
 * 支持原生 anchor 属性
 */
type AnchorButtonProps = BaseButtonProps &
	React.AnchorHTMLAttributes<HTMLElement>;

/**
 * 使用 Partial 修饰所有属性变为可选
 */
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
	const { btnType, disabled, size, children, href, className, ...restProps } =
		props;
	// btn btn-lg btn-primary
	// 整合 class
	const classes = classNames("btn", className, {
		[`btn-${btnType}`]: btnType,
		[`btn-${size}`]: size,
		disabled: btnType === ButtonType.Link && disabled,
	});

	// 判断是否为连接
	if (btnType === ButtonType.Link && href) {
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
	btnType: ButtonType.Default,
};

export default Button;
