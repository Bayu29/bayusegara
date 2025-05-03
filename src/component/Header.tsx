const Header = () => {
    return (
        <div className="header-section">
            <div className="row">
                <div className="content-header">
                    <div className="d-flex justify-content-between flex-column flex-md-row flex-xl-row">
                        <div className="">
                            <div className="header-title">
                                <div className="d-flex gap-3">
                                    <h1>Hi!</h1> <img className="header-icon" src="/public/icons/hi_hand.png" alt="" /> <br />
                                </div>
                                <h1>I'm Bayu Segara</h1>
                                <div className="d-flex social-medial-group gap-3 mt-3">
                                    <a href="https://github.com/Bayu29" target="_blank" rel="noopener noreferrer"><img className="sosmed-icon" src="/public/icons/github.png" alt="" /></a>
                                    <a href="https://www.linkedin.com/in/bayu-s-072697137/" target="_blank"><img className="sosmed-icon" src="/public/icons/linkedin.png" alt="" /></a>
                                    <a href="#"><img className="sosmed-icon" src="/public/icons/instagram.png" alt="" /></a>
                                    {/* <img className="sosmed-icon" src="/public/icons/facebook.png" alt="" />
                                    <img className="sosmed-icon" src="/public/icons/twitter.png" alt="" />
                                    <img className="sosmed-icon" src="/public/icons/youtube.png" alt="" /> */}
                                    <a href=""><img className="sosmed-icon" src="/public/icons/whatsapp.png" alt="" /></a>
                                </div>
                                <div className="header-subtitle mt-5 header-biography">I have many year of experience in building robust and scalable web 
                                    applications. I specialize in both front-end and back-end development,
                                    ensuring seamless integration and performance across the entire stack.
                                    Let's create something amazing together!
                                </div>
                                <button className="btn btn-contact mt-4" type="button">Download CV</button>
                            </div>
                        </div>
                        <div className="">
                            <div className="header-image">
                                <img className="profile-image" src="/public/images/profile.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header