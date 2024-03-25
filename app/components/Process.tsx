import { motion } from 'framer-motion';

export function Process() {
  const boxVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.3, duration: 0.5 }
    })
  };

  return (
    <>
      <section className="space" data-bg-src="assets/img/bg/process_bg_1.jpg">
        <div className="container">
          <div className="title-area text-center text-md-center">
            <span className="sub-title">NOTRE PROCESSUS DE TRAVAIL</span>
            <h2 className="sec-title">Nous Vous Accompagnons durant toutes les Procédures.</h2>
          </div>
          <div className="row">
            {
              [
                { number: '01', image: 'assets/img/icon/process_1_1.svg', title: 'Choisir une Solution', text: 'Nous Vous Guidons tout au long d\'un Processus afin de Trouver Automatiquement le Meilleur Choix.' },
                { number: '02', image: 'assets/img/icon/process_1_2.svg', title: 'Calculer une Estimation', text: 'Nous Supportons un Système qui Estimera tous les Coûts de Votre Solution.' },
                { number: '03', image: 'assets/img/icon/process_1_3.svg', title: 'ِCommancer l\'installation', text: 'Après encaissement, Notre Service Vous Envoie une équipe afin d\'installer les Solutions Choisies.' },
                { number: '04', image: 'assets/img/icon/process_1_4.svg', title: 'Demander une Garantie', text: 'Notre Service offre une garantie à long terme pour toute difficulté de vos demandes.' },
              ].map((e, index) => (
                <motion.div 
                  key={index} 
                  className="col-md-6 col-lg-3 process-box-wrap"
                  variants={boxVariants} 
                  initial="hidden" 
                  animate="visible" 
                  custom={index}
                >
                  <div className="process-box">
                    <div className="process-box_icon">
                      <img src={ e.image } alt="service image" />
                        <p className="box-number">{ e.number }</p>
                    </div>
                    <h3 className="process-box_title">{ e.title }</h3>
                    <p className="process-box_text">{ e.text }</p>
                  </div>
                </motion.div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}