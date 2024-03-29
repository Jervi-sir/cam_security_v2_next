import { Aside } from "../Aside";

export default function Service() {
  return (
    <>
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="page-single mb-0">
                <div className="page-img th-anim">
                  <img src="/assets/img/service/free_estimate.jpg" alt="Estimation Gratuite" />
                </div>
                <div className="page-content">
                  <h4 className="sec-title page-title">Service d&apos;estimation gratuite</h4>
                  <p className="mb-30">Notre service d&apos;estimation gratuite vous permet d&apos;obtenir une évaluation précise du coût et des besoins pour l&apos;installation ou la maintenance de votre système de CCTV. Nous offrons une consultation sur place pour examiner votre propriété et comprendre vos exigences spécifiques en matière de sécurité. Voici comment fonctionne notre service d&apos;estimation gratuite :</p>
                  
                  <p className="mt-30 mb-30">Nous nous engageons à fournir une estimation transparente et détaillée, vous aidant à prendre des décisions éclairées sans aucune obligation financière.</p>

                  <h4 className="mb-20">Processus d&apos;estimation</h4>

                  <p className="mb-30">Notre processus d&apos;estimation est conçu pour être rapide, précis et sans tracas pour nos clients. Voici les étapes clés :</p>
                  <div className="service-process-wrap">
                    <div className="service-process">
                      <div className="service-process_num">01</div>
                      <div className="service-process_centent">
                        <h5 className="service-process_title">Prise de rendez-vous :</h5>
                        <p className="service-process_text">Contactez-nous pour planifier une visite gratuite à votre propriété.</p>
                      </div>
                    </div>
                    <div className="service-process">
                      <div className="service-process_num">02</div>
                      <div className="service-process_centent">
                        <h5 className="service-process_title">Évaluation sur place :</h5>
                        <p className="service-process_text">Un expert en sécurité effectue une inspection détaillée pour évaluer vos besoins.</p>
                      </div>
                    </div>
                    <div className="service-process">
                      <div className="service-process_num">03</div>
                      <div className="service-process_centent">
                        <h5 className="service-process_title">Analyse et devis :</h5>
                        <p className="service-process_text">Nous fournissons un devis détaillé, expliquant les coûts et les recommandations pour votre système de sécurité.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-4">
              <Aside />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
