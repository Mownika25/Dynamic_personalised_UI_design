import Controller from "./Controller";
import { Repeater } from "cx/widgets";

const defaultProps = {};

export default ({} = defaultProps) => (
	<cx>
		<div class="kpi-header" controller={Controller}>
			Technology News
		</div>
		<div class="kpi-main" style="justify-content: start">
			<ul>
				<Repeater records:bind="$data.articles">
					<li>
						<a
							href:bind="$record.url"
							target="_blank"
							rel="noopener"
							text:bind="$record.title"
						/>
					</li>
				</Repeater>
			</ul>
		</div>
		<div class="kpi-footer">
			<a href:tpl="https://www.indiatoday.in/technology/news" target="_blank" rel="noopener">
				More
			</a>
		</div>
	</cx>
);
