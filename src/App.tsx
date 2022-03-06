/*
 * @Description: 主组建
 * @Author: Gleason
 * @Date: 2022-02-13 10:51:54
 * @LastEditors: Gleason
 * @LastEditTime: 2022-03-06 21:42:22
 */
import Button from "./components/Button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Icon from "./components/Icon";
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
