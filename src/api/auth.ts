import Base from "./base";

import {} from "../types";

const authApi = {
  SignIn: (user: any) =>
    Base
      .post("account/AffiliateLogin", {
        Email: user.Email,
        Password: user.Password
      })
      .then(res => {
        return res.data;
      })
};

export { authApi };
