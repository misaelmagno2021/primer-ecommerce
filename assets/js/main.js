import loader from "./components/loader.js";
import products from "./components/products.js";
import showCart from "./components/showCart.js";
import showMenu from "./components/showMenu.js";
import getProducts from "./helpers/getProducts.js";
import cart from "./components/cart.js";

/* UI Elements */

/* Hidden loader */
loader()

/* Show Menu */
showMenu()

/* Show Cart */
showCart()

/* End UI Element */

/* Products */
const { db, printProducts } = products(await getProducts())

/* Cart */
cart(db, printProducts)
