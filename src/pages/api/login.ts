import { NextApiRequest, NextApiResponse } from "next";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { secret } from "../../../secret";
import cookie from "cookie";
import { openDB } from "../../openDB";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const db = await openDB();

  if (req.method === "POST") {
    const person = await db.get("SELECT * FROM author where email = ?", [
      req.body.email,
    ]);
    //check if person is found
    compare(req.body.password, person.password, function (err, result) {
      if (!err && result) {
        const claims = { sub: person.author_id, myPersonEmail: person.email };
        const jwt = sign(claims, secret, {
          expiresIn: "1h",
        });
        res.setHeader(
          "Set-Cookie",
          cookie.serialize("auth", jwt, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 3600,
            path: "/",
          })
        );
        res.json({ message: "Welcome back to the app!" });
      } else {
        res.json({ message: "Oops, something went wong!" });
      }
    });
  } else {
    res.status(405).json({ message: "we only support POST" });
  }
}
