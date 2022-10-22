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
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa ea,
					dolorum voluptas tempora corporis, reprehenderit voluptatibus esse
					pariatur laboriosam, id animi nesciunt expedita dicta deserunt!
					Consectetur ducimus similique mollitia libero. Lorem ipsum dolor sit,
					amet consectetur adipisicing elit. Culpa ea, dolorum voluptas tempora
					corporis, reprehenderit voluptatibus esse pariatur laboriosam, id
					animi nesciunt expedita dicta deserunt! Consectetur ducimus similique
					mollitia libero.Lorem ipsum dolor sit, amet consectetur adipisicing
					elit. Culpa ea, dolorum voluptas tempora corporis, reprehenderit
					voluptatibus esse pariatur laboriosam, id animi nesciunt expedita
					dicta deserunt! Consectetur ducimus similique mollitia libero.Lorem
					ipsum dolor sit, amet consectetur adipisicing elit. Culpa ea, dolorum
					voluptas tempora corporis, reprehenderit voluptatibus esse pariatur
					laboriosam, id animi nesciunt expedita dicta deserunt! Consectetur
					ducimus similique mollitia libero.Lorem ipsum dolor sit, amet
					consectetur adipisicing elit. Culpa ea, dolorum voluptas tempora
					corporis, reprehenderit voluptatibus esse pariatur laboriosam, id
					animi nesciunt expedita dicta deserunt! Consectetur ducimus similique
					mollitia libero.Lorem ipsum dolor sit, amet consectetur adipisicing
					elit. Culpa ea, dolorum voluptas tempora corporis, reprehenderit
					voluptatibus esse pariatur laboriosam, id animi nesciunt expedita
					dicta deserunt! Consectetur ducimus similique mollitia libero.
				</p>
				<img src={favicon} alt="favicon" />
			</div>
		</div>
	);
}

export default App;
