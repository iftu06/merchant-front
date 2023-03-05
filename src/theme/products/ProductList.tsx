import React from "react";
import CustomModal from "../common/custom-modal";
import AddProduct from "./AddProduct";

const ProductList = () => {
  return (
    <React.Fragment>

      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="page-header">
            <div className="row">
              <div className="col-md-8">

                <h2 className="pageheader-title">Product List </h2>
                <p className="pageheader-text">Nulla euismod urna eros, sit amet scelerisque torton lectus vel mauris facilisis faucibus at enim quis massa lobortis rutrum.</p>
              </div>
              <div className="col-md-4">
                <CustomModal
                  render={() => <AddProduct />}
                  modalHeader="Add Product"
                  show={false}
                  hideModal={true}
                ></CustomModal>

                <button className="btn btn-rounded btn-primary">Add Product</button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="page-breadcrumb">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Product</a></li>
                      <li className="breadcrumb-item active" aria-current="page">List</li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="col-md-4">

                <input className="form-control" type="text" placeholder="Product Name Search.." />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="product-thumbnail">
                <div className="product-img-head">
                  <div className="product-img">
                    <img src="images/eco-product-img-1.png" alt="" className="img-fluid" /></div>
                  <div className="ribbons"></div>
                  <div className="ribbons-text">New</div>
                  <div className=""><a href="#" className="product-wishlist-btn"><i className="fas fa-heart"></i></a></div>
                </div>
                <div className="product-content">
                  <div className="product-content-head">
                    <h3 className="product-title">T-Shirt Product Title</h3>
                    <div className="product-rating d-inline-block">
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                    </div>
                    <div className="product-price">$49.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="product-thumbnail">
                <div className="product-img-head">
                  <div className="product-img">
                    <img src="images/eco-product-img-2.png" alt="" className="img-fluid" /></div>
                  <div className="ribbons bg-danger"></div>
                  <div className="ribbons-text">Sold</div>
                  <div className=""><a href="#" className="product-wishlist-btn"><i className="fas fa-heart"></i></a></div>
                </div>
                <div className="product-content">
                  <div className="product-content-head">
                    <h3 className="product-title">T-Shirt Product Title</h3>
                    <div className="product-rating d-inline-block">
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                    </div>
                    <div className="product-price">$49.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="product-thumbnail">
                <div className="product-img-head">
                  <div className="product-img">
                    <img src="images/eco-product-img-3.png" alt="" className="img-fluid" /></div>
                  <div className="ribbons bg-brand"></div>
                  <div className="ribbons-text">Offer</div>
                  <div className=""><a href="#" className="product-wishlist-btn active"><i className="fas fa-heart"></i></a></div>
                </div>
                <div className="product-content">
                  <div className="product-content-head">
                    <h3 className="product-title">T-Shirt Product Title</h3>
                    <div className="product-rating d-inline-block">
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                    </div>
                    <div className="product-price">$49.00
                      <del className="product-del">$69.00</del>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="product-thumbnail">
                <div className="product-img-head">
                  <div className="product-img">
                    <img src="images/eco-product-img-4.png" alt="" className="img-fluid" /></div>
                  <div className=""><a href="#" className="product-wishlist-btn"><i className="fas fa-heart"></i></a></div>
                </div>
                <div className="product-content">
                  <div className="product-content-head">
                    <h3 className="product-title">T-Shirt Product Title</h3>
                    <div className="product-rating d-inline-block">
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                    </div>
                    <div className="product-price">$49.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="product-thumbnail">
                <div className="product-img-head">
                  <div className="product-img">
                    <img src="images/eco-product-img-3.png" alt="" className="img-fluid" /></div>
                  <div className=""><a href="#" className="product-wishlist-btn"><i className="fas fa-heart"></i></a></div>
                </div>
                <div className="product-content">
                  <div className="product-content-head">
                    <h3 className="product-title">T-Shirt Product Title</h3>
                    <div className="product-rating d-inline-block">
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                    </div>
                    <div className="product-price">$49.00
                      <del className="product-del">$69.00</del>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="product-thumbnail">
                <div className="product-img-head">
                  <div className="product-img">
                    <img src="images/eco-product-img-2.png" alt="" className="img-fluid" /></div>
                  <div className=""><a href="#" className="product-wishlist-btn"><i className="fas fa-heart"></i></a></div>
                </div>
                <div className="product-content">
                  <div className="product-content-head">
                    <h3 className="product-title">T-Shirt Product Title</h3>
                    <div className="product-rating d-inline-block">
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                    </div>
                    <div className="product-price">$49.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="product-thumbnail">
                <div className="product-img-head">
                  <div className="product-img">
                    <img src="images/eco-product-img-1.png" alt="" className="img-fluid" /></div>
                  <div className=""><a href="#" className="product-wishlist-btn"><i className="fas fa-heart"></i></a></div>
                </div>
                <div className="product-content">
                  <div className="product-content-head">
                    <h3 className="product-title">T-Shirt Product Title</h3>
                    <div className="product-rating d-inline-block">
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                    </div>
                    <div className="product-price">$49.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="product-thumbnail">
                <div className="product-img-head">
                  <div className="product-img">
                    <img src="images/eco-product-img-2.png" alt="" className="img-fluid" /></div>
                  <div className=""><a href="#" className="product-wishlist-btn"><i className="fas fa-heart"></i></a></div>
                </div>
                <div className="product-content">
                  <div className="product-content-head">
                    <h3 className="product-title">T-Shirt Product Title</h3>
                    <div className="product-rating d-inline-block">
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                    </div>
                    <div className="product-price">$49.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="product-thumbnail">
                <div className="product-img-head">
                  <div className="product-img">
                    <img src="images/eco-product-img-4.png" alt="" className="img-fluid" /></div>
                  <div className=""><a href="#" className="product-wishlist-btn"><i className="fas fa-heart"></i></a></div>
                </div>
                <div className="product-content">
                  <div className="product-content-head">
                    <h3 className="product-title">T-Shirt Product Title</h3>
                    <div className="product-rating d-inline-block">
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                    </div>
                    <div className="product-price">$49.00
                      <del className="product-del">$69.00</del>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item active"><a className="page-link " href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductList;
