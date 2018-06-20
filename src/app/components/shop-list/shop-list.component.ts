import { Component, OnInit } from '@angular/core';
// ActivatedRoute 可接收动态传值也可接收get传值
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    // this.route.params /**获取动态路由 */
    // this.route.queryParams  /**获取get传值 */
    console.log(this.route.queryParams)
    this.route.queryParams.subscribe(function(data){
      console.log(data)
    })
  }

}
