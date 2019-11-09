import Controller from "./Controller";
import { Repeater } from "cx/widgets";

const defaultProps = {};

export default ({} = defaultProps) => (
	<cx>
		<div class="kpi-header" controller={Controller}>
			Hot SO Questions
		</div>
		<div class="kpi-main" style="justify-content: start">
			<ul>
				<Repeater records:bind="$data.questions">
					<li>
						<a
							href:bind="$record.link"
							target="_blank"
							rel="noopener"
							text:bind="$record.title"
						/>
					</li>
				</Repeater>
			</ul>
		</div>
		<div class="kpi-footer">
			<a
				href:tpl="https://stackoverflow.com/?tab=hot"
				target="_blank"
				rel="noopener"
			>
				StackOverflow.com
			</a>
		</div>
	</cx>
);
