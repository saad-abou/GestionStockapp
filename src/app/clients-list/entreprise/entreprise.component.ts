import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Client} from '../../models/Client.model';
import {ClientsService} from '../../services/clients.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.scss']
})
export class EntrepriseComponent implements OnInit {

  clients: Observable<Client[]>;

  constructor(private cleintsServices: ClientsService,
              private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.clients = this.cleintsServices.getEntrepriseList();
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
    this.router.navigate(['clients/entreprise', id]);
  }

  updateclient(id: number) {
    this.router.navigate(['update', id]);
  }
}
