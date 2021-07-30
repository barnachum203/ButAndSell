import { db } from "../database";

export const deleteListingRoute = {
  method: "DELETE",
  path: "/api/listings/{id}",
  handler: async (req, h) => {
    const { id } = req.params;

    const { results } = await db.query(`DELETE FROM listings WHERE id=?`, [id]);

    return {message: 'Success!'};
  },
};
