import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./Pages/LandingPage";
import CardImage1 from "./Pages/CardImage1";
import CardImage2 from "./Pages/CardImage2";
import CardImage3 from "./Pages/CardImage3";
import CardImage4 from "./Pages/CardImage4";
import CardImage5 from "./Pages/CardImage5";
import CardImage6 from "./Pages/CardImage6";
import CardImage7 from "./Pages/CardImage7";
import CardImage8 from "./Pages/CardImage8";
import CardImage9 from "./Pages/CardImage9";
import CardImage10 from "./Pages/CardImage10";
import CardImage11 from "./Pages/CardImage11";
import CardImage12 from "./Pages/CardImage12";
import CardImage13 from "./Pages/CardImage13";
import CardImage14 from "./Pages/CardImage14";
import CardImage15 from "./Pages/CardImage15";
import CardImage16 from "./Pages/CardImage16";
import CardImage17 from "./Pages/CardImage17";
import CardImage18 from "./Pages/CardImage18";
import CardImage19 from "./Pages/CardImage19";
import CardImage20 from "./Pages/CardImage20";
import CardImage21 from "./Pages/CardImage21";
import CardImage22 from "./Pages/CardImage22";
import CardImage23 from "./Pages/CardImage23";
import CardImage24 from "./Pages/CardImage24";
import CardImage25 from "./Pages/CardImage25";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={ <LandingPage />}></Route>
				<Route path="/image1" element={ <CardImage1 />}></Route>
				<Route path="/image2" element={ <CardImage2 />}></Route>
				<Route path="/image3" element={ <CardImage3 />}></Route>
				<Route path="/image4" element={ <CardImage4 />}></Route>
				<Route path="/image5" element={ <CardImage5 />}></Route>
				<Route path="/image6" element={ <CardImage6 />}></Route>
				<Route path="/image7" element={ <CardImage7 />}></Route>
				<Route path="/image8" element={ <CardImage8 />}></Route>
				<Route path="/image9" element={ <CardImage9 />}></Route>
				<Route path="/image10" element={ <CardImage10 />}></Route>
				<Route path="/image11" element={ <CardImage11 />}></Route>
				<Route path="/image12" element={ <CardImage12 />}></Route>
				<Route path="/image13" element={ <CardImage13 />}></Route>
				<Route path="/image14" element={ <CardImage14 />}></Route>
				<Route path="/image15" element={ <CardImage15 />}></Route>
				<Route path="/image16" element={ <CardImage16 />}></Route>
				<Route path="/image17" element={ <CardImage17 />}></Route>
				<Route path="/image18" element={ <CardImage18 />}></Route>
				<Route path="/image19" element={ <CardImage19 />}></Route>
				<Route path="/image20" element={ <CardImage20 />}></Route>
				<Route path="/image21" element={ <CardImage21 />}></Route>
				<Route path="/image22" element={ <CardImage22 />}></Route>
				<Route path="/image23" element={ <CardImage23 />}></Route>
				<Route path="/image24" element={ <CardImage24 />}></Route>
				<Route path="/image25" element={ <CardImage25 />}></Route>
			</Routes>
		</Router>
	)
}

export default App;