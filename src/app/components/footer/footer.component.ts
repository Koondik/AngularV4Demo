import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() msg:string;
  
  @Input() run; /* 接收父组件传过来的run方法 */

  @Input() getDataFromChild;/* 接收父组件传过来的run方法 */
  
  public msgInfo ='这是子组件的数据';
  constructor() { }

  ngOnInit() {
  }

  sendParent(){ /* 子组件自己的方法 */
    this.getDataFromChild(this.msgInfo); /* 子组件调用父组件的方法 */
  }

}
