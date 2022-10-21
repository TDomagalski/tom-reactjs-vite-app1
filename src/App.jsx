import favicon from "./assets/favicon.svg";
import "./styles/css/App.css";
import { Navbar } from "./components/Navbar";

function App() {
	return (
		<div id="App">
			<div id="App_navigation">
				<Navbar />
			</div>
			<div id="App_content">
				<h1>Hello World</h1>
				<img src={favicon} alt="favicon" />
			</div>
		</div>
	);
}

export default App;
