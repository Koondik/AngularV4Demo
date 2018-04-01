import { Component, OnInit , ViewChild} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  /**定义子组件 注意括号里的东西和 #cart对应起来 */
  @ViewChild('cart') cart; 
  constructor() { }

  ngOnInit() {
  }
  getChildData(){
    //执行子组件的方法
    this.cart.run()
    //获取子组件的数据
    console.log(this.cart.msg);
    //父组件修改子组件中的数据
    this.cart.msg = '父组件修改子组件中的数据'
  }
}
