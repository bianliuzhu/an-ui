/*
 * @Description: 主组建
 * @Author: Gleason
 * @Date: 2022-02-13 10:51:54
 * @LastEditors: Gleason
 * @LastEditTime: 2022-02-21 23:12:22
 */
import Button, { ButtonType, ButtonSize } from "./components/Button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
function App() {
	return (
		<div className="App">
			<div>
				<h1>按钮</h1>
				<Button>普通</Button>
				<Button autoFocus>autoFocus</Button>
				<Button size={ButtonSize.Large}>large</Button>
				<Button size={ButtonSize.Small}>small</Button>
				<Button disabled>禁用</Button>
				<Button btnType={ButtonType.Primary}>primary</Button>
				<Button btnType={ButtonType.Danger}>danger</Button>
				<Button btnType={ButtonType.Link}>link</Button>
				<Button btnType={ButtonType.Link} disabled>
					link
				</Button>
			</div>
			<div>
				<h1>横向菜单</h1>
				<Menu defaultIndex={0} mode="horizontal">
					<SubMenu title="下拉菜单1">
						<MenuItem disabled>下拉菜单1</MenuItem>
						<MenuItem disabled>下拉菜单2</MenuItem>
					</SubMenu>
					<MenuItem disabled>禁用的 Item</MenuItem>
					<SubMenu title="下拉菜单 2">
						<MenuItem disabled>下拉菜单1</MenuItem>
						<MenuItem disabled>下拉菜单2</MenuItem>
					</SubMenu>
				</Menu>
			</div>
			<div>
				<h1>纵向菜单</h1>
				<Menu defaultIndex={0} mode="vertical">
					<SubMenu title="下拉菜单1">
						<MenuItem disabled>下拉菜单1</MenuItem>
						<MenuItem disabled>下拉菜单2</MenuItem>
					</SubMenu>
					<MenuItem disabled>禁用的 Item</MenuItem>
					<SubMenu title="下拉菜单 2">
						<MenuItem disabled>下拉菜单1</MenuItem>
						<MenuItem disabled>下拉菜单2</MenuItem>
					</SubMenu>
				</Menu>
			</div>
		</div>
	);
}

export default App;
