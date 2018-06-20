/*初始化生成带路由配置项目的指令
* ng new 项目名称 --routing
*/
//配置路由文件
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//引入组件
import { TodolistComponent } from './components/todolist/todolist.component';
import { AjaxComponent } from './components/ajax/ajax.component';
import { ParentComponent } from './components/parent/parent.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { NewsComponent } from './components/news/news.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
//配置路由  
const routes:Routes = [
    {
        path:'Todolist',
        component:TodolistComponent,
        children:[]
    },
    {
        path:'Ajax',
        component:AjaxComponent,
        children:[]
    },
    {
        path:'Parent',
        component:ParentComponent,
        children:[]
    },
    {
        path:'Product',
        component:ProductComponent,
        children:[]
    },
    {
        path:'News/:id',  /* 配置动态路由 */
        component:NewsComponent,
        children:[]
    },
    {
        path:'ShopList', 
        component:ShopListComponent,
        children:[
            {
                path:'cart',
                component:CartComponent,
                children:[]
            },
            {   //改方法无论是空路由或者错误路由都会默认跳转到指定路由
                path:'**',
                redirectTo:'cart'
            }
        ]
    },
    //默认跳转的路由
    {   // 该种写法当你空路由时默认跳转，但路由不为空却没有匹配到时无法跳转
        path:'',
        redirectTo:'Todolist',
        pathMatch:'full'
    },
    {   //改方法无论是空路由或者错误路由都会默认跳转到指定路由
        path:'**',
        redirectTo:'Todolist'
    }

]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}