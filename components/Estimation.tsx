'use client'
import { useState } from 'react';
import '../app/Estimation.css'
import { usePopup } from '@/context/PopupContext';
import { EstimationProvider, useEstimation } from '@/context/EsitmationContext';
import { redirect } from "next/navigation";
//https://quiz.simplisafe.com/kaedkhe4?L=Full+Page&uid=&deferred=true&wizardType=embedded&uid=d70b0331-62c9-4d8c-92fb-1934a57e3a4f
export default function EstimationComponent() {
  return (
    <EstimationProvider>
      <Content />
    </EstimationProvider>
  )
}

const Content = () => {
  const { togglePopup } = usePopup();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const { property, HowManyBusinesses, totalEstimation } = useEstimation();

  const nextStep = () => {
    console.log(currentStep)
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const gotToStep = (step) => {
    setCurrentStep(step);
  }

  return (
    <div className="estimation-overlay">
      <div
        className="overlay"
        onClick={togglePopup}
        style={{ cursor: 'pointer' }}
      ></div>
      <div className="estimation-container">
        <div className="estimation">
          <div className='estimation-close'>
            <span>Estimation: {totalEstimation} <small>DA</small> </span>
            <button className='estimation-close-btn' onClick={togglePopup}></button>
          </div>
          {/* Step 1 */}
          {currentStep === 1 && <Step1Section nextStep={nextStep} />}
          {/* Step 2 */}
          {currentStep === 2 && <Step2Section nextStep={nextStep} prevStep={prevStep} />}

          {/* Step 3 */}
          {currentStep === 3 && (
            <>
              {property === 'Maison'      && <Step3Section nextStep={nextStep} prevStep={prevStep} />}
              {property === 'Appartement' && <Step3Section nextStep={nextStep} prevStep={prevStep} />}
              {property === 'Entreprise'  && <Step3EntrepriseSection nextStep={nextStep} prevStep={prevStep} />}
            </>
          )}
          {/* Step 4 */}
          {currentStep === 4 && (
            <>
              {property === 'Maison'      && <Step4Section nextStep={nextStep} prevStep={prevStep} />}
              {property === 'Appartement' && <Step4AppartmentSection nextStep={nextStep} prevStep={prevStep} />}
              {property === 'Entreprise'  && (
                <>
                  { HowManyBusinesses === '1 - 4 locaux' && <Step4SmallBusinessCSection nextStep={nextStep} prevStep={prevStep} gotToStep={gotToStep} /> }
                  { HowManyBusinesses === '5+ locaux' && <Step4EntrepriseCSection nextStep={nextStep} prevStep={prevStep} /> }
                </>
              ) }
            </>
          )}
          {/* Step 5 */}
          {currentStep === 5 && (
            <>
              {property === 'Maison' && <Step5Section nextStep={nextStep} prevStep={prevStep} />}
              {property === 'Appartement' && <Step5Section nextStep={nextStep} prevStep={prevStep} />}
              {property === 'Entreprise'  && (
                <>
                  { HowManyBusinesses === '1 - 4 locaux' && <Step7Section nextStep={nextStep} prevStep={prevStep} /> }
                  { HowManyBusinesses === '5+ locaux' && <Step7Section nextStep={nextStep} prevStep={prevStep} /> }
                </>
              ) }
            </>
          )}
          {/* Step 6 */}
          {currentStep === 6 && <Step6Section nextStep={nextStep} prevStep={prevStep} />}
          {/* Step 7 */}
          {currentStep === 7 && <Step7Section nextStep={nextStep} prevStep={prevStep} />}


        </div>
      </div>
    </div>
  )
}

const Step1Section = ({ nextStep }) => {
  const { property, setProperty } = useEstimation();

  const updateProperty = (value) => {
    setProperty(value)
  }

  return (
    <>
      <div className="step step1">
        <h5 className="title">Quel type de propriété protégez-vous?</h5>
        <div className="options">
          {
            [
              { value: 'Maison', span: 'Maison', image: '/estimation/step1/home.jpg' },
              { value: 'Appartement', span: 'Appartement', image: '/estimation/step1/apartment.jpg' },
              { value: 'Entreprise', span: 'Entreprise', image: '/estimation/step1/business.jpg' }
            ].map((e, index) => (
              <div className="col" key={index} onClick={() => updateProperty(e.value)}>
                <div className={`option-border ${property === e.value ? 'active' : ''}`}>
                  <img src={e.image} alt="Image 1" className="img-fluid" />
                </div>
                <span>{e.span}</span>
              </div>
            ))
          }
        </div>
      </div>
      <div className='actions'>
        <button className={`th-btn action ${property === null ? 'disabled' : ''}`} onClick={nextStep} disabled={property === null}>Suivant</button>
      </div>
    </>
  )
}

const Step2Section = ({ nextStep, prevStep }) => {
  return (
    <>
      <div className="step step2" >
        <h5 className="title">Super! Vous pourriez être admissible à économiser jusqu'à 15 % sur votre contrat d'assurance habitation.</h5>
        <div className="options">
          <div className="col" >
            <div className="">
              <img src='/estimation/savings.jpg' alt="Image 1" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className='actions'>
        <button className="th-btn action prev" onClick={prevStep}>Précédent</button>
        <button className="th-btn action" onClick={nextStep}>Suivant</button>
      </div>
    </>

  )
}

const Step3Section = ({ nextStep, prevStep }) => {
  const { workOption, setWorkOption } = useEstimation();

  const updateProperty = (value) => {
    setWorkOption(value)
  }

  return (
    <>
      <div className="step step3">
        <div>
          <h5 className="title">Nous avons deux options de configuration. Lequel préfères-tu?</h5>
          <p className="w-75 text-center mx-auto">Quelle que soit l'option que vous choisissez, une assistance experte en direct par appel téléphonique est disponible pour garantir que votre système est correctement installé..</p>
        </div>
        <div className="options">
          {
            [
              { value: 'Self Installation', span: 'Self Installation', image: '/estimation/self_install.jpg' },
              { value: 'Pro Installation', span: 'Pro Installation', image: '/estimation/pro_install.jpg' },
            ].map((e, index) => (
              <div className="col" key={index} onClick={() => updateProperty(e.value)}>
                <div className={`option-border ${workOption === e.value ? 'active' : ''}`}>
                  <img src={e.image} alt="Image 1" className="img-fluid" />
                </div>
                <span>{e.span}</span>
              </div>
            ))
          }
        </div>
      </div>
      <div className='actions'>
        <button className="th-btn action prev" onClick={prevStep}>Précédent</button>
        <button className={`th-btn action ${workOption === null ? 'disabled' : ''}`} onClick={nextStep} disabled={ workOption === null}>Suivant</button>
      </div>
    </>

  )
}

const Step4Section = ({ nextStep, prevStep }) => {
  const { sizeHouse, setSizeHouse } = useEstimation();

  const updateProperty = (value) => {
    setSizeHouse(value)
  }

  return (
    <>
      <div className="step step4">
        <div>
          <h5 className="title">What size is your house?</h5>
        </div>
        <div className="options">
          {
            [
              { value: 'Small', span: 'Small', image: '/estimation/house/small_house.jpg', description: '1-2 chambres' },
              { value: 'Moyen', span: 'Moyen', image: '/estimation/house/medium_house.jpg', description: '2- 3 chambres' },
              { value: 'Large', span: 'Large', image: '/estimation/house/large_house.jpg', description: '3-4 chambres' },
              { value: 'Extra Large', span: 'Extra Large', image: '/estimation/house/extra_large_house.jpg', description: '4+ chambres' },
            ].map((e, index) => (
              <div className="col" key={index} onClick={() => updateProperty(e.value)}>
                <div className={`option-border ${sizeHouse === e.value ? 'active' : ''}`}>
                  <img src={e.image} alt="Image 1" className="img-fluid" />
                </div>
                <p>{e.description}</p>
                <span>{e.span}</span>
              </div>
            ))
          }
        </div>
      </div>
      <div className='actions'>
        <button className="th-btn action prev" onClick={prevStep}>Précédent</button>
        <button className={`th-btn action ${sizeHouse === null ? 'disabled' : ''}`} onClick={nextStep} disabled={sizeHouse === null}>Suivant</button>
      </div>
    </>

  )
}

const Step5Section = ({ nextStep, prevStep }) => {
  const { nbDoors, setNbDoors } = useEstimation();

  const updateProperty = (event) => {
    setNbDoors(event.target.value); // Update state based on selected value
  };

  return (
    <>
      <div className="step step5">
        <div>
          <h5 className="title">Combien de portes d’entrée devez-vous protéger?</h5>
        </div>
        <div className="options">
          {
            [
              { value: 'home', image: '/estimation/front_door.jpg' },
            ].map((e, index) => (
              <div className="col" key={index}>
                <div className="option-border">
                  <img src={e.image} alt="Image 1" className="img-fluid" />
                </div>
                <span>Combien de portes?</span>
                <select
                  className="form-select"
                  style={{ height: '40px' }}
                  onChange={updateProperty}
                  value={nbDoors}
                  aria-label="Nombre de portes" // Accessibility
                  defaultValue=""
                >
                  <option value="" disabled>..</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="+10">+10</option>
                </select>
              </div>
            ))
          }
        </div>
      </div>
      <div className='actions'>
        <button className="th-btn action prev" onClick={prevStep}>Précédent</button>
        <button className={`th-btn action ${nbDoors === null ? 'disabled' : ''}`} onClick={nextStep} disabled={nbDoors === null}>Suivant</button>
      </div>
    </>

  )
}

const Step6Section = ({ nextStep, prevStep }) => {
  const { additional, setAdditional } = useEstimation();

  const updateProperty = (value) => {
    setAdditional(value)
  }

  return (
    <>
      <div className="step step6" style={{ height: '87%' }}>
        <div>
          <h5 className="title">Quelles protections supplémentaires recherchez-vous?</h5>
        </div>
        <div className="options multiple">
          {
            [
              { value: 'Effractions', span: 'Effractions', image: '/estimation/protection_type/breakings.jpg', },
              { value: 'Feu et fumee', span: 'Feu et fumée', image: '/estimation/protection_type/fire.jpg', },
              { value: 'Tuyaux geles', span: 'Tuyaux gelés', image: '/estimation/protection_type/frozen_pipes.jpg', },
              { value: 'Fuites d eau', span: 'Fuites d\'eau', image: '/estimation/protection_type/leaks.jpg', },
              { value: 'Vol de colis', span: 'Vol de colis', image: '/estimation/protection_type/package_theft.jpg', },
              { value: 'Ambulance', span: 'Ambulance', image: '/estimation/protection_type/ambulance.jpg', },
              { value: 'Vidéo extérieure', span: 'Vidéo extérieure', image: '/estimation/protection_type/outdoor.jpg', },
              { value: 'Vidéo intérieure', span: 'Vidéo intérieure', image: '/estimation/protection_type/indoor.jpg', },
            ].map((e, index) => (
              <div className="col px-0 text-center" key={index} onClick={() => updateProperty(e.value)}>
                <div className={`option-border ${additional === e.value ? 'active' : ''}`}>
                  <img src={e.image} alt="Image 1" className="img-fluid" />
                </div>
                <span>{e.span}</span>
              </div>
            ))
          }
        </div>
      </div>
      <div className='actions'>
        <button className="th-btn action prev" onClick={prevStep}>Précédent</button>
        <button className={`th-btn action ${additional === null ? 'disabled' : ''}`} onClick={nextStep} disabled={additional === null}>Suivant</button>
      </div>
    </>
  )
}

const Step7Section = ({ nextStep, prevStep }) => {
  const { email, setEmail,
    fullName, setFullName,
    phoneNumber, setPhoneNumber
  } = useEstimation();

  return (
    <>
      <div className="step step7">
        <div>
          <h5 className="title my-0">Votre recommandation système est prête à être affichée</h5>
          <p className="text-center mx-auto my-0">Nous vous enverrons également les spécifications complètes directement dans votre boîte de réception et vous tiendrons au courant des dernières nouvelles.</p>
        </div>
        
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <div className="form-group">
            <input style={{ height: "40px" }} onChange={e => setEmail(e.target.value)} value={email} type="text" className="form-control" placeholder="Nom et Prénom" required />
          </div>
          <div className="form-group">
            <input style={{ height: "40px" }} onChange={e => setFullName(e.target.value)} value={fullName} type="text" className="form-control" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input style={{ height: "40px" }} onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} type="text" className="form-control" placeholder="Numéro de téléphone" required />
          </div>
        </div>
      </div>

      <div style={{textAlign: 'center'}} onClick={nextStep}>
        <button onClick={nextStep} style={{ border: 'none', background: 'transparent', textDecoration: 'underline', cursor: 'pointer' }}>Continuer sans vos details</button>
      </div>

      <div className='actions'>
        <button className="th-btn action prev" onClick={prevStep}>Précédent</button>
        <button className={`th-btn action ${email.length === 0 || (phoneNumber.length === 0 && fullName.length === 0) ? 'disabled' : ''}`} onClick={nextStep} disabled={email.length === 0 || (phoneNumber.length === 0 && fullName.length === 0)}>Obtenir une estimation</button>
      </div>
    </>
  )
}

