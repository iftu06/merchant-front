import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomModal from "../common/custom-modal";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { Category } from "../category/category";
import FormikControl from "../formik-element/FormikControl";
import { Button } from "react-bootstrap";
import AddCategory from "../category/AddCategory";
import { DropDownOption } from "../common/DropDownOption";

const categories: Category[] = [
  {
    id: 1,
    name: "Fruit",
  },
  {
    id: 2,
    name: "Fish",
  },
];

const AddProduct = () => {
  const [isModalOpen, openModal] = useState(false);

  const hideModal = () => {
    openModal(false);
  };

  const showModal = () => {
    openModal(true);
  };

  const initialValues = {
    name: "",
    price: "",
    category: "",
    description: "",
  };

  const dropdownOptions = [
    { key: "Select an Category", value: "" },
    { key: "Food", value: "food" },
    { key: "Clothes", value: "clothes" },
  ];

  const validationSchema = yup.object({
    name: yup.string().required("Name can not be empty"),
    price: yup.string().required("Price can not be empty"),
  });

  const [categoryOptions, setCategoryOptions] = useState<DropDownOption[]>([]);

  const fetchCategory = async () => {
    const response = await axios.get(
      "http://localhost:8095/webstore/categories"
    );
    const categories: Category[] = await response.data.responseBody;
    const options: DropDownOption[] = await convertToDropDown(categories);
    await setCategoryOptions(options);
  };

  const convertToDropDown = (categories: Category[]): DropDownOption[] => {
    return categories.map((category: Category) => {
      return {
        key: category.name,
        value: category.id,
      };
    });
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const onSubmit = (value: any) => {};

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="card">
            <div className="card-body">
              <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form className="col-md-4">
                  <CustomModal
                    render={() => <AddCategory />}
                    modalHeader="Add Category"
                    showModal={isModalOpen}
                    hideModal={hideModal}
                  ></CustomModal>

                  <FormikControl
                    control="input"
                    type="text"
                    name="name"
                    label="Name"
                    className="col-form-label"
                  />
                  <FormikControl
                    control="select"
                    name="selectOption"
                    label="Select a Category"
                    options={categoryOptions}
                  />
                  <button
                    className="btn btn-rounded btn-primary"
                    onClick={showModal}
                  >
                    Add Category
                  </button>

                  {/* <div className="form-group">
                  <label htmlFor="name" className="col-form-label">Select Category</label>
                  <select className="form-control">
                    <option>Cat 1</option>
                    <option>Cat 2</option>
                    <option>Cat 3</option>
                  </select>
                </div> */}
                  <FormikControl
                    control="input"
                    type="text"
                    name="price"
                    label="Price"
                  />
                  {/* <div className="form-group">
                  <label htmlFor="price" className="col-form-label">Price</label>
                  <input id="price" type="text" className="form-control" />
                </div> */}
                  <div className="form-group">
                    <label htmlFor="myFile" className="col-form-label">
                      Photo Upload
                    </label>
                    <input type="file" id="myFile" name="filename" />
                  </div>

                  <FormikControl
                    control="textarea"
                    type="textarea"
                    name="description"
                    label="Description"
                    className="col-form-label"
                  />

                  <div className="card-footer text-right">
                    <button
                      type="submit"
                      className="btn btn-rounded btn-success"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddProduct;
