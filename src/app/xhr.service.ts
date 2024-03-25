import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const NEWS_API_KEY = 'edb935fe4388415c827f817604436263';

@Injectable({
	providedIn: 'root'
})
export class XhrService {

	constructor(private http: HttpClient) { }

	getNews(sources: string) {
		return this.http.get(`https://newsapi.org/v2/top-headlines?sources=${sources}"&apiKey=${NEWS_API_KEY}`);
	}
}
