const Contact = () => {
    return ( 
        <>
        <>
  <br />
  <main>
    <div className="container py-5">
      <div className="row g-5">
        {/* Contact Information Block */}
        <div className="col-xl-6">
          <div className="row row-cols-md-2 g-4">
            <div className="col">
              <div className="contact-info">
                <i className="fa-solid fa-envelope" />
                <div>
                  <div className="h5">Email</div>
                  <span>info@onlinesabzi.com</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="contact-info">
                <i className="fa-solid fa-phone" />
                <div>
                  <div className="h5">Phone</div>
                  <span>+0123456789</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="aos-item mt-4"
            data-aos="fade-up"
            data-aos-delay={600}
          >
            <div className="aos-item__inner">
              <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
                <div className="d-flex justify-content-start">
                  <i className="fa-solid fa-location-pin h3 pe-2" />
                  <span className="h5">Office location</span>
                </div>
                <span>
                  Mangal Bhavan, E, Nehru Nagar Main Rd, Vidya Vihar Colony,
                  Bhilai, Chhattisgarh 490020
                </span>
              </div>
            </div>
          </div>
          <div className="aos-item" data-aos="fade-up" data-aos-delay={800}>
            <div className="mt-4 w-100 aos-item__inner">
              <iframe
                className="hvr-shadow"
                width="100%"
                height={345}
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.530502131398!2d81.32064417450347!3d21.210801980484455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293d2810608f95%3A0xac525265604196ad!2sSoftware%20Technology%20Parks%20of%20India!5e0!3m2!1sen!2sin!4v1718348171266!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        {/* Contact Form Block */}
        <div className="col-xl-6">
          <h2 className="pb-4">Leave a message</h2>
          <div className="row g-4">
            <div className="col-6 mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Fisrt Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Trilok"
              />
            </div>
            <div className="col-6 mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Soni"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="trilokson222@gmail.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder={+1234567890}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Country
            </label>
            <select className="form-select" aria-label="Default select example">
              <option value={1}>USA</option>
              <option value={2}>INDIA</option>
              <option value={3}>AUSTRALIA</option>
              <option value={4}>DUBAI</option>
              <option value={5}>UK</option>
              <option value={6}>CHINA</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
            />
          </div>
          <button type="button" className="btn btn-primary">
            Send Message
          </button>
        </div>
      </div>
    </div>
  </main>
</>


        </>
     );
}
 
export default Contact;