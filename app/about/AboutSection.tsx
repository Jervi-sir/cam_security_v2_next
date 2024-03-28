export const AboutSection = () => {
  return (
    <>
      <div className="about-area4 bg-white overflow-hidden space pt-4" id="about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="img-box1">
                <div className="img1 global-img">
                  <img src="/assets/illustrations/cctv_equipment.svg" alt="À propos de l'installation CCTV" />
                </div>
                <div className="about-shape"></div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-content-area ps-xl-4 ms-xl-2">
                <div className="title-area mb-35">
                  <span className="sub-title">Découvrez notre expertise</span>
                  <h2 className="sec-title">Améliorez votre sécurité avec nos solutions expertes</h2>
                  <p className="">Notre agence se spécialise dans l’installation professionnelle et la maintenance de systèmes de caméras de sécurité de haute qualité. Nous nous engageons à fournir des solutions de surveillance fiables et efficaces pour garantir votre sécurité et votre tranquillité d’esprit.</p>
                </div>
                <div className="about-counter-wrapper">
                  <div className="checklist">
                    <ul>
                      <li>Installation professionnelle de systèmes avancés</li>
                      <li>Maintenance régulière pour assurer une performance optimale</li>
                      <li>Estimation gratuite pour adapter les solutions à vos besoins</li>
                      <li>Conseils d'experts pour renforcer la sécurité de votre propriété</li>
                    </ul>
                  </div>
                </div>
                <div className="btn-group mt-40 justify-content-start">
                  <a href="/services" className="th-btn">Planifiez votre estimation gratuite</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
