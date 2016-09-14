import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-friend',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit{
	selectedValue: string;
	title: string;
	componentName: string = 'CardComponent';
	 @Input() friend;
     na:boolean;
	 em:boolean;
	 loc:boolean;
	 pass:boolean;
mouseover:boolean;
ngOnInit() { this.selectPerson('name'); }
selectPerson(label){
	console.log("here"+label);
     if(label === 'name') {
	 this.selectedValue = this.friend.name.title + " "+ this.friend.name.first+" "+this.friend.name.last;
		this.na= true; 
	 this.title= "Hi, My name is";
	 }
	else if(label === 'email') {
	 this.selectedValue = this.friend.email;
		this.em= true; 
	 this.title= "My email address is";
	 }
	else if(label === 'location') {
	 this.selectedValue = this.friend.location.street + " "+ this.friend.location.city+" "+this.friend.location.state;
		this.loc= true; 
	 this.title= "My address is";
	 }
	else if(label === 'pass') {
	 this.selectedValue = this.friend.login.password;
		this.pass= true; 
	 this.title= "My password is";
	 }
	else if(label === 'phone') {
	 this.selectedValue = this.friend.phone;
		this.mouseover= true; 
	 this.title= "My phone number is";
	 }
	else if(label === 'birthday') {
	 this.selectedValue = this.friend.dob;
		this.bday= true; 
	 this.title= "My birthday is";
	 }
  }
}
