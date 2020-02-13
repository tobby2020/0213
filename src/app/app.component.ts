import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 message ='text';
 account ='bbb';
 clickHandlar(){
   alert("觸發事件")
 }
 account3='111';
 clickHandlar2(){
  alert(this.account3);
}
}
