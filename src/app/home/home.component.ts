import { Component, OnInit } from '@angular/core';
import {PartsService} from '../services/parts/parts.service'
import { Part } from '../shared/models/Parts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  parts:Part[] = [];
  constructor(private partService:PartsService, private route:ActivatedRoute) {}

  ngOnInit(): void{

    this.route.params.subscribe(params =>{
      if(params['searchTerm'])
      this.parts = this.partService.getAll().filter(part=>part.name.toLowerCase().includes(params['searchTerm'].toLowerCase()))
      else
      this.parts = this.partService.getAll();
    })

    this.parts = this.partService.getAll();
  }
}
