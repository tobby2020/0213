import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t0006',
  templateUrl: './t0006.component.html',
  styleUrls: ['./t0006.component.css']
})
export class T0006Component implements OnInit {

account ='';
onBlurMethod(){
  if(this.account.length === 0 ){
    this.account='必須輸入資料';
    document.getElementById('account').focus();
    return;
  }
  if(this.account.length !==12 || !(/[0-9]/.test(this.account))){
    this.account = '12字.限數字';
    document.getElementById('account').focus();
    console.log('123'); // 除錯
    return;
  }
  this.account=this.account+'成功';
}








  constructor() { }

  ngOnInit(): void {
  }

}
