import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListings, fakeMyListings } from '../fake-data';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css'],
})
export class EditListingPageComponent implements OnInit {
  listing: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private listingsSerivice: ListingsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || 'null';
    this.listingsSerivice
      .getListingsById(id)
      .subscribe((listings) => (this.listing = listings));
  }

  onSubmit(event: any): void {
    this.listingsSerivice
      .editListing(this.listing.id, event.name, event.description, event.price)
      .subscribe(() => {
        this.router.navigateByUrl('/my-listings');
      });
  }
}
