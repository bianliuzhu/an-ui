/*
 * @Description: input 组件
 * @Author: Gleason
 * @Date: 2022-03-28 21:41:35
 * @LastEditors: Gleason
 * @LastEditTime: 2022-03-28 22:10:57
 */
import { FC, ReactElement, InputHTMLAttributes } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
type InputSize = "large" | "small";
type inputPand = string | ReactElement;
export interface InputProps
	extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
	disabled?: boolean;
	size?: InputSize;
	icon?: IconProp;
	prepand?: inputPand;
	append?: inputPand;
}

const Input: FC<InputProps> = (props) => {
	return <input type="text" />;
};

export default Input;
