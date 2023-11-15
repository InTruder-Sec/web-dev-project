import jwt from "jsonwebtoken";

interface JwtPayload {
  userId: string;
  email: string;
  iat: number;
  exp: number;
}

const userSession = (authToken: string) => {
  try {
    const jwtPayload = jwt.verify(
      authToken,
      process.env.JWT_SECRET || ""
    ) as JwtPayload;
    const userId: string = jwtPayload.userId;
    return { isvalid: true, userId: userId };
  } catch (error) {
    console.log(error);
    return { isvalid: false, userId: null };
  }
};

export default userSession;
