const Project = () => {
    return (
        <div className="project-section">
            <div className="container mt-5">
                <div className="row">
                    <div className="">
                        <div className="text-center">Portofolio</div>
                        <h1 className="text-center my-3">My Featured Project</h1>
                    </div>
                    <div className="d-flex flex-column flex-md-row flex-xl-row gap-3">
                        <div className="card profile-card">
                            <img className="project-image" src="/public/project/pstore.png" alt="" />
                            <span className="project-category my-2">Web Development</span>
                            <div className="project-name">P-STORE.NET</div>
                            <a className="nav-link project-link" href="">view study case <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div className="card profile-card">
                            <img className="project-image" src="/public/project/tripay.png" alt="" />
                            <span className="project-category my-2">Web Development</span>
                            <div className="project-name">Tripay</div>
                            <a className="nav-link project-link" href="">view study case <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div className="card profile-card">
                            <img className="project-image" src="/public/project/agros.png" alt="" />
                            <span className="project-category my-2">Web Development</span>
                            <div className="project-name">AGROS</div>
                            <a className="nav-link project-link" href="">view study case <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Project