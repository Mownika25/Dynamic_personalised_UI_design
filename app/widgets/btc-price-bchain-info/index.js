import { Rescope } from "cx/widgets";

import Controller from "./Controller";
import { enableCultureSensitiveFormatting } from "cx/ui";
import { LoadingOverlay } from "../../components/LoadingOverlay";

enableCultureSensitiveFormatting();

const defaultProps = {};

export default (props = defaultProps) => (
	<cx>
		<Rescope bind="$data">
			<div class="kpi-header" controller={Controller}>
				Number of articles about Rape 
			</div>
			<div class="kpi-main">
				<LoadingOverlay
					status:bind="status"
					error:bind="error"
					onRetry="fetchPrice"
				>
					<div class="kpi-value" text:tpl="{btcPrice:currency;;0}" />
				</LoadingOverlay>
			</div>
			<div class="kpi-footer">
				<a href="https://www.news18.com/newstopics/rape.html" target="_blank" rel="noopener">
					Sources
				</a>
			</div>
		</Rescope>
	</cx>
);
