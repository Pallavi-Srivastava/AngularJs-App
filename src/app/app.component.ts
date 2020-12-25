import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl="../assets/Bridgelabz.png";
  url="https://www.w3schools.com/";
  userName: string = "";

  ngOnInit(): void{
    this.title="Hello From Bridgelabz.";
  }

  OnClick($event){
    console.log("Save Button is clicked",$event);
    window.open(this.url,"_blank");
  }
}
