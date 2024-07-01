import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <br />
            {/* Hero Header Section */}
            <section className="hero-header">
                <div className="container text-center">
                    <h1 className="text-black">Welcome to Online Sabzi</h1>
                    <p className="text-black">Your Fresh Grocery Store</p>
                    <Link to="shop">Shop Now</Link>
                </div>
            </section>
            <section className="banner-section py-5">
                <div className="text-center">
                    <img src="./assets/images/2.jpg" alt="Banner Image" className="banner-image" />
                </div>
            </section>
            {/* Products Section */}
            <section id="products" className="py-5">
                <div className="container">
                    <h2 className="text-center text-primary-gradient">Our Products</h2>
                    <br />
                    <br />
                    <div className="row">
                        {/* First Row */}
                        <div className="col-md-3">
                            <div className="card product-card">
                                <img
                                    src="https://img.freepik.com/free-photo/top-view-cauliflower-with-leaves_23-2148758819.jpg?t=st=1716971442~exp=1716975042~hmac=aa20ce38653f082c1029c3cba6446bdd439ed003a950f7326ca0b436dd711ce6&w=360"
                                    alt="Cauliflower"
                                    className="card-img-top"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Cauliflower</h5>
                                    <p className="card-text">
                                        The Veggie with the Power to Transform Your Plate!.
                                    </p><br />
                                    <p className="card-price">Rs 2.99/kg</p>
                                    <Link to="#" className="btn btn-primary stretched-link">
                                        Add to Cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card product-card">
                                <img
                                    src="https://img.freepik.com/premium-photo/slices-radish-lettuce-leaves_112977-43.jpg?w=740"
                                    alt="Daikon Radish"
                                    className="card-img-top"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Daikon Radish</h5>
                                    <p className="card-text">
                                        Embrace the Crunch: Daikon Radish - Nature's Refreshing!.
                                    </p>
                                    <br />
                                    <p className="card-price">Rs 3.49/Kg</p>
                                    <Link to="#" className="btn btn-primary stretched-link">
                                        Add to Cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card product-card">
                                <img
                                    src="https://img.freepik.com/premium-vector/fresh-scallions-with-long-green-tops_1253557-21369.jpg?w=740"
                                    alt="Leeks"
                                    className="card-img-top"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Leeks</h5>
                                    <p className="card-text">
                                        Savor the Garden's Bounty with Every Bite.
                                    </p>
                                    <br />
                                    <p className="card-price">Rs 1.99/Kg</p>
                                    <Link to="#" className="btn btn-primary stretched-link">
                                        Add to Cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card product-card">
                                <img
                                    src="https://img.freepik.com/premium-photo/fresh-red-white-onions-dark-background_58460-6190.jpg?w=740"
                                    alt="Lotus Root"
                                    className="card-img-top"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Lotus Root</h5>
                                    <p className="card-text">
                                        Rooted in Wellness, Blossoming with Flavor.
                                    </p>
                                    <br />
                                    <p className="card-price">Rs 4.99/Kg</p>
                                    <Link to="#" className="btn btn-primary stretched-link">
                                        Add to Cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        {/* Second Row */}
                        <div className="col-md-3">
                            <div className="card product-card">
                                <img
                                    src="https://img.freepik.com/free-photo/close-up-mushrooms-rosemary-near-vegetables_23-2147829070.jpg?t=st=1716977317~exp=1716980917~hmac=24275f8c74adf5eecf4a9ad7a1c3e7c30e45643d76ebabeceb8d6d792538b67f&w=740"
                                    alt="Mushrooms"
                                    className="card-img-top"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Mushrooms</h5>
                                    <p className="card-text">
                                        Nature's Flavorful Delight and Bold Flavor.
                                    </p>
                                    <p className="card-price">Rs 3.99/Kg</p>
                                    <Link to="#" className="btn btn-primary stretched-link">
                                        Add to Cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card product-card">
                                <img
                                    src="https://img.freepik.com/free-vector/watercolor-white-calla-lily-flower-floral-seamless-pattern_44538-11084.jpg?t=st=1716977464~exp=1716981064~hmac=ce092312902b0092545520486e3381a479507b8a5cfe5195c9cb48eea13989b5&w=740"
                                    alt="Mustard Greens"
                                    className="card-img-top"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Mustard Greens</h5>
                                    <p className="card-text">
                                        Bold Flavor Mustard Greens for Vibrant Living.
                                    </p>
                                    <p className="card-price">Rs 2.49/Kg</p>
                                    <Link to="#" className="btn btn-primary stretched-link">
                                        Add to Cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card product-card">
                                <img
                                    src="https://img.freepik.com/premium-vector/fresh-vegetable-ladies-finger-okra-falling-vector-green-background_858191-240.jpg?w=740"
                                    alt="Okra"
                                    className="card-img-top"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Okra</h5>
                                    <p className="card-text">
                                        Savor the Southern Charm, Taste the Garden's Bounty.
                                    </p>
                                    <p className="card-price">Rs 2.79/Kg</p>
                                    <Link to="#" className="btn btn-primary stretched-link">
                                        Add to Cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card product-card">
                                <img
                                    src="https://img.freepik.com/premium-photo/cut-whole-red-onions-black-background_392895-411584.jpg?w=740"
                                    alt="Onions (Red)"
                                    className="card-img-top"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Onions (Red)</h5>
                                    <p className="card-text">
                                        Add Color to Your Cuisine, Depth to Your Dishes.
                                    </p>
                                    <p className="card-price">Rs 1.49/kg</p>
                                    <Link to="#" className="btn btn-primary stretched-link">
                                        Add to Cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                src="https://img.freepik.com/free-photo/painting-green-vegetable-red-tomato_1340-25549.jpg?t=st=1690140201~exp=1690143801~hmac=7961b6483054b426dcccd2dbfff03eda80cdc1814e8b5a7a172901a141554e40&w=740"
                                alt="About Image"
                                className="img-fluid mb-4 rounded-image"
                            />
                        </div>
                        <div className="col-md-6" style={{ textAlign: "justify" }}>
                            <h2 className="text-primary-gradient">About Online Sabzi</h2>
                            <p>
                                Welcome to Online Sabzi, your one-stop destination for fresh and
                                high-quality groceries. We are dedicated to providing you with the
                                finest selection of fruits, vegetables, dairy products, and more,
                                all sourced from trusted local farmers and suppliers.
                            </p>
                            <p>
                                At Online Sabzi, we understand the importance of fresh and
                                nutritious food for a healthy lifestyle. That's why we take pride in
                                delivering farm-fresh produce directly to your doorstep. Our team of
                                dedicated professionals ensures that every product meets the highest
                                standards of quality, so you can shop with confidence.
                            </p>
                            <p>
                                With our user-friendly website and easy ordering process, shopping
                                for groceries has never been more convenient. Browse through our
                                wide range of products, add them to your cart, and have them
                                delivered to your home in no time. Say goodbye to long queues and
                                crowded stores!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
              </>

    );
}

export default Home;