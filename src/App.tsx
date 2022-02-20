/*
 * @Description: 主组建
 * @Author: Gleason
 * @Date: 2022-02-13 10:51:54
 * @LastEditors: Gleason
 * @LastEditTime: 2022-02-20 11:58:13
 */
import Button, { ButtonType, ButtonSize } from "./components/Button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
function App() {
	return (
		<div className="App">
			<div>
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
				<Menu defaultIndex={0} mode="horizontal">
					<MenuItem index={1}>1</MenuItem>
					<MenuItem disabled index={2}>
						2
					</MenuItem>
					<MenuItem index={3}> 3</MenuItem>
				</Menu>
			</div>
		</div>
	);
}

export default App;
