import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() msg:string;/* 通过Input 接收父组件传过来的msg */
  @Input() name:string;
   
  //EventEmitter实现子组件给父组件传值
  @Output() toparent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  requestData(){
      // 调用父组件的方法获取数据
      this.toparent.emit('这是子组件的值');
  }
}
