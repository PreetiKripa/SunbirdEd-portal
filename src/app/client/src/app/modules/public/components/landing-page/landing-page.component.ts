import { Component, OnInit, ViewChild } from '@angular/core';
import { LayoutService} from '@sunbird/shared';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';


// import { ElectronService } from './../../services';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  layoutConfiguration;
  fieldTextType: boolean;
  hrefPath = '/resources';

  @ViewChild('mycarousel', {static : true}) carousel: NgbCarousel;


  constructor(public layoutService: LayoutService ) { }

  ngOnInit() {
    this.layoutConfiguration = this.layoutService.initlayoutConfig();
  }
  // tslint:disable-next-line:member-ordering
  event_list = [
    {
      event: ' Event 1',
      img: 'assets/images/image1.jpeg'
  // tslint:disable-next-line:no-trailing-whitespace
  
    },
    {
      // tslint:disable-next-line:whitespace
      event:'Event 2',
      img: 'assets/images/image2.jpeg'
    },
    {
      // tslint:disable-next-line:whitespace
      event:'Event 3',
      img: 'assets/images/image3.jpeg'
    },
    {
      // tslint:disable-next-line:whitespace
      event:'Event 4',
      img: 'assets/images/image-4.jpeg'
    }
  // tslint:disable-next-line:semicolon
  ];
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  // doLogin() {
  //   this.electronService.get({ url: this.config.urlConFig.URLS.OFFLINE.LOGIN }).subscribe();
  // }
}
