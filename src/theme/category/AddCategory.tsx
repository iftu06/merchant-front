import React from "react";

const AddCategory = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="section-block" id="basicform">
            <h3 className="section-title">Category Add</h3>
            <p>Use custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
          </div>
          <div className="card">
            <h5 className="card-header">Category Form</h5>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name" className="col-form-label">Category Name</label>
                  <input id="name" type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="Description" className="col-form-label">Description</label>
                  <textarea className="form-control" id="Description" rows={3}></textarea>
                </div>

                <div className="card-footer text-right">
                  <button className="btn btn-rounded btn-success">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
};

export default AddCategory;
