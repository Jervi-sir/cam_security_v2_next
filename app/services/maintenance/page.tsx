import { Aside } from "../Aside";

export default function Maintenance() {
  return (
    <>
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="page-single mb-0">
                <div className="page-img ">
                  <img src="/assets/illustrations/cctv_thief.svg" alt="Maintenance CCTV" />
                </div>
                <div className="page-content">
                  <h4 className="sec-title page-title">Services de maintenance de CCTV</h4>
                  <p className="mb-30">La maintenance de CCTV est cruciale pour garantir le fonctionnement optimal du système de sécurité et sa durabilité. Nos services de maintenance de CCTV comprennent des inspections régulières, des tests, des ajustements et des réparations pour assurer la performance et la fiabilité de votre système de sécurité. Voici les détails de nos services de maintenance de CCTV :</p>
                  <div className="features-wrapper">
                    <div className="features-img">
                      <img src="/assets/illustrations/cctv_pc2.svg" alt="Caractéristiques de la maintenance CCTV" />
                    </div>
                    <div className="features-content">
                      <h4 className="box-title">Caractéristiques de notre service de maintenance CCTV :</h4>
                      <p>Contrôles périodiques, diagnostic précis des problèmes, remplacement des composants défectueux, mise à jour du logiciel, et conseils professionnels.</p>
                      <div className="checklist style2">
                        <ul>
                          <li>Inspections régulières</li>
                          <li>Diagnostic et réparation</li>
                          <li>Mise à jour et amélioration du système</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <p className="mt-30 mb-30">Notre service de maintenance garantit que votre système de CCTV reste fiable et performant, réduisant ainsi les risques de pannes et les coûts imprévus.</p>

                  <h4 className="mb-20">Processus de maintenance</h4>

                  <p className="mb-30">Notre processus de maintenance est conçu pour être complet et efficace, minimisant les interruptions tout en maximisant la sécurité. Voici notre approche :</p>
                  <div className="service-process-wrap">
                    <div className="service-process">
                      <div className="service-process_num">01</div>
                      <div className="service-process_centent">
                        <h5 className="service-process_title">Évaluation et inspection :</h5>
                        <p className="service-process_text">Examen détaillé de l'ensemble du système pour identifier les problèmes potentiels.</p>
                      </div>
                    </div>
                    <div className="service-process">
                      <div className="service-process_num">02</div>
                      <div className="service-process_centent">
                        <h5 className="service-process_title">Entretien préventif :</h5>
                        <p className="service-process_text">Réalisations d'entretiens réguliers pour prévenir les défaillances et garantir le fonctionnement optimal.</p>
                      </div>
                    </div>
                    <div className="service-process">
                      <div className="service-process_num">03</div>
                      <div className="service-process_centent">
                        <h5 className="service-process_title">Réparation et remplacement :</h5>
                        <p className="service-process_text">Remplacement ou réparation des composants usés ou défectueux pour maintenir la performance du système.</p>
                      </div>
                    </div>
                    <div className="service-process">
                      <div className="service-process_num">04</div>
                      <div className="service-process_centent">
                        <h5 className="service-process_title">Rapport et conseils :</h5>
                        <p className="service-process_text">Fourniture d'un rapport détaillé sur l'état du système et recommandations pour les améliorations futures.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-4" style={{position: 'relative'}}>
              <Aside />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
