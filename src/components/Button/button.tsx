/*
 * @Description: 按钮组件
 * @Author: Gleason
 * @Date: 2022-02-13 11:29:09
 * @LastEditors: Gleason
 * @LastEditTime: 2022-03-03 22:37:06
 */
import classNames from "classnames";

// 按钮大小
type ButtonSize = "large" | "small";

// 按钮类型
type ButtonType = "default" | "primary" | "danger" | "link";

// 按钮属性
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
 * Partial 修饰所有属性变为可选
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
