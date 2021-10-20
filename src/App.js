import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import Doctors from "./components/Doctors/Doctors";
import Appointment from "./components/Appointment/Appointment";

import ServiceDetail from "./components/ServicesDetails/ServiceDetail";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/doctors">
              <Doctors/>
            </Route>
            
            <Route path="/contact">
              <Contact/>
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Register />
            </Route>
            
            <PrivateRoute path ="/service/:serviceKey">
            <ServiceDetail/>
            </PrivateRoute>

            <PrivateRoute path ="/appointment">
            <Appointment/>
            </PrivateRoute>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
