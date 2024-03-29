import React from 'react';
import { Link } from "gatsby"

const FeaturedService = () => {
    return (
        <div className="boxes-area pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-boxes-box">
                            <div className="icon">
                                <i className="flaticon-research"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                </div>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Marketing Analysis
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
                        <div className="single-boxes-box">
                            <div className="icon">
                                <i className="flaticon-speed"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                </div>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Website Optimization
                                </Link>
                            </h3>
                            
                            <Link to="/single-services" className="learn-more-btn">
                                <i className="left-icon flaticon-next-button"></i> 
                                Learn More 
                                <i className="right-icon flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-boxes-box">
                            <div className="icon">
                                <i className="flaticon-email-marketing"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                </div>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Email Marketing
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

export default FeaturedService;