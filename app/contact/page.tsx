import { NoticeWrapper } from "@/components/NoticeWrapper";
import { MapSection } from "./MapSection";

export default function Contact() {
  return (
    <>
    <div className="space-top space-extra-bottom">
        <div className="container">
          <NoticeWrapper title={'Contact Us'} />
            <div className="row gy-40 flex-row-reverse">
                <div className="col-lg-6 col-xl-7">
                    <form action="mail.php" method="POST" className="contact-form input-smoke ajax-contact">
                        <div className="row">
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" />
                                <i className="fal fa-user"></i>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Email Address" />
                                <i className="fal fa-envelope"></i>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="tel" className="form-control" name="number" id="number" placeholder="Phone Number" />
                                <i className="fal fa-phone"></i>
                            </div>
                            <div className="form-group col-md-6">
                                <select name="subject" id="subject" className="form-select nice-select">
                                    <option value="" disabled selected hidden>Select Service</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Cyber Security">Cyber Security</option>
                                    <option value="App Development">App Development</option>
                                    <option value="Cloud Service">Cloud Service</option>
                                    <option value="Cloud Service">Cloud Service</option>
                                </select>
                            </div>
                            <div className="form-group col-12">
                                <textarea name="message" id="message" cols={30} rows={3} className="form-control" placeholder="Your Message"></textarea>
                                <i className="fal fa-pencil"></i>
                            </div>
                            <div className="form-btn col-12">
                                <button className="th-btn">Send Message</button>
                            </div>
                        </div>
                        <p className="form-messages mb-0 mt-3"></p>
                    </form>
                </div>
                <div className="col-lg-6 col-xl-5">
                    <div className="contact-info-wrap">
                        <div className="title-area mt-n2 mb-10">
                            <span className="sub-title style1">Contact Us</span>
                            <h3 className="sec-title">Let’s working together</h3>
                            <p className="">Thank you for your interest in Attach Web Agency. We're excited to hear from you and
                                discuss...</p>
                        </div>
                        <div className="contact-info">
                            <div className="contact-info_icon"><i className=""><img src="assets/img/icon/phone.svg" alt="" /></i>
                            </div>
                            <div className="media-body">
                                <span className="contact-info_title">Call Us For Query</span><span className="contact-info_text"><a href="tel:+58125253158">(+58-125) 25-3158</a></span>
                            </div>
                        </div>
                        <div className="contact-info">
                            <div className="contact-info_icon"><i className=""><img src="assets/img/icon/message.svg" alt="" /></i>
                            </div>
                            <div className="media-body">
                                <span className="contact-info_title">Email Anytime</span><span className="contact-info_text"><a href="mailto:info@webteck.chat.com">info@webteck.chat.com</a></span>
                            </div>
                        </div>
                        <div className="contact-info">
                            <div className="contact-info_icon"><i className=""><img src="assets/img/icon/location.svg" alt="" /></i>
                            </div>
                            <div className="media-body">
                                <span className="contact-info_title">Visit Our Office</span><span className="contact-info_text">15
                                    Maniel Lane, Front Line Berlin</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <MapSection />
    </>
  )
}