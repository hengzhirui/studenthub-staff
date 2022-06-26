import { Component, OnInit } from '@angular/core';
import { NavController, Platform} from '@ionic/angular';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.page.html',
  styleUrls: ['./report-list.page.scss'],
})
export class ReportListPage implements OnInit {

  public borderLimit = false;

  constructor(
    private navCtrl: NavController,
    public platform: Platform,
  ) { }

  ngOnInit() {
    window.analytics.page('Report List Page');
  }

  logScrolling(e) {
    this.borderLimit = (e.detail.scrollTop > 20);
  }
}
