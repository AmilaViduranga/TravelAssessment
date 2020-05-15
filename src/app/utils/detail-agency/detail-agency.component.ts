import { Component, OnInit, Input } from '@angular/core';
import { AgencyModel } from '../model/agency.model';

@Component({
  selector: 'app-detail-agency',
  templateUrl: './detail-agency.component.html',
  styleUrls: ['./detail-agency.component.css']
})
export class DetailAgencyComponent implements OnInit {

  @Input() agencyInfo: AgencyModel = new AgencyModel();

  constructor() { }

  ngOnInit() {
  }

}
