/*
 * @Description: input 组件
 * @Author: Gleason
 * @Date: 2022-03-28 21:41:35
 * @LastEditors: Gleason
 * @LastEditTime: 2022-03-29 22:20:26
 */
import { FC, ReactElement, InputHTMLAttributes } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";
import Icon from "../icon";
type InputSize = "large" | "small";
type inputPand = string | ReactElement;
export interface InputProps
	extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
	/**
	 * 是否禁用 input 组件
	 */
	disabled?: boolean;
	/**
	 * input 组件大小
	 */
	size?: InputSize;
	/**
	 * input 组件Icon （fortawesome 支持的 icon）
	 */
	icon?: IconProp;
	/**
	 * input 前缀
	 */
	prepend?: inputPand;
	/**
	 * input 后缀
	 */
	append?: inputPand;
}

/**
 * Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 *
 * ~~~js
 * // 引用方式
 * import { Input } from 'ui-an'
 * ~~~
 * 支持 HTMLInput 的所有基本属性
 */
const Input: FC<InputProps> = (props) => {
	// 取出各种属性
	const { disabled, size, icon, prepend, append, style, ...restProps } = props;

	// 根据属性计算 className
	const cnames = classNames("an-input-wrapper", {
		[`input-size-${size}`]: size,
		"is-disabled": disabled,
		"input-group": prepend || append,
		"input-group-append": !!append,
		"input-group-prepend": !!prepend,
	});

	// 根据属性计算是否添加特定的节点
	return (
		<div className={cnames} style={style}>
			{prepend && <div className="an-input-group-prepend">{prepend}</div>}
			{icon && (
				<div className="icon-wrapper">
					<Icon icon={icon} title={`title-${icon}`} />
				</div>
			)}
			<input className="an-input-inner" disabled={disabled} {...restProps} />
			{append && <div className="an-input-group-append">{append}</div>}
		</div>
	);
};

export default Input;
