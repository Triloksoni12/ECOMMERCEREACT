import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <header>
        <nav className="navbar navbar-blue navbar-expand-lg sticky-top justify-content-center">
            <div className="container">
                <img
                    src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg"
                    alt="Online Sabzi Logo"
                    className="custom-logo"
                    width={100}
                    height={100}
                />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="#"
                                id="dropdown04"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Shop
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="dropdown04">
                                <Link className="dropdown-item" to="shop.html">
                                    Shop
                                </Link>
                                <Link className="dropdown-item" to="wishlist.html">
                                    Wishlist
                                </Link>
                                <Link className="dropdown-item" to="product-single.html">
                                    Single Product
                                </Link>
                                <Link className="dropdown-item" to="cart.html">
                                    Cart
                                </Link>
                                <Link className="dropdown-item" to="checkout.html">
                                    Checkout
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="about" className="nav-link">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="blog" className="nav-link">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contact" className="nav-link">
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item cta cta-colored">
                            <Link to="cart" className="nav-link">
                                <span className="icon-shopping_cart" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-Add-to-Cart">
                            <Link className="nav-link" to="cart">
                                {/* Set the width and height of the image to 32px */}
                                <img
                                    src="https://cdn1.iconfinder.com/data/icons/shopping-and-ecommerce/64/E-commerce_and_Shopping-16-256.png"
                                    alt="Add to Cart"
                                    style={{ width: 32, height: 32 }}
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
     );
}
 
export default Header;