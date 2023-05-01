import react from 'react'

function Projects(){
    return(
        <section className="section-projects">
          <div className="padding-global">
            <div className="container-medium">
              <div className="padding-section-large">
                <div className="w-layout-grid projects-component">
                  <div className="projects-item">
                    <h2 className="text-color-white">+ 15</h2>
                    <p>Annual Partner</p>
                  </div>
                  <div className="projects-item">
                    <h2 className="text-color-white">+ 5</h2>
                    <p>Completed Projects</p>
                  </div>
                  <div className="projects-item">
                    <h2 className="text-color-white">+ 50</h2>
                    <p>Happy Customers</p>
                  </div>
                  <div className="projects-item">
                    <h2 className="text-color-white">+ 320</h2>
                    <p>Research Work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Projects