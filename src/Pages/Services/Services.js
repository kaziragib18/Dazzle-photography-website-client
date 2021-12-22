import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="container my-5 pt-5 pb-md-5">
            <div className="d-flex justify-content-center">
                <div className="text-center">
                    <h2 className="google-font text-warning">Enjoy Our</h2>
                    <h1 className="text-size fw-bold">Quility Services</h1>
                    <p className="text-muted">We specialise in event photography with the natural reportage documentation of corporate occasions and celebrations, producing the highest quality imagery that showcase your company and event in its best possible light. Whatever and whenever your occasion happens, our multi-talented event photographers will cover your occasion to your exact requirements. </p>
                </div>

            </div>

            <div className="row g-4 my-3">

                <div className="col-12 col-md-3">
                    <div className="card text-center border-0">
                        <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-1.png" className="w-25 mx-auto img-hover" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title my-2">Restaurants</h5>
                            <small className="card-text text-muted">Over 10 years of Special Photography for 200+ clients of all types.</small>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="card text-center border-0">
                        <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-2.png" className="w-25 mx-auto img-hover" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title my-2">Sightseeing</h5>
                            <small className="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</small>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="card text-center border-0">
                        <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-3.png" className="w-25 mx-auto img-hover" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title my-2">Shops & Boutiques</h5>
                            <small className="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</small>

                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-3">
                    <div className="card text-center border-0">
                        <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-4.png" className="w-25 mx-auto img-hover" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title my-2">Where to Stay</h5>
                            <small className="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</small>

                        </div>
                    </div>
                </div>
            </div>


        </div>
  );
};

export default Services;