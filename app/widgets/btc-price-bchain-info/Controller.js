import { Controller } from "cx/ui";

const getBtcPrice = () =>
	fetch("https://newsapi.org/v2/top-headlines?q=climate&apiKey=c03cf67d0e414ff3a578badda1b368cf"
		)
		.then(x => {
			if (!x.ok)
				throw new Error("Failed to fetch no.of articles");
			return x;
		})
		.then(x => x.json())
		.then(x => {
			return x["totalResults"];
		});

export default class extends Controller {
	onInit() {
		this.timer = setInterval(::this.fetchPrice, 60 * 1000);
		this.fetchPrice();
	}

	onDestroy() {
		clearInterval(this.timer);
	}

	fetchPrice() {
		this.store.set("status", "loading");
		getBtcPrice()
			.then(p => {
				this.store.set("status", "ok");
				this.store.set("btcPrice", p);
			})
			.catch(err => {
				this.store.set("status", "error");
				this.store.set("error", err.toString());
			});
	}
}
