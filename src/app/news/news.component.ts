import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { XhrService } from '../xhr.service';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrl: './news.component.less'
})
export class NewsComponent {
	news$: Observable<any[]>;
	constructor(private xhr: XhrService) {
		this.news$ = this.xhr.getNews("techcrunch")
			.pipe(
				map((data: any) => data.articles));
	}
}
