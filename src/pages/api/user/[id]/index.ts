import { NextApiRequest, NextApiResponse } from "next";
import { openDB } from "../../../../openDB";

export default async function getUserById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await openDB();
  const person = db.get(
    "SELECT id, email, firstName FROM author where id = ?",
    [req.query.id]
  );
  person.then(function (result) {
    res.json(result); // "Some User token"
  });

  if (req.method === "PUT") {
    const statement = await db.prepare(
      "UPDATE author SET firstName = ?, middleName = ?, lastName = ?, email = ? where id = ?"
    );
    await statement.run(
      req.body.firstName,
      req.body.middleName,
      req.body.lastName,
      req.body.email,
      req.query.id
    );
    statement.finalize();
  }

  const person2 = db.get(
    "SELECT id, email, firstName FROM author where id = ?",
    [req.query.id]
  );
  person2.then(function (result) {
    res.json(result); // "Some User token"
  });
}
