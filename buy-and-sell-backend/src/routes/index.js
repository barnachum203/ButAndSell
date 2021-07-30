import { getAllListingsRoutes } from "./getAllListings";
import { getListingRoute } from "./getListing"
import { addViewToListingRoute } from "./addViewToListing"
import { getUserListingsRoute } from "./getUserListings"
import { createNewListingRoute } from "./createNewListing"
import { updateListingRoute } from "./updateListing"
import { deleteListingRoute } from "./deleteListing"


export default[
    getAllListingsRoutes,
    getListingRoute,
    addViewToListingRoute,
    getUserListingsRoute,
    createNewListingRoute,
    updateListingRoute,
    deleteListingRoute
];
