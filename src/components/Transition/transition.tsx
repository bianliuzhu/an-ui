/*
 * @Description:
 * @Author: Gleason
 * @Date: 2022-02-27 21:38:03
 * @LastEditors: Gleason
 * @LastEditTime: 2022-03-06 19:15:33
 */
import React from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionClassNames } from "react-transition-group/CSSTransition";

type AnimationName =
	| "zoom-in-top"
	| "zoom-in-left"
	| "zoom-in-bottom"
	| "zoom-in-right";

interface TransitionCOMProps {
	classNames?: string | CSSTransitionClassNames | undefined;
	in?: boolean;
	animation?: AnimationName;
	wrapper?: boolean;
	timeout: number;
	unmountOnExit?: boolean;
}

const Transition: React.FC<TransitionCOMProps> = (props) => {
	const { children, classNames, animation, wrapper, ...restProps } = props;
	return (
		<CSSTransition
			classNames={classNames ? classNames : animation}
			{...restProps}
		>
			{wrapper ? <div>{children}</div> : children}
		</CSSTransition>
	);
};
Transition.defaultProps = {
	wrapper: true,
	unmountOnExit: true,
};

export default Transition;
