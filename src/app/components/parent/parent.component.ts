import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public msg:any = '这个是父组件的msg';
  public name = '张三';
  constructor() { }

  ngOnInit() {
  }

  run(){
    alert('这是父组件的run方法')
  }

   getDataFromChild(childData){ /**父组件 */
      alert(childData);
   } 
}