const Step3EntrepriseSection = ({ nextStep, prevStep }) => {
  const { HowManyBusinesses, setHowManyBusinesses } = useEstimation();

  const updateProperty = (value) => {
    setHowManyBusinesses(value)
  }

  return (
    <>
      <div className="step step3">
        <div>
          <h5 className="title">Combien d’emplacements votre entreprise possède-t-elle?</h5>
        </div>
        <div className="options">
          {
            [
              { value: '1 - 4 locaux', span: '1 ~ 4 locaux', image: '/estimation/business_location/single_location.jpg' },
              { value: '5+ locaux', span: '5+ locaux', image: '/estimation/business_location/multiple_locations.jpg' },
            ].map((e, index) => (
              <div className="col" key={index} onClick={() => updateProperty(e.value)}>
                <div className={`option-border ${HowManyBusinesses === e.value ? 'active' : ''}`}>
                  <img src={e.image} alt="Image 1" className="img-fluid" />
                </div>
                <span>{e.span}</span>
              </div>
            ))
          }
        </div>
      </div>
      <div className='actions'>
        <button className="th-btn action prev" onClick={prevStep}>Précédent</button>
        <button className={`th-btn action ${HowManyBusinesses === null ? 'disabled' : ''}`} onClick={nextStep} disabled={ HowManyBusinesses === null}>Suivant</button>
      </div>
    </>

  )
}

