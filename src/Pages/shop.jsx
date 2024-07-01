const Shop = () => {
    return ( 
        <>
        <link rel="stylesheet" type="text/css" media="screen" href="assets/styles/Shop.css"></link>
        <div className="container">
  <h2 className="text-primary">Shop Now</h2>
  <br />
  <br />
  {/* Product Categories */}
  <div className="row">
    <div className="col-md-4">
      <div className="product-category">
        <img
          src="https://img.freepik.com/free-photo/variety-fruits-table-with-yellow-background_1340-23424.jpg"
          alt="Fruits"
          className="img-fluid"
        />
        <h3>Fruits</h3>
      </div>
    </div>
    <div className="col-md-4">
      <div className="product-category">
        <img
          src="https://img.freepik.com/free-photo/fresh-vegetables-wicker-basket-healthy-diet-generated-by-ai_188544-30705.jpg"
          alt="Vegetables"
          className="img-fluid"
        />
        <h3>Vegetables</h3>
      </div>
    </div>
    <div className="col-md-4">
      <div className="product-category">
        <img
          src="https://img.freepik.com/free-photo/dairy-products-milk-butter-yogurt-cheese-cream-on-wooden-plate_141793-5079.jpg"
          alt="Dairy Products"
          className="img-fluid"
        />
        <h3>Dairy Products</h3>
      </div>
    </div>
  </div>
  {/* Featured Products */}
  <div className="featured-products">
    <h2 className="text-primary">Featured Products</h2>
    <br />
  <br />
    <div className="row">
      <div className="col-md-4">
        <div className="product-card">
          <img
            src="https://img.freepik.com/free-photo/red-apple-with-water-droplets-it_188544-30421.jpg"
            alt="Apple"
            className="img-fluid"
          />
          <h4>Red Apples</h4>
          <p>Price: Rs 150.00 per kg</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="product-card">
          <img
            src="https://img.freepik.com/free-photo/bunch-fresh-carrots-ai-generated-image_587448-1359.jpg"
            alt="Carrots"
            className="img-fluid"
          />
          <h4>Fresh Carrots</h4>
          <p>Price: Rs 70.00 per kg</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="product-card">
          <img
            src="https://img.freepik.com/free-photo/fresh-green-lettuce_1205-4365.jpg"
            alt="Lettuce"
            className="img-fluid"
          />
          <h4>Green Lettuce</h4>
          <p>Price: Rs 200.00 per piece</p>
        </div>
      </div>
    </div>
  </div>
  <br/>
  <br/>
<br/>
</div>

        </>
     );
}
 
export default Shop;