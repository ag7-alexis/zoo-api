import jwt from "jsonwebtoken";

export const authentificateJWT = (req, res, next) => {
    const accessTokenSecret = process.env.SECRET;
    const cookieToken = req.cookies.access_token;
    console.log(req.cookies);
    console.log(cookieToken);

    if (cookieToken) {
        const token = cookieToken.split(' ')[1];

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