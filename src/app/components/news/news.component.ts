import { Component, OnInit } from '@angular/core';
// 引入 ActivatedRoute模块
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  title = '你好angular4.X'; //属性
  msg:any; //这是另一种定义属性的方法
  msg1:string = '这是一个string类型的msg'

  //定义属性我们还可以加修饰符
  public username = '张三'; /*username 可以是任意类型*/ 
  private student:string = '这是一个学生的属性';
  /**声明属性的几种方式
   * public 公有（注意：不加的话为默认） 可以在这个类里面使用，也可以在类外面使用
   * protected 保护类型  只有当前类和它的子类里面可以访问
   * private 私有 只有在当前类才可以访问这个属性 
   */
  //绑定属性
  public id = '这是个绑定属性'

  public h = ''

  //数据循环
  public list = [];
  public list2:any;
  public list4:any;
  //对象
  public obj = {
    name:'李四'
  }
  constructor(private route:ActivatedRoute) {  //实例化模块

    this.msg = '这是另一种定义属性的方法'
    //去服务器请求数据 新闻类
     this.h = "<h2>这是新闻的数据</h2>"

     this.list = ['111','222','333'];
     this.list2 = ['数学','语文','英语'];
     this.list4 = [
       {
       'catename':'宝马',
       list:[
         {title:'宝马x1'},
         {title:'宝马x2'},
         {title:'宝马x3'},
         {title:'宝马x4'}
       ]
      },
      {
        'catename':'奥迪',
        list:[
          {title:'奥迪Q1'},
          {title:'奥迪Q2'},
          {title:'奥迪Q3'},
          {title:'奥迪Q4'}
        ]
       }
      ];
  }

  ngOnInit() {
    // 获取动态路由的传值
    this.route.params.subscribe(function(data){
        console.log(data.id);
    })
  }

}
