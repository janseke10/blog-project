import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { authenticated } from "../../../authenticate";
import { openDB } from "../../openDB";

export default authenticated(async function getPeople(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await openDB();
  const people = db.all(
    "SELECT id, email, first_name, middle_name, last_name FROM author"
  );
  console.log("ALL PEOPLE", people);
  people.then(function (result) {
    res.json(result); // "Some User token"
  });
});
