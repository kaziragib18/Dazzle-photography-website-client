import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="container my-5 pb-md-5">
            <div className="d-flex justify-content-center">
                <div className="text-center">
                    <h2 className="google-font text-warning">Enjoy Our</h2>
                    <h1 className="text-size fw-bold">Quility Services</h1>
                    <p className="text-muted">Dazzle specialises in event photography with the natural reportage documentation of speacial occasions and celebrations, producing the highest quality imagery that showcase your wedding and event in its best possible light. Whatever and whenever your occasion happens, our multi-talented event photographers will cover your occasion to your exact requirements. </p>
                </div>

            </div>

            <div className="row g-4 my-3">

                <div className="col-12 col-md-3">
                    <div className="card text-center border-0">
                        <img src="https://cdn-icons-png.flaticon.com/512/5848/5848821.png" className="w-25 mx-auto img-hover" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title my-2">Expert Photograpgher</h5>
                            <small className="card-text text-muted">All of our photograpers have over 10 years of experience for 200+ clients of all types.</small>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="card text-center border-0">
                        <img src="https://cdn-icons-png.flaticon.com/512/3175/3175170.png" className="w-25 mx-auto img-hover" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title my-2">Shooting Locations</h5>
                            <small className="card-text text-muted">Exotic photo stooting location for the beautiful wedding that you always wanted!</small>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="card text-center border-0">
                        <img src="https://cdn-icons-png.flaticon.com/512/1005/1005735.png" className="w-25 mx-auto img-hover" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title my-2">Makeup Artist</h5>
                            <small className="card-text text-muted">You will accompanied by our expert makeup artist so that you look gorgeous</small>

                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-3">
                    <div className="card text-center border-0">
                        <img src="https://cdn-icons-png.flaticon.com/512/2706/2706861.png" className="w-25 mx-auto img-hover" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title my-2">24h Support</h5>
                            <small className="card-text text-muted">Get 24h of customer support anyday & anytime.If you have any query call or email us.</small>

                        </div>
                    </div>
                </div>
            </div>


        </div>
  );
};

export default Services;