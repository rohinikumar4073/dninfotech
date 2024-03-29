import React from 'react';
import { Link } from "gatsby"

const ServicesCard = () => {
    return (
        <div className="services-area bg-f9f9f9 pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Services</span>
                    <h2>Let’s Check Our Services</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-megaphone"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Social Media Marketing
                                </Link>
                            </h3>

                            <Link to="/single-services" className="learn-more-btn">
                                <i className="left-icon flaticon-next-button"></i> 
                                Learn More 
                                <i className="right-icon flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-keywords"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Keyward Research
                                </Link>
                            </h3>
                            
                            <Link to="/single-services" className="learn-more-btn">
                                <i className="left-icon flaticon-next-button"></i> 
                                Learn More 
                                <i className="right-icon flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-content-management"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Content Marketing
                                </Link>
                            </h3>
                            
                            <Link to="/single-services" className="learn-more-btn">
                                <i className="left-icon flaticon-next-button"></i> 
                                Learn More 
                                <i className="right-icon flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-ppc"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    PPC Advertising
                                </Link>
                            </h3>
                            
                            <Link to="/single-services" className="learn-more-btn">
                                <i className="left-icon flaticon-next-button"></i> 
                                Learn More 
                                <i className="right-icon flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-competitor"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Competitor Research
                                </Link>
                            </h3>
                            
                            <Link to="/single-services" className="learn-more-btn">
                                <i className="left-icon flaticon-next-button"></i> 
                                Learn More 
                                <i className="right-icon flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-startup"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Skyrocketing Growth
                                </Link>
                            </h3>
                            
                            <Link to="/single-services" className="learn-more-btn">
                                <i className="left-icon flaticon-next-button"></i> 
                                Learn More 
                                <i className="right-icon flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesCard;