/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import DeveloperBoard from "@material-ui/icons/DeveloperBoard";

// import Person from "@material-ui/icons/Person";

// core components/views for Admin layout
import Advertise from "./admin/Advertise.js";
import Equipment from "./admin/Equipment.js";

const dashboardRoutes = [
  {
    path: "/advertise",
    name: "Advertise",
    icon: Dashboard,
    component: Advertise,
    layout: "/admin"
  },
  {
    path: "/equipment",
    name: "Equipments",
    icon: DeveloperBoard,
    component: Equipment,
    layout: "/admin"
  }
];

export default dashboardRoutes;
