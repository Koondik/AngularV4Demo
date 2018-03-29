import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public msg: any;
  public username: any;
  public flag: any;
  public search: any;
  constructor() {
    this.msg = '这是个首页组件';
    this.username = '张三';
    this.flag = true;
    this.search = '搜索的内容';
  }


  ngOnInit() {
  }

  getMsg() { //自定义方法
    //获取属性的值
    alert(this.msg);
  }
  setName() {
    //改变username的值
    this.username = '李四---改变后的值';
  }
  keyupFn(e) { // e为事件对象，由dom中$event传入
    console.log('触发键盘', e);
    if (e.keyCode == '13') {
      console.log('按回车了！！');

    }

  }
  run(e) {
    console.log(e);

  }
  getSearch() {
    alert(this.search);
  }

}
