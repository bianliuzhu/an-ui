/*
 * @Description: 中转导出
 * @Author: Gleason
 * @Date: 2022-03-09 20:45:54
 * @LastEditors: Gleason
 * @LastEditTime: 2022-03-09 21:01:24
 */
import { FC } from "react";
import Menu, { MenuProps } from "./menu";
import MenuItem, { MenuItemProps } from "./menuItem";
import SubMenu, { SubMenuProps } from "./subMenu";

// 建立交叉类型
export type IMenuComponents = FC<MenuProps> & {
	Item: FC<MenuItemProps>;
	SubMenu: FC<SubMenuProps>;
};

// 类型转换
const TransMenu = Menu as IMenuComponents;

// 类型赋值
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

// 类型导出
export default TransMenu;
