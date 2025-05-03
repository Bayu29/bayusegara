const Service = () => {
    return (
        <div className="service-section py-5">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h1>Why Hire Me For Your Next </h1><h1>Project ?</h1>
                        <div className="header-subtitle">My journey in web development is driven by a strong motivation to learn and grow. I approach each project with enthusiasm and a positive attitude, always striving to create the best user experience possible</div>
                        <button className="btn btn-contact mt-4">Hire Me</button>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-6">
                                <div className="card profile-card gap-2">
                                    <img className="profile-icons" src="/public/icons/magic-wand.png" alt="" />
                                    <h6 className="card-title mt-2">High Quality Work</h6>
                                    <span className="card-subtitle">Effecient and effective work by prioritizing quality</span>
                                </div>
                                <div className="card profile-card mt-3">
                                    <img className="profile-icons" src="/public/icons/wall-clock.png" alt="" />
                                    <h6 className="card-title mt-2">Integrated Timeline</h6>
                                    <span className="card-subtitle">Clear and integrated timeline</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card profile-card gap-2 mt-5">
                                    <img className="profile-icons" src="/public/icons/chat.png" alt="" />
                                    <h6 className="card-title mt-2">Free Consultation</h6>
                                    <span className="card-subtitle">free consultation and discussion regarding the problems you are experiencing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Service