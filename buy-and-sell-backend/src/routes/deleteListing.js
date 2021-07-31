import { Boom } from "@hapi/boom";
import { db } from "../database";
import * as admin from "firebase-admin";

export const deleteListingRoute = {
  method: "DELETE",
  path: "/api/listings/{id}",
  handler: async (req, h) => {
    const  {id}  = req.params;
    const token = req.headers.authtoken;
    const user = await admin.auth().verifyIdToken(token);
    const userId = user.user_id;

    if (user.user_id !== userId)
    throw Boom.unauthorized('Users can only delete their own listings.')

    await db.query(`DELETE FROM listings WHERE id=? AND user_id=?`, [id, userId]);
    return {message: 'Success!'};
  },
};
