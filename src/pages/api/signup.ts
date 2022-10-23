import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";
import { openDB } from "../../openDB";

/* 
TODO: 
- check if email is in db / if email is valid
- controll password strength
- make middlename optional
- are names not just empty etc
*/
export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await openDB();

  if (req.method === "POST") {
    hash(req.body.password, 10, async function (err, hash) {
      // Store hash in your password DB.

      const statement = await db.prepare(
        "INSERT INTO author (first_name, middle_name, last_name, email, password) values (?,?,?,?,?)"
      );
      await statement.run(
        req.body.firstName,
        req.body.middleName,
        req.body.lastName,
        req.body.email,
        hash
      );
      statement.finalize();

      const person = db.all("SELECT * FROM author");
      person.then(function (result) {
        res.json(result);
      });
    });
  } else {
    res.status(405).json({ message: "we only support POST" });
  }
}
