'use client'
import { useState } from 'react';
import './Estimation.css'
import { usePopup } from '@/context/PopupContext';
import { EstimationProvider, useEstimation } from '@/context/EsitmationContext';

export default function Estimation() {
  const { togglePopup } = usePopup();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const nextStep = () => {
    console.log(currentStep)
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <EstimationProvider>
      <div className="estimation-overlay">
        <div
          className="overlay"
          onClick={togglePopup}
          style={{ cursor: 'pointer' }}
        ></div>
        <div className="estimation">
          <button className='estimation-close' onClick={togglePopup}></button>
          {/* Step 1 */}
          {currentStep === 1 && <Step1Section nextStep={nextStep} />}
          {/* Step 2 */}
          {currentStep === 2 && <Step2Section nextStep={nextStep} prevStep={prevStep} />}
          {/* Step 3 */}
          {currentStep === 3 && <Step3Section nextStep={nextStep} prevStep={prevStep} />}
          {/* Step 4 */}
          {currentStep === 4 && <Step4Section nextStep={nextStep} prevStep={prevStep} />}
          {/* Step 5 */}
          {currentStep === 5 && <Step5Section nextStep={nextStep} prevStep={prevStep} />}
          {/* Step 6 */}
          {currentStep === 6 && <Step6Section nextStep={nextStep} prevStep={prevStep} />}
          {/* Step 7 */}
          {currentStep === 7 && <Step7Section nextStep={nextStep} prevStep={prevStep} />}
          {/* action */}
        </div>
      </div>
    </EstimationProvider>
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
        <h4 className="title">What kind of property are you protecting?</h4>
        <div className="options">
          {
            [
              { value: 'home', span: 'Home', image: '/estimation/step1/home.jpg' },
              { value: 'apartment', span: 'Apartment', image: '/estimation/step1/apartment.jpg' },
              { value: 'business', span: 'Business', image: '/estimation/step1/business.jpg' }
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
        <button className={`th-btn action ${property === null ? 'disabled' : ''}`} onClick={nextStep} disabled={property === null}>Next</button>
      </div>
    </>
  )
}

const Step2Section = ({ nextStep, prevStep }) => {
  return (
    <>
      <div className="step step2" >
        <h4 className="title">Great! You could be eligible to save up to 15% on your home insurance policy.</h4>
        <div className="options">
          <div className="col" >
            <div className="">
              <img src='/estimation/savings.jpg' alt="Image 1" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className='actions'>
        <button className="th-btn action prev" onClick={prevStep}>Previous</button>
        <button className="th-btn action" onClick={nextStep}>Next</button>
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
          <h4 className="title">We've got two setup options. Which do you prefer?</h4>
          <p className="w-75 text-center mx-auto"><b>Tip: </b> No matter which option you choose, live expert assistance via phone call is available to ensure your system is installed correctly.</p>
        </div>
        <div className="options">
          {
            [
              { value: 'home', span: 'Self Install', image: '/estimation/self_install.jpg' },
              { value: 'apartment', span: 'Pro Intsall', image: '/estimation/pro_install.jpg' },
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
        <button className="th-btn action prev" onClick={prevStep}>Previous</button>
        <button className={`th-btn action ${workOption === null ? 'disabled' : ''}`} onClick={nextStep} disabled={ workOption === null}>Next</button>
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
          <h4 className="title">What size is your house?</h4>
        </div>
        <div className="options">
          {
            [
              { value: 'home', span: 'Small', image: '/estimation/house/small_house.jpg', description: 'Typically 1-2 bedrooms' },
              { value: 'medium', span: 'Medium', image: '/estimation/house/medium_house.jpg', description: 'Typically 2- 3 bedrooms' },
              { value: 'large', span: 'Large', image: '/estimation/house/large_house.jpg', description: 'Typically 3-4 bedrooms' },
              { value: 'extra-large', span: 'Extra Large', image: '/estimation/house/extra_large_house.jpg', description: 'Typically 4+ bedrooms' },
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
        <button className="th-btn action prev" onClick={prevStep}>Previous</button>
        <button className={`th-btn action ${sizeHouse === null ? 'disabled' : ''}`} onClick={nextStep} disabled={sizeHouse === null}>Next</button>
      </div>
    </>

  )
}

const Step5Section = ({ nextStep, prevStep }) => {
  const { nbDoors, setNbDoors } = useEstimation();

  const updateProperty = (value) => {
    setNbDoors(value)
  }

  return (
    <>
      <div className="step step5">
        <div>
          <h4 className="title">How many entry doors do you need to protect?</h4>
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
                <span>How many doors?</span>
                <select 
                  className="form-select" 
                  style={{ height: '40px' }} 
                  onClick={(e) => updateProperty(e)}
                  value={nbDoors}
                >
                  <option disabled>..</option>
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
        <button className="th-btn action prev" onClick={prevStep}>Previous</button>
        <button className={`th-btn action ${nbDoors === null ? 'disabled' : ''}`} onClick={nextStep} disabled={nbDoors === null}>Next</button>
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
      <div className="step step6" style={{ height: '90%' }}>
        <div>
          <h4 className="title">What additional protections are you looking for?</h4>
        </div>
        <div className="options multiple">
          {
            [
              { value: 'breakings', span: 'Break-Ins', image: '/estimation/protection_type/breakings.jpg', },
              { value: 'fire', span: 'Fire & Smoke', image: '/estimation/protection_type/fire.jpg', },
              { value: 'frozen_pipes', span: 'Frozen Pipes', image: '/estimation/protection_type/frozen_pipes.jpg', },
              { value: 'water-leaks', span: 'Water Leaks', image: '/estimation/protection_type/leaks.jpg', },
              { value: 'package-theft', span: 'Package theft', image: '/estimation/protection_type/package_theft.jpg', },
              { value: 'ambulance', span: 'Ambulance', image: '/estimation/protection_type/ambulance.jpg', },
              { value: 'outdoor', span: 'Outdoor Video', image: '/estimation/protection_type/outdoor.jpg', },
              { value: 'indoor', span: 'Indoor Video', image: '/estimation/protection_type/indoor.jpg', },
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
        <button className="th-btn action prev" onClick={prevStep}>Previous</button>
        <button className={`th-btn action ${additional === null ? 'disabled' : ''}`} onClick={nextStep} disabled={additional === null}>Next</button>
      </div>
    </>
  )
}

const Step7Section = ({ nextStep, prevStep }) => {
  return (
    <>
      <div className="step step7">
        <div>
          <h4 className="title my-0">Your system recommendation is ready to view</h4>
          <p className="w-75 text-center mx-auto my-0">We’ll also send the full specs straight to your inbox, and keep you posted on the latest news and deals from SimpliSafe.</p>
        </div>
        <div className="options">
          <div className="col" >
            <div className="">
              <img src='/estimation/reveal_2.jpg' alt="Image 1" className="img-fluid" />
            </div>
          </div>
        </div>
        <div>
          <div className="form-group">
            <input style={{ height: "40px" }} type="text" className="form-control" name="name" id="name" placeholder="First Name" required />
          </div>
          <div className="form-group">
            <input style={{ height: "40px" }} type="text" className="form-control" name="email" id="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input style={{ height: "40px" }} type="text" className="form-control" name="phone_number" id="phone_number" placeholder="Phone Number" required />
          </div>
        </div>
      </div>
      <div className='actions'>
        <button className="th-btn action" onClick={nextStep}>Get estimation</button>
      </div>
    </>

  )
}
