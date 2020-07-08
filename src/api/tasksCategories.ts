import Base from "./base";

import {} from "../types";

const tasksCategoriesApi = {
  Get: () => Base.get("api/Tasks/GetCategories").then(res => res.data)
};

export { tasksCategoriesApi };