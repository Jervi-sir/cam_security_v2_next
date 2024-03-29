import { Settings } from "@/utils/db";
import { Aside } from "../Aside";

export default function Installation() {
  return (
    <>
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="page-single mb-0">
                <div className="page-img">
                  <img src="/assets/illustrations/cctv_installation.svg" alt="Installation CCTV" />
                </div>
                <div className="page-content">
                  <h4 className="sec-title page-title">Services d&apos;installation de CCTV</h4>
                  <p className="mb-30">Le CCTV (télévision en circuit fermé) est un système de sécurité utilisant des caméras
                    pour surveiller et enregistrer les activités dans des zones spécifiées. Nos services d&apos;installation de CCTV assurent
                    que votre propriété est protégée en fournissant un moyen de dissuasion visuel pour les intrus potentiels et
                    en enregistrant toute activité suspecte. Voici un aperçu plus détaillé de nos services d&apos;installation de CCTV :</p>
                  <div className="features-wrapper">
                    <div className="features-img">
                      <img src="/assets/illustrations/cctv_garage.svg" alt="Fonctionnalités CCTV" />
                    </div>
                    <div className="features-content">
                      <h4 className="box-title">Caractéristiques clés de nos systèmes CCTV :</h4>
                      <p>Enregistrement vidéo de haute qualité, capacités de surveillance à distance, vision nocturne, détection de mouvement,
                        et stockage sécurisé des données.</p>
                      <div className="checklist style2">
                        <ul>
                          <li>Qualité vidéo haute définition</li>
                          <li>Accès et surveillance à distance</li>
                          <li>Détection de mouvement avancée</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <p className="mt-30 mb-30">Nos systèmes CCTV sont conçus pour offrir des solutions de sécurité complètes pour les
                    propriétés résidentielles et commerciales. Nous utilisons la dernière technologie pour vous fournir un
                    système facile à gérer, très efficace et évolutif selon vos besoins en matière de sécurité.</p>

                  <h4 className="mb-20">Processus d&apos;installation</h4>

                  <p className="mb-30">Notre processus d&apos;installation de CCTV est minutieux pour assurer une couverture maximale et une sécurité
                    optimale. Voici comment nous procédons :</p>
                  <div className="service-process-wrap">
                    <div className="service-process">
                      <div className="service-process_num">01</div>
                      <div className="service-process_centent">
                        <h5 className="service-process_title">Évaluation du site :</h5>
                        <p className="service-process_text">Réaliser une enquête approfondie des lieux pour déterminer les emplacements optimaux
                          pour le placement des caméras.</p>
                      </div>
                    </div>
                    <div className="service-process">
                      <div className="service-process_num">02</div>
                      <div className="service-process_centent">
                        <h5 className="service-process_title">Conception du système :</h5>
                        <p className="service-process_text">Concevoir un système CCTV personnalisé répondant à vos exigences de sécurité
                          et à votre budget.</p>
                      </div>
                    </div>
                    <div className="service-process">
                      <div className="service-process_num">03</div>
                      <div className="service-process_centent">
                        <h5 className="service-process_title">Installation :</h5>
                        <p className="service-process_text">Installation professionnelle des caméras, du câblage et de l&apos;équipement de surveillance
                          avec une perturbation minimale.</p>
                      </div>
                    </div>
                    <div className="service-process">
                      <div className="service-process_num">04</div>
                      <div className="service-process_centent">
                        <h5 className="service-process_title">Configuration et test du système :</h5>
                        <p className="service-process_text">Configurer le système et effectuer des tests complets pour assurer
                          une fonctionnalité optimale.</p>
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
