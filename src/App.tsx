/*
 * @Description: 主组建
 * @Author: Gleason
 * @Date: 2022-02-13 10:51:54
 * @LastEditors: Gleason
 * @LastEditTime: 2022-03-22 22:01:42
 */

import Button from "./components/button/Button";
import Menu from "./components/menu/menu";
import MenuItem from "./components/menu/menuItem";
import SubMenu from "./components/menu/subMenu";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Icon from "./components/icon/index";
library.add(fas);
function App(): JSX.Element {
	return (
		<div className="App">
			<div>
				<h1>ICON</h1>
				<Icon icon="coffee" size="10x" theme="primary" />
			</div>
			<div>
				<h1>按钮</h1>
				<Button>普通</Button>
				<Button autoFocus>autoFocus</Button>
				<Button size="large">large</Button>
				<Button size="small">small</Button>
				<Button disabled>禁用</Button>
				<Button btnType="primary">primary</Button>
				<Button btnType="danger">danger</Button>
				<Button btnType="link">link</Button>
				<Button btnType="link" disabled>
					link
				</Button>
				<Button></Button>
			</div>
			<div>
				<h1>横向菜单</h1>
				<Menu defaultIndex="0" mode="horizontal">
					<SubMenu title="下拉菜单1">
						<MenuItem>下拉菜单1</MenuItem>
						<MenuItem>下拉菜单2</MenuItem>
					</SubMenu>
					<MenuItem disabled>禁用的 Item</MenuItem>
					<SubMenu title="下拉菜单 2">
						<MenuItem>下拉菜单1</MenuItem>
						<MenuItem>下拉菜单2</MenuItem>
					</SubMenu>
				</Menu>
			</div>
			<div>
				<h1>纵向菜单</h1>
				<Menu defaultIndex="0" mode="vertical" defaultOpenSubMenus={["2"]}>
					<SubMenu title="下拉菜单1">
						<MenuItem>下拉菜单1</MenuItem>
						<MenuItem>下拉菜单2</MenuItem>
					</SubMenu>
					<MenuItem disabled>禁用的 Item</MenuItem>
					<SubMenu title="下拉菜单 2">
						<MenuItem>下拉菜单1</MenuItem>
						<MenuItem disabled>下拉菜单2</MenuItem>
					</SubMenu>
				</Menu>
			</div>
		</div>
	);
}

export default App;
