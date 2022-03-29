/*
 * @Description: input 组件
 * @Author: Gleason
 * @Date: 2022-03-28 21:41:35
 * @LastEditors: Gleason
 * @LastEditTime: 2022-03-29 22:10:23
 */
import { FC, ReactElement, InputHTMLAttributes } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";
import Icon from "../icon";
type InputSize = "large" | "small";
type inputPand = string | ReactElement;
export interface InputProps
	extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
	disabled?: boolean;
	size?: InputSize;
	icon?: IconProp;
	prepend?: inputPand;
	append?: inputPand;
}

const Input: FC<InputProps> = (props) => {
	const { disabled, size, icon, prepend, append, style, ...restProps } = props;
	// 取出各种属性
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
