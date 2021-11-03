import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

interface ContactList {
  icon: PrimeIcons;
  title: string;
  content: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
    #header {
      background-image: url('./../../../assets/images/header-background.jpg');
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
      background-size: cover;
    }
    .withSpacing {
      letter-spacing: 2px;
    }
    .textShadow {
      text-shadow: 2px 2px 5px black;
    }
    `
  ]
})
export class HeaderComponent {
  contactList: ContactList[] = [];
  
  ngOnInit(): void {
    this.contactList = [
      { icon: PrimeIcons.PHONE, title: 'Teléfono', content: '5536074161' },
      { icon: PrimeIcons.MAP_MARKER, title: 'Dirección', content: 'Ciudad de México' },
      { icon: PrimeIcons.ENVELOPE, title: 'Email', content: 'ahernandezh.dev@gmail.com' },
      { icon: PrimeIcons.GLOBE, title: 'Sitio Web', content: 'antonio.com' },
    ];
  }
}
