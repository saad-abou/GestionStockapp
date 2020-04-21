import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientsService} from '../../../services/clients.service';
import {Client} from '../../../models/Client.model';

@Component({
  selector: 'app-entreprise-details',
  templateUrl: './entreprise-details.component.html',
  styleUrls: ['./entreprise-details.component.scss']
})
export class EntrepriseDetailsComponent implements OnInit {

  id: number;
  client: Client;

  constructor(private route: ActivatedRoute, private router: Router,
              private clientService: ClientsService) { }

  ngOnInit(): void {
    this.client = new Client();
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id)
      .subscribe(data => {
        console.log(data);
        this.client = data;
      }, error => console.log(error));
  }
list(){
    this.router.navigate(['clients/entreprise']);
  }
 }
