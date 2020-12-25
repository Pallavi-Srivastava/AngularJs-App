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
  nameError: string = "";

  ngOnInit(): void{
    this.title="Hello From Bridgelabz.";
  }

  onClick($event){
    console.log("Save Button is clicked",$event);
    window.open(this.url,"_blank");
  }

  onInput($event){
    console.log("Changed Event Occurred",$event.data);
    const nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName))
    {
      this.nameError="";
      return;
    }
    this.nameError="Invalid Name";
  }
}
