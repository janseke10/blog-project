import { verify } from "jsonwebtoken";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { secret } from "./secret";

export const authenticated =
  (fn: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
    verify(req.cookies.auth!, secret, async function (err, decoded) {
      if (!err && decoded) {
        return await fn(req, res);
      }
      res.status(401).json({ message: "sorry, you're not authenticated" });
    });
  };
