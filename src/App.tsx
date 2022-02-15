/*
 * @Description: 主组建
 * @Author: Gleason
 * @Date: 2022-02-13 10:51:54
 * @LastEditors: Gleason
 * @LastEditTime: 2022-02-15 23:07:35
 */
import Button, { ButtonType, ButtonSize } from "./components/Button";
function App() {
	return (
		<div className="App">
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
	);
}

export default App;
