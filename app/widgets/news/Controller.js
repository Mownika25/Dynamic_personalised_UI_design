import { Controller } from "cx/ui";

const getArticles = () =>
	fetch(
		"https://newsapi.org/v2/top-headlines?category=technology&country=in&country=us&apiKey=771457fbe3a34f638276dbf73acb337e"
		)
		.then(x => {
			if (!x.ok)
				throw new Error("Failed to fetch news from https://newsapi.org.");
			return x;
		})
		.then(x => x.json())
		.then(x => {
			return x.articles;
		});

export default class extends Controller {
	onInit() {
		this.timer = setInterval(::this.fetchArticles, 2*60 * 1000);//every 30s it will refresh
		this.fetchArticles();
	}

	onDestroy() {
		clearInterval(this.timer);
	}

	fetchArticles() {
		getArticles().then(p => {
			this.store.set("$data.articles", p);
		});
	}
}
