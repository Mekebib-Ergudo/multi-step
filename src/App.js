import "./App.css";
import Add from "./Components/Add-Ons/Add";
import Final from "./Components/Final/Final";
import Personal from "./Components/Personal-Info/Personal";
import Plans from "./Components/Plans/Plans";
import Summary from "./Components/Summary/Summary";
import Nav from "./Components/nav/Nav";
import { Route, Routes } from "react-router-dom";
function App() {
	return (
		<div className="app">
			<div className="app__container">
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Nav />
								<Personal />
							</>
						}
					/>
					<Route
						path="/plan"
						element={
							<>
								<Nav />
								<Plans />
							</>
						}
					/>
					<Route
						path="/add"
						element={
							<>
								<Nav />
								<Add />
							</>
						}
					/>
					<Route
						path="/summary"
						element={
							<>
								<Nav />
								<Summary />
							</>
						}
					/>
					<Route
						path="/final"
						element={
							<>
								<Nav />
								<Final />
							</>
						}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
