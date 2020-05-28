import React, { useState } from "react";
import ImageUploader from 'react-images-upload';

import "./ImageUpload.css";

const CreateTaskModal = () => {
    const [taskImage, setTaskImage] = useState<string | null | ArrayBuffer>(null);
console.log(taskImage);
    const handleImageChange = (files:any) => {
        if(files.length === 0){
            setTaskImage(null);
            return;
        }
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onloadend = () => {
            setTaskImage(reader.result);
        };
      }
  return (
    <div
      className="modal fade modal-right"
      id="exampleModal"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add New
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="form-group">
                <label>Details</label>
                <textarea className="form-control"></textarea>
              </div>
              <div className="form-group">
                <label>Points</label>
                <input type="number" className="form-control" placeholder="" />
              </div>
          
              <ImageUploader
                withIcon={false}
                buttonText='Choose an image'
                withPreview
                onChange={handleImageChange}
                singleImage={true}
                imgExtension={['.png']}
                maxFileSize={5242880}
            />

             </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-primary"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskModal;
