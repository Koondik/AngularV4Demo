import { Component, OnInit } from '@angular/core';
import { Http , Jsonp , Headers} from '@angular/http'; /*引入数据请求模块*/
@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {

  public list:any[];  

  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http:Http,private jsonp:Jsonp) { }

  ngOnInit() {
  }
  requestData(){
    var _that = this;
    var url = `http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1`
    this.http.get(url).subscribe(function(data){
      // console.log(JSON.parse(data['_body']));
      _that.list = JSON.parse(data['_body'])['result'];
    },function(error){
      console.log(error);
      
    })
  }
  requestJsonpData(){ // jsonp 必须在url加回调 &callback=JSONP_CALLBACK
    var _that = this;
    var url = `http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSONP_CALLBACK`
    this.jsonp.get(url).subscribe(function(data){
      // console.log(JSON.parse(data['_body']));
      _that.list = data['_body']['result'];
    },function(error){
      console.log(error);
      
    })
  }
  postData(){
    /*
    1.在使用post的组件中引入数据请求模块Http,Headers 
      import { Http , Headers} from '@angular/http'; 
    2.实例化 Headers
      private headers = new Headers({'Content-Type': 'application/json'});
    3.post提交数据
      */
    var url = 'http://127.0.0.1:3000/dologin'
    this.http.post(
      url,
      JSON.stringify({username:'张三'}),
      {headers:this.headers}
    ).subscribe(function(data){
      console.log(data);
      
    },
    function(error){
      console.log(error);
      
    })
  }
}
