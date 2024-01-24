import config from "config";

// Pages
import Home from "page/Application/Home";
import DetailProduct from "page/Application/DetailProduct";
import Cart from "page/Application/Cart";


// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.detailProduct, component: DetailProduct },
    { path: config.routes.cart, component: Cart },
];


const privateRoutes = [];

export { publicRoutes, privateRoutes };