const Step4AppartmentSection = ({ nextStep, prevStep }) => {
  const { nbChambreAppartment, setnbChambreAppartment } = useEstimation();

  const updateProperty = (value) => {
    setnbChambreAppartment(value)
  }

  return (
    <>
      <div className="step step4">
        <div>
          <h5 className="title">What size is your house?</h5>
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
          <img src='/estimation/floorplan.jpg' style={{ width: '200px'}} alt="Image 1" className="img-fluid" />
        </div>
        <div className="options">
          <div style={{maxWidth: '70%'}} >
            <span>Combien de Chambres?</span>
            <select
              className="form-select"
              style={{ height: '40px' }}
              onChange={updateProperty}
              value={nbChambreAppartment}
              aria-label="Nombre de portes" // Accessibility
              defaultValue=""
            >
              <option value="" disabled>..</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </select>
          </div>
        </div>
      </div>
      <div className='actions'>
        <button className="th-btn action prev" onClick={prevStep}>Précédent</button>
        <button className={`th-btn action ${nbChambreAppartment === null ? 'disabled' : ''}`} onClick={nextStep} disabled={nbChambreAppartment === null}>Suivant</button>
      </div>
    </>
  )
}


const Step4SmallBusinessCSection = ({ nextStep, prevStep }) => {
  const { businessType, setBusinessType } = useEstimation();

  const updateProperty = (value) => {
    setBusinessType(value)
  }

  return (
    <>
      <div className="step step3">
        <div>
          <h5 className="title">Quel genre d'entreprise protégez-vous?</h5>
        </div>
        <div className="options" style={{display: 'flex', flexDirection:'column', flexWrap: 'unset', justifyContent: 'center', alignItems: 'center', padding: '0 18px', gap: '10px'}}>
          {
            [
              { value: 'Retail Store', span: 'Retail Store', },
              { value: 'Restaurant', span: 'Restaurant', },
              { value: 'Office', span: 'Office', },
              { value: 'Something else', span: 'Something else', },
            ].map((e, index) => (
              <button 
                className={`th-btn `}
                style={{ background: businessType === e.value ? 'black' : '', maxHeight: '50px'}}
                key={index} onClick={() => updateProperty(e.value)}
              >
                {e.span}
              </button>
            ))
          }
        </div>
      </div>
      <div className='actions'>
        <button className="th-btn action prev" onClick={prevStep}>Précédent</button>
        <button className={`th-btn action ${businessType === null ? 'disabled' : ''}`} onClick={nextStep} disabled={ businessType === null}>Suivant</button>
      </div>
    </>

  )
}

const Step4EntrepriseCSection = ({ nextStep, prevStep }) => {

  return (
    <>
      <div className="step step3">
        <div>
          <h5 className="title">Parlez à nos experts spécialisés dans les entreprises multi-sites?</h5>
        </div>
        <div className="options" style={{display: 'flex', flexDirection:'column', flexWrap: 'unset', justifyContent: 'center', alignItems: 'center', padding: '0 18px', gap: '10px'}}>
          {
            [
              { value: '1 - 4 locaux', span: '1 ~ 4 locaux', image: '/assets/illustrations/cctv_garage.svg' },
            ].map((e, index) => (
              <div key={index} style={{ width: '30rem', height: '30rem'}}>
                <img src={e.image} alt="Image 1" />
              </div>
            ))
          }
        </div>
      </div>
      <div className='actions'>
        <button className="th-btn action prev" onClick={prevStep}>Précédent</button>
        <a className={`th-btn action`} href='/contact' >Contactez Nous</a>
      </div>
      
    </>

  )
}