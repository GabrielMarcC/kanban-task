import { default as nextAuthMiddleware } from "next-auth/middleware";

export const config = {
  matcher: ["/"],
};
export default nextAuthMiddleware;
