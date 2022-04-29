import jwt, { JwtPayload } from "jsonwebtoken";
import { API } from "@mattplays/aniapi";

function animamushi(token: string) {
  return new API(token);
}
export const token = (): string => {
  const secret = process?.env._jwt ?? "";
  return jwt?.sign({ foo: "bar" }, secret);
};

export default animamushi;
