import { Injectable } from '@angular/core';
import { Part } from '../../shared/models/Parts';
 
@Injectable({
  providedIn: 'root'
})
export class PartsService {

  constructor() { }

  getAll():Part[]{
    return[
      {
        id:1,
        name:'Conti KRYPTOTAL',
        price:100,
        favorite:false,
        stars:5.0,
        imgUrl:'/assets/images/conti.jpg',
      },
      {
        id:2,
        name:'Conti GATORSKIN',
        price:125,
        favorite:false,
        stars:4.5,
        imgUrl:'/assets/images/continental-gatorskin.jpg',
      },
      {
        id:3,
        name:'Conti TERRA-TRAIL',
        price:125,
        favorite:false,
        stars:4.0,
        imgUrl:'/assets/images/continental-terra-trail.jpg',
      },
      {
        id:4,
        name:'Shimano Deore',
        price:450,
        favorite:false,
        stars:4.5,
        imgUrl:'/assets/images/shimano-derailleur.jpeg',
      },
      {
        id:5,
        name:'Simano 105',
        price:600,
        favorite:false,
        stars:5.0,
        imgUrl:'/assets/images/shimano-r7000-105-rear-derailleur-r7000-ss-black__70977.jpg',
      },
      {
        id:6,
        name:'Versus Tire',
        price:100,
        favorite:false,
        stars:3.0,
        imgUrl:'/assets/images/teal_tire.webp',
      }
    ]
  }
}

      
      
      
