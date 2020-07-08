import React, { useEffect } from "react";

import { useTaskState } from "../../Hook";

const Filter = (props: any) => {
  const {
    getTasksCategories,
    getTasksTypes,
    tasksCategories,
    tasksTypes
  } = useTaskState();

  useEffect(
    () => {
      getTasksCategories();
      getTasksTypes();
    },
    // eslint-disable-next-line
    []
  );
  return (
    <div className="app-menu">
      <div className="p-4 h-100">
        <div className="scroll">
          {tasksCategories && tasksCategories.length > 0 && (
            <>
              <h4>Task Categories</h4>
              <ul className="list-unstyled mb-5" style={{ marginLeft: "10px" }}>
                {tasksCategories.map(category => {
                  return (
                    <li key={category.Id}>
                      <div className="custom-control custom-checkbox mb-2">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id={"cat" + category.Id.toString()}
                          value={"cat" + category.Id}
                          onChange={event => {
                            props.categoryId !== event.target.value
                              ? props.setCategory(event.target.value)
                              : props.setCategory(null);
                          }}
                          checked={props.categoryId === "cat" + category.Id}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor={"cat" + category.Id.toString()}
                        >
                          {category.Category}
                        </label>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
          <div className="separator mb-5"></div>
          {tasksTypes && tasksTypes.length > 0 && (
            <>
              <h4>Task Types</h4>
              <ul className="list-unstyled mb-5" style={{ marginLeft: "10px" }}>
                {tasksTypes.map(type => {
                  return (
                    <li key={type.Id}>
                      <div className="custom-control custom-checkbox mb-2">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id={"type" + type.Id.toString()}
                          value={"type" + type.Id}
                          onChange={event => {
                            props.typeId !== event.target.value
                              ? props.setType(event.target.value)
                              : props.setType(null);
                          }}
                          checked={props.typeId === "type" + type.Id}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor={"type" + type.Id.toString()}
                        >
                          {type.Type}
                        </label>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </>
          )}

          <div className="separator mb-5"></div>

          <h4>Sort By</h4>
          <div className="mb-4" style={{ marginLeft: "10px" }}>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio1"
                name="customRadio"
                className="custom-control-input"
              />
              <label className="custom-control-label" htmlFor="customRadio1">
                Toggle this custom radio
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio2"
                name="customRadio"
                className="custom-control-input"
              />
              <label className="custom-control-label" htmlFor="customRadio2">
                Or toggle this other custom radio
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
