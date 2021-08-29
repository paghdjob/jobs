import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Secret from "./components/Secret";

export default [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/job_add",
        component: About,
        exact: true,
    },
    {
        path: "/job_list",
        component: Contact,
        exact: true,
    },
    {
        path: "/secret",
        component: Secret,
        exact: true,
    },
];
