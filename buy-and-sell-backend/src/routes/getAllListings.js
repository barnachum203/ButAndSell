import { fakeListings, fakeMyListings } from "./fake-data";

export const getAllListingsRoutes = {
  method: "GET",
  path: "/api/listings",
  handler: (req, h) => {
    return fakeListings;
  },
};
