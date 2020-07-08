import React, { useState, useEffect } from "react";
import ImageUploader from "react-images-upload";
import { Formik } from "formik";
import * as Yup from "yup";

import { useTaskState } from "../../Hook";

const Form = (props: any) => {
  const {
    getTasksCategories,
    getTasksTypes,
    tasksCategories,
    tasksTypes,
    postTask,
    success,
    resetState
  } = useTaskState();
  const [taskImage, setTaskImage] = useState<string | null | ArrayBuffer>(null);

  useEffect(
    () => {
      resetState();
      getTasksCategories();
      getTasksTypes();
    },
    // eslint-disable-next-line
    []
  );

  useEffect(
    () => {
      if (success === "Y") {
        props.history.push("/TasksLibrary");
        resetState();
      }
    },
    // eslint-disable-next-line
    [success]
  );

  const handleImageChange = (files: any) => {
    if (files.length === 0) {
      setTaskImage(null);
      return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      setTaskImage(reader.result);
    };
  };

  const validationSchema = Yup.object().shape({
    Title: Yup.string().required("Please enter a Title"),
    Description: Yup.string().required("Please enter a Description"),
    Points: Yup.string().required("Please enter Points"),
    Category: Yup.string().required("Please select Category"),
    Type: Yup.string().required("Please select Type")
  });

  const FormInitialValues = {
    Title: "",
    Description: "",
    Points: "",
    Category: "",
    Type: ""
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="mb-4">Task Definition</h5>
        <Formik
          initialValues={FormInitialValues}
          onSubmit={values => {
            const task = {
              Title: values.Title,
              Description: values.Description,
              Image: taskImage,
              Points: values.Points,
              CategoryId: values.Category,
              TypeId: values.Type
            };
            if(taskImage){
              postTask(task);
            }
            
          }}
          validationSchema={validationSchema}
        >
          {props => {
            const {
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              errors,
              touched
            } = props;
            return (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label>Task Title</label>
                  <input
                    className="form-control"
                    name="Title"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Title}
                  />
                  <div>{touched.Title && errors.Title ? errors.Title : null} </div>
                </div>
                <div className="form-group">
                  <label>Body Text</label>
                  <textarea
                    className="form-control"
                    name="Description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Description}
                  ></textarea>
                  <div>{touched.Description && errors.Description ? errors.Description : null} </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label>Points</label>
                    <input
                      type="Points"
                      className="form-control"
                      placeholder=""
                      name="Points"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.Points}
                      min="1"
                    />
                    <div>{touched.Points && errors.Points ? errors.Points : null} </div>
                  </div>
                  <div className="form-group col-md-4">
                    <label>Category</label>
                    <select
                      id="Category"
                      className="form-control"
                      name="Category"
                      value={values.Category}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="0">Choose...</option>
                      {tasksCategories &&
                        tasksCategories.map(category => {
                          return (
                            <option value={category.Id} key={category.Id}>
                              {category.Category}
                            </option>
                          );
                        })}
                    </select>
                    <div>{touched.Category && errors.Category ? errors.Category : null} </div>
                  </div>
                  <div className="form-group col-md-4">
                    <label>Type</label>
                    <select
                      id="Type"
                      className="form-control"
                      name="Type"
                      value={values.Type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="0">Choose...</option>
                      {tasksTypes &&
                        tasksTypes.map(type => {
                          return (
                            <option value={type.Id} key={type.Id}>
                              {type.Type}
                            </option>
                          );
                        })}
                    </select>
                    <div>{touched.Type && errors.Type ? errors.Type : null} </div>
                  </div>
                </div>
                <ImageUploader
                  withIcon={false}
                  buttonText="Task Image"
                  withPreview
                  onChange={handleImageChange}
                  singleImage={true}
                  imgExtension={[".png"]}
                  maxFileSize={5242880}
                />

                <button
                  type="submit"
                  className="btn btn-lg btn-primary d-block mt-3 float-right"
                  disabled={!taskImage}
                >
                  <i
                    className="iconsminds-disk"
                    style={{ marginRight: "10px" }}
                  ></i>
                  Save
                </button>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Form;
