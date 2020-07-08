import Base from "./base";

import {} from "../types";

const tasksTypesApi = {
  Get: () => Base.get("api/Tasks/GetTypes").then(res => res.data)
};

export { tasksTypesApi };