import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { XhrService } from '../xhr.service';

@Component({
	selector: 'app-news',
	templateUrl: './news2.component.html',
	styleUrl: './news2.component.less'
})
export class News2Component {
	news$: Observable<any[]>;
	constructor(private xhr: XhrService) {
		this.news$ = this.xhr.getNews("politico")
			.pipe(
				map((data: any) => data.articles));
	}
}
