const Blog = () => {
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card mb-4">
                            <img
                                src="https://img.freepik.com/free-photo/vegetable-decoration-with-slate-left_23-2147681601.jpg?t=st=1718267293~exp=1718270893~hmac=06d2670160189942dfcdc72be50a411760fb4bc25659cacf289a9a8539b41a74&w=740"
                                className="card-img-top"
                                alt="Blog Post Image"
                            />
                            <div className="card-body">
                                <h2 className="card-title">Blog Post Title</h2>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                    posuere erat a ante.{" "}
                                </p>
                                <details />
                                <p />
                            </div>
                            <div className="card-footer text-muted">
                                Posted on June 13, 2024 by <a href="#">Admin</a>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <img
                                src="https://via.placeholder.com/750x300"
                                className="card-img-top"
                                alt="Blog Post Image"
                            />
                            <div className="card-body">
                                <h2 className="card-title">Another Blog Post Title</h2>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                    posuere erat a ante.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Read More →
                                </a>
                            </div>
                            <div className="card-footer text-muted">
                                Posted on June 10, 2024 by <a href="#">Admin</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card my-4">
                            <h5 className="card-header">Search</h5>
                            <div className="card-body">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search for..."
                                    />
                                    <span className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            Go!
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card my-4">
                            <h5 className="card-header">Categories</h5>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul className="list-unstyled mb-0">
                                            <li>
                                                <a href="#">Vegetables</a>
                                            </li>
                                            <li>
                                                <a href="#">Fruits</a>
                                            </li>
                                            <li>
                                                <a href="#">Recipes</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card my-4">
                            <h5 className="card-header">Side Widget</h5>
                            <div className="card-body">
                                You can put anything you want inside of these side widgets. They are
                                easy to use, and feature the new Bootstrap 4 card containers!
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Blog;