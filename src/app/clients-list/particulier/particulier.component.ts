import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {ClientsService} from '../../services/clients.service';
import {Client} from '../../models/Client.model';

@Component({
  selector: 'app-particulier',
  templateUrl: './particulier.component.html',
  styleUrls: ['./particulier.component.scss']
})
export class ParticulierComponent implements OnInit {
  clients: Observable<Client[]>;

  constructor(private cleintsServices: ClientsService,
              private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.clients = this.cleintsServices.getParticulierList();
  }

  deleteClient(id: number) {
    this.cleintsServices.deleteClient(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  clientDetails(id: number) {
    this.router.navigate(['clients/particulier', id]);
  }


}
