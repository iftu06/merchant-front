import "./App.css";
import Header from "./theme/Header";
import SideMenu from "./theme/SideMenu";
import DashboardPanel from "./theme/DashboardPanel";
import Footer from "./theme/Footer";
import UserList from "./theme/user/UserList";
import { Switch, Route, Redirect } from "react-router-dom";
import ProductList from "./theme/products/ProductList";
import CategoryList from "./theme/category/CategoryList";
import AddProduct from "./theme/products/AddProduct";
import AddCategory from "./theme/category/AddCategory";

function App() {
  return (
    <div className="App">
      <Header />
      <SideMenu />
      <div className="dashboard-wrapper">
        <div className="dashboard-ecommerce">
          <div className="container-fluid dashboard-content">
            <Switch>
              <Route path="/" exact>
                {/* <Redirect to="/" /> */}
                <DashboardPanel />
              </Route>
              <Route path="/user-list">
                <UserList />
              </Route>
              <Route path="/product-list">
                <ProductList />
              </Route>
              <Route path="/category-list">
                <CategoryList />
              </Route>
              <Route path="/add-category">
                <AddCategory />
              </Route>
              <Route path="/add-product">
                <AddProduct />
              </Route>
            </Switch>

            {/* <Routes>
              <Route path="/" element={<DashboardPanel />} />
              <Route path="/user-list" element={<UserList />} />
            </Routes> */}

          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
