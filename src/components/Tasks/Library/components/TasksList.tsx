import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

import { Task } from "../../../../types";

const TasksList = (props: any) => {
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  useEffect(
    () => {
      setFilteredTasks(props.tasks);

      if (props.categoryId && props.typeId) {
        setFilteredTasks(
          props.tasks.filter(
            (task: any) =>
              "cat" + task.CategoryId === props.categoryId &&
              "type" + task.TypeId === props.typeId
          )
        );
      } else if (props.categoryId) {
        setFilteredTasks(
          props.tasks.filter(
            (task: any) => "cat" + task.CategoryId === props.categoryId
          )
        );
      } else if (props.typeId) {
        const x =  props.tasks.filter(
          (task: any) => "type" + task.TypeId === props.typeId
        )
        const y =  props.tasks.filter(
          (task: any) => "type" + task.TypeId !== props.typeId
        )
        setFilteredTasks(
          props.tasks.filter(
            (task: any) => "type" + task.TypeId === props.typeId
          )
        );
      }
    },
    // eslint-disable-next-line
    [props.tasks, props.categoryId, props.typeId]
  );

  return (
    <div className="row mb-4">
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task: any) => {
          return <TaskCard task={task} key={task.Id} />;
        })
      ) : (
        <h2>No Tasks Yet</h2>
      )}
    </div>
  );
};

export default TasksList;
