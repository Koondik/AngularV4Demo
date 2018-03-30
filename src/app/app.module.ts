import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule , JsonpModule} from '@angular/http'; /*引入数据请求模块*/
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { TodolistComponent } from './components/todolist/todolist.component';

import { StorageService } from './services/storage.service';
import { AjaxComponent } from './components/ajax/ajax.component';/**引入服务 */
@NgModule({
  declarations: [ /* 引入当前项目运行的组件，自定义组件都需要引入并且在这个里面进行配置 */
    AppComponent,
    HeaderComponent,
    AjaxComponent,
    NewsComponent,
    HomeComponent,
    TodolistComponent
  ],
  imports: [ /* 当前项目依赖的哪些模块 */
    BrowserModule,
    FormsModule,
    HttpModule, //注入模块
    JsonpModule
  ],
  providers: [ StorageService ], /* 定义的服务 回头放在这个里面 */
  bootstrap: [AppComponent] /* 默认启动那个组件 */
})
export class AppModule { }
