import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Reviews from "./components/Reviews";
import { Column, Row } from "./components/Common/components/grid";
import NavBar from "./components/UI/NavBar";
import Header from "./components/UI/Header";
import CreateReview from "./components/CreateReview";
import { AuthProvider } from "./providers/authProvider";
import { UserProvider } from "./providers/userProvider";
import { CompanyProvider } from "./providers/companyProvider";
import { ProductProvider } from "./providers/productProvider";
import Products from "./components/Products";

const App = () => (
  <>
    <AuthProvider>
      <UserProvider>
        <Row>
          <Header />
        </Row>
        <BrowserRouter>
          <Row>
            <NavBar />
          </Row>

          <Row>
            <Column>
              <Switch>
                <CompanyProvider>
                  <ProductProvider>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/reviews" component={Reviews} />
                    <Route exact path="/products" component={Products} />
                    <Route
                      exact
                      path="/createReview"
                      component={CreateReview}
                    />
                  </ProductProvider>
                </CompanyProvider>
              </Switch>
            </Column>
          </Row>
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>
  </>
);

export default App;
