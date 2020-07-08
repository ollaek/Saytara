import Base from "./base";

import {} from "../types";

const tasksApi = {
  Get: () => Base.get("api/Tasks/Get").then(res => res.data),
  Post: (data: any) => Base.post("api/Tasks/Post", data).then(res => res.data)
};

export { tasksApi };
