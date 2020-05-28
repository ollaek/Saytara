import authBase from "./authBase";

import {} from "../types";

const authApi = {
  SignIn: (user: any) =>
    authBase
      .post("account/AffiliateLogin", {
        Email: user.Email,
        Password: user.Password
      })
      .then(res => {
        return res.data;
      })
};

export { authApi };
