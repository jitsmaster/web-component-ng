import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from "@angular/elements";
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { News2Component } from './news2/news2.component';

@NgModule({
	declarations: [
		AppComponent,
		NewsComponent,
		News2Component,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent, NewsComponent, News2Component]
})
export class AppModule {
	constructor(private injector: Injector) {
		// Convert `NewsComponent` and `News2Component` to custom elements/web components
		// so they are self contained and can work under any JS framework, or no framework at all
		const newsElement = createCustomElement(NewsComponent, { injector: this.injector });
		customElements.define('news-element', newsElement);

		// angular elements only support 1 root element, so the following line won't be able to define the second element
		// const news2Element = createCustomElement(News2Component, { injector: this.injector });		
		// customElements.define('news2-element', news2Element);
	}
	ngDoBootstrap() { }
}
