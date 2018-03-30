import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  public username:any='';

  public list = [];

  //public storage = new StorageService(); /* 方法一：引入和使用服务（官方不推荐） */
  //private storage:StorageService 依赖注入服务
  constructor(private storage:StorageService) {  // 官方推荐注入服务的方法
  //  this.storage.setItem('username','张三');
  //  alert(this.storage.getItem('username'));
  }

  ngOnInit() { //组件初始化时直接运行
      // 每次刷新获取LS中todolistd的值
      var todolist = this.storage.getItem('todolist');
      if(todolist){
        this.list = todolist
      }
  }
  addData(e){
   
    // alert(this.username);//双向数据绑定 可以获取文本框的值
    if(e.keyCode == 13){
      var obj = {  //每次增加的一个对象数据
        username:this.username,
        status:1
      }
      //1.从LS获取storage获取 todolist的数据
      var todolist = this.storage.getItem('todolist')
      if(todolist){
        //2.如果有数据，拿到这个数据后把新数据拼接，重新写入
         todolist.push(obj)
         this.storage.setItem('todolist',todolist);
      }else{
        //3.如果没有，直接给LS写入数据
        var arr = [];
        arr.push(obj);
        this.storage.setItem('todolist',arr);
      }
    
      this.list.push(obj); 
      console.log(this.list);
    
      this.username = '';  
    }
  }
  deleteData(key){
    this.list.splice(key,1); //删除数组的数据
    this.storage.setItem('todolist',this.list);
    
  }
  changeData(key,status){ //改变状态
    this.list[key].status = status;

    this.storage.setItem('todolist',this.list);
  }
}
