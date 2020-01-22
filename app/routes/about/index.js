import { HtmlElement, FlexBox, Section } from "cx/widgets";

import Controller from "./Controller";

export default (
	<cx>
		<FlexBox
			controller={Controller}
			align="center"
			justify="center"
			style="height: 100%"
		>
			<h2 putInto="header">About</h2>

			<Section mod="card" style="padding: 50px">
				<h4>Info</h4>
				<p ws>
					Dashboards allows you to build personalized dashboards by arranging
					widgets on a workspace. Each board can be customized with different size,
					background image or color. Dashboards are stored in browser's local storage.
					If you sign in your dashboards will be saved to Google Firebase.
				</p>
				
				<h4>Tech</h4>
				<p ws>
					The application is built using <a href="https://cxjs.io">CxJS</a>,
					<a href="https://reactjs.org/">React</a>, <a href="https://babeljs.io/">Babel</a> and
					<a href="https://webpack.js.org/">webpack</a>
				</p>
				<h4>Developed By</h4>
				<p ws>
					MELISMA BEHERA, SOFIA SUNAM, SWETA BEHERA, G SATYA SAI MOWNIKA
				</p>
				<h4>Contact Us</h4>
				<p ws>
					9437012345
				</p>
			</Section>
		</FlexBox>
	</cx>
);
