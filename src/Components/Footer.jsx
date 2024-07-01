import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className="footer py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Contact Information</h5>
                            <p>Email: info@onlinesabzi.com</p>
                            <p>Phone: 1234567890</p>
                        </div>
                        <div className="col-md-6">
                            <div className="text-right">
                                <Link
                                    to="https://www.facebook.com/onlinesabziofficial/"
                                    className="btn btn-social"
                                >
                                    <i className="fab fa-facebook-f" />
                                </Link>
                                <Link to="https://onlinesabzi.in/" className="btn btn-social">
                                    <i className="fab fa-twitter" />
                                </Link>
                                <Link
                                    to="https://www.instagram.com/onlinesabziofficial/"
                                    className="btn btn-social"
                                >
                                    <i className="fab fa-instagram" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="footer-menu list-unstyled">
                                <li>
                                    <Link to="#" data-toggle="modal" data-target="#privacyPolicyModal">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" data-toggle="modal" data-target="#termsModal">
                                        Terms of Service
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 text-right">
                            <p>© 2024 Online Sabzi. All rights reserved.</p>
                        </div>
                    </div>
                    {/* Privacy Policy Modal */}
                    <div
                        className="modal fade"
                        id="privacyPolicyModal"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="privacyPolicyModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="privacyPolicyModalLabel">
                                        Privacy Policy
                                    </h5>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    {/* Add your Privacy Policy content here */}
                                    <p>
                                        Certainly! Here are the points formatted as a list with `<br />`
                                        tags: - We collect personal information such as name, email
                                        address, and contact number when you register on our website or
                                        place an order.
                                        <br />
                                        - Your personal information is used to process orders,
                                        personalize your experience, and improve our website's
                                        functionality.
                                        <br />
                                        - We may use your email address to send you updates about your
                                        order, promotional offers, and newsletters. You can unsubscribe
                                        from these communications at any time.
                                        <br />
                                        - Your information is securely stored and protected against
                                        unauthorized access, use, or disclosure.
                                        <br />
                                        - We do not sell, trade, or transfer your personal information
                                        to third parties without your consent, except for trusted
                                        partners who assist us in operating our website and servicing
                                        you.
                                        <br />
                                        - We may disclose your information when we believe it is
                                        necessary to comply with the law, enforce our site policies, or
                                        protect ours or others' rights, property, or safety.
                                        <br />- By using our website, you consent to our privacy policy.
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        data-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Terms Modal */}
                    <div
                        className="modal fade"
                        id="termsModal"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="termsModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="termsModalLabel">
                                        Terms of Service
                                    </h5>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    {/* Add your Terms of Service content here */}
                                    <p>
                                        By accessing the website, you agree to comply with these terms
                                        and conditions.
                                        <br />
                                        You must be at least 18 years old to use this website.
                                        <br />
                                        You are responsible for maintaining the confidentiality of your
                                        account and password and for restricting access to your
                                        computer.
                                        <br />
                                        You agree not to use the website for any illegal or unauthorized
                                        purpose.
                                        <br />
                                        We reserve the right to refuse service, terminate accounts, or
                                        cancel orders at our sole discretion.
                                        <br />
                                        The content of the website is for your general information and
                                        use only. It is subject to change without notice.
                                        <br />
                                        We do not guarantee the accuracy, timeliness, performance,
                                        completeness, or suitability of the information and materials
                                        found or offered on this website for any particular purpose.
                                        <br />
                                        Your use of any information or materials on this website is
                                        entirely at your own risk, for which we shall not be liable.
                                        <br />
                                        Unauthorized use of this website may give rise to a claim for
                                        damages and/or be a criminal offense.
                                        <br />
                                        From time to time, this website may also include links to other
                                        websites. These links are provided for your convenience to
                                        provide further information. They do not signify that we endorse
                                        the website(s). We have no responsibility for the content of the
                                        linked website(s).
                                        <br />
                                        Your use of this website and any dispute arising out of such use
                                        of the website is subject to the laws of [Your Country].
                                        <br />
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        data-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
     );
}
 
export default Footer;