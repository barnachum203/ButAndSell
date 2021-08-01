import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-new-listings-page',
  templateUrl: './new-listings-page.component.html',
  styleUrls: ['./new-listings-page.component.css'],
})
export class NewListingsPageComponent implements OnInit {
  constructor(
    private router: Router,
    private listingsService: ListingsService
  ) {}

  ngOnInit(): void {}

  onSubmit(event: any): void {
    this.listingsService.createListing(event.name, event.description, event.price)
      .subscribe(() => {
        this.router.navigateByUrl('/my-listings');
      });
    
  }
}
