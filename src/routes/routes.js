import config from "config";

// Pages
import Home from "page/Application/Home";
import DetailProduct from "page/Application/DetailProduct";


// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.detailProduct, component: DetailProduct },
];


const privateRoutes = [];

export { publicRoutes, privateRoutes };