import Home from "../screens/Home";
import Login from "../screens/Login";
import Main from "../screens/Main"; // Import the Main component

const routes = [
  {
    path: "",
    component: Home,
    name: "Home Page",
    protected: true,
  },
  {
    path: "/login",
    component: Login,
    name: "Login Screen",
    protected: false,
  },
  {
    path: "/main",
    component: Main, // Reference to the Main component
    name: "Main Page",
    protected: true, // Set to true or false based on your requirement
  },
];

export default routes;
