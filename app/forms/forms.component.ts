import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  title="";
  fname="";
  lname="";
  email="";
  conemail="";
  phone="";
  city = [
    {name:"Delhi NCR"},
    {name:"Mumbai"},
    {name:"Kolkata"},
    {name:"Bangalore"},
    {name:"Chennai"},
    {name:"Hyderabad"},
    {name:"Pune"},
    {name:"Ahmedabad"},
    {name:"Surat"},
    {name:"Jaipur"},
    {name:"Kozhikode"},
    {name:"Kochi"},
    {name:"Kanpur"},
    {name:"Nagpur"},
    {name:"Coimbatore"},
    {name:"Thiruvananthapuram"},
    {name:"Visakhapatnam"},
    {name:"Nashik"},
    {name:"Madurai"},
    {name:"Raipur"},
    {name:"Jodhpur"},
    {name:"Salem"},
  ];

  state = [
    {namee:"Delhi"},
    {namee:"Haryana"},
    {namee:"Uttar Pradesh"},
    {namee:"Rajasthan"},
    {namee:"Maharastra"},
    {namee:"West Bengal"},
    {namee:"Karnataka"},
    {namee:"Tamil Nadu"},
    {namee:"Telangana"},
    {namee:"Gujarat"},
    {namee:"Kerala"},
    {namee:"Andhra Pradesh"},
    {namee:"Chattisgarh"},
  ];
  country="India";
  vtype="";
  passen="";
  inst="";
  brnd="";
  mdl="";
  req="";
  val="red";
submit(frm:any){

}
log(F1:any){

}
accept()
{
console.log("Submitted !")
}
  constructor() { }

  ngOnInit(): void {
  }

}
