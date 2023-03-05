import React from "react";

const AddProduct = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="section-block" id="basicform">
            <h3 className="section-title">Product Add</h3>
            <p>Use custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
          </div>
          <div className="card">
            <h5 className="card-header">Product Form</h5>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name" className="col-form-label">Product Name</label>
                  <input id="name" type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="name" className="col-form-label">Select Category</label>
                  <select className="form-control">
                    <option>Cat 1</option>
                    <option>Cat 2</option>
                    <option>Cat 3</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="price" className="col-form-label">Price</label>
                  <input id="price" type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="myFile" className="col-form-label">Photo Upload</label>
                  <input type="file" id="myFile" name="filename" className="form-control" />
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

export default AddProduct;
