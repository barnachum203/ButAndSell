import { getAllListingsRoutes } from "./getAllListings";
import { getListingRoute } from "./getListing"
import { addViewToListingRoute } from "./addViewToListing"
import { getUserListingsRoute } from "./getUserListings"
import { createNewListingRoute } from "./createNewListing"


export default[
    getAllListingsRoutes,
    getListingRoute,
    addViewToListingRoute,
    getUserListingsRoute,
    createNewListingRoute,
];
