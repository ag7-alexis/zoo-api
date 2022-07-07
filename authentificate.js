import jwt from "jsonwebtoken";

export const authentificateJWT = (req, res, next) => {
    const accessTokenSecret = process.env.SECRET;
    const token = req.cookies.access_token;

    if (token) {
        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};