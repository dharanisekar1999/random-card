import { Component, OnInit ,Input } from '@angular/core';
import {faEnvelope,faMapMarkerAlt,faPhone,faDatabase,faPhoneAlt,faCalendarAlt,faBirthdayCake} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() user: any;
  
  faEnvelope=faEnvelope;
  faMapMarkerAlt=faMapMarkerAlt;
  faPhone=faPhone;
  faDatabase=faDatabase;
  faPhoneAlt=faPhoneAlt;
  faCalendarAlt=faCalendarAlt;
  faBirthdayCake=faBirthdayCake;
  constructor() { }

  ngOnInit(): void {
  }
 

}
