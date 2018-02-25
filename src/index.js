import React from "react";
import { render } from "react-dom";

import Root from "./root";

const App = () => (
	<div>
		<Root />
	</div>
);

render(<App />, document.getElementById("root"));
