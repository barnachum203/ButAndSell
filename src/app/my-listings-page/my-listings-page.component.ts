import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css'],
})
export class MyListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor(
    private listingsService: ListingsService
  ) {}

  ngOnInit(): void {

    // const id;

    this.listingsService.getListingsForUser()
    .subscribe(listings => {
      this.listings = listings;
    })
  }

  onDeleteClicked(ListingId: string): void{

    this.listingsService.deleteListing(ListingId).subscribe(()=>{
      this.listings = this.listings.filter(
        listing => listing.id != ListingId
      )
    })
  }
}
