'use client'

import { NoticeWrapper } from "@/components/NoticeWrapper";
import { MapSection } from "./MapSection";
import { Settings } from "@/utils/db";
import { useState } from "react";
import { supabaseClient } from "@/utils/supabase";
import Lottie from "react-lottie";
import animationData from '@/public/assets/lottiefiles/success.json'
import { Bars } from "react-loading-icons";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessfull, setIsSuccessfull] = useState(false);

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [service, setService] = useState(null);
  const [message, setMessage] = useState(null);

  const submit = async (event) => {
    if (name.length < 1) return;
    if (email.length < 1) return;
    if (phoneNumber.length < 1) return;
    if (service.length < 1) return;
    if (message.length < 1) return;
    event.preventDefault();
    setIsSubmitting(true);
    const { data, error } = await supabaseClient
    .from('contactus')
    .insert([
      { 
        name: name, 
        email: email, 
        phone_number: phoneNumber, 
        service: service,
        message: message,
      },
    ])
    .select()
    
    if (error) {
      console.error('error fetching user', error);
      return;
    }

    setIsSubmitting(false);
    setIsSuccessfull(true);
    return data;
  }

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="space-top space-extra-bottom">
        <div className="container">
          <NoticeWrapper title={'Contactez-nous'} />
          <div className="row gy-40 flex-row-reverse">
            <div className="col-lg-6 col-xl-7">
              <form action="#" className="contact-form input-smoke ajax-contact">
                {
                    isSuccessfull
                    ?
                    <div>
                      <Lottie options={defaultOptions} height={260} width={260} />
                      <h4 className='text-center'>Nous Vous Contacterons dès que possible</h4>
                    </div>
                    :
                    <div style={{position: 'relative'}}>
                      {
                        isSubmitting
                        &&
                        <div style={{
                          position: 'absolute', top: 0, left: 0, zIndex: 99, 
                          width: '100%', height: '100%', 
                          display: 'flex', justifyContent: 'center', alignItems: 'center',
                          backdropFilter: 'blur(4px)'
                        }}>
                          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Bars stroke="#3e66f3" fill="#3e66f3" />
                            <h5 style={{ marginTop: '10px', color: '#3e66f3' }}>Veuillez Patienter</h5>
                          </div>
                        </div>
                      }
                      <div className="row">
                        <div className="form-group col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Votre nom"
                            required
                            onChange={e => setName(e.target.value)}
                            value={name}
                          />
                          <i className="fal fa-user"></i>
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Adresse e-mail"
                            required
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                          />
                          <i className="fal fa-envelope"></i>
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="Numéro de téléphone"
                            required
                            onChange={e => setPhoneNumber(e.target.value)}
                            value={phoneNumber}
                          />
                          <i className="fal fa-phone"></i>
                        </div>
                        <div className="form-group col-md-6">
                          <select
                            className="form-select nice-select"
                            onChange={e => setService(e.target.value)}
                            value={service}
                          >
                            <option value="" disabled selected hidden>Sélectionnez le service</option>
                            <option value="CCTV Installation">Installation de CCTV</option>
                            <option value="CCTV Maintenance">Maintenance de CCTV</option>
                            <option value="CCTV Upgrade">Mise à niveau de CCTV</option>
                            <option value="Security Assessment">Évaluation de sécurité</option>
                          </select>
                        </div>
                        <div className="form-group col-12">
                          <textarea onChange={e => setMessage(e.target.value)} cols={30} rows={3} className="form-control" placeholder="Votre message">{message}</textarea>
                          <i className="fal fa-pencil"></i>
                        </div>
                        <div className="form-btn col-12">
                          <button onClick={submit} className="th-btn" style={{background: isSubmitting ? 'black' : ''}} disabled={isSubmitting ? true : false} >Envoyer le message</button>
                        </div>
                      </div>
                    </div>
                }

                <p className="form-messages mb-0 mt-3"></p>
              </form>
            </div>
            <div className="col-lg-6 col-xl-5">
              <div className="contact-info-wrap">
                <div className="title-area mt-n2 mb-10">
                  <span className="sub-title style1">Contactez-nous</span>
                  <h3 className="sec-title">Collaborons pour renforcer votre sécurité</h3>
                  <p className="">Merci de votre intérêt pour notre agence de CCTV. Nous sommes impatients de discuter avec vous et d&apos;évaluer vos besoins en sécurité.</p>
                </div>
                <div className="contact-info">
                  <div className="contact-info_icon"><i className=""><img src="assets/img/icon/phone.svg" alt="" /></i>
                  </div>
                  <div className="media-body">
                    <span className="contact-info_title">Appelez-nous pour des renseignements</span><span className="contact-info_text"><a href={`tel:${Settings.phone_number}`}>{Settings.phone_number}</a></span>
                  </div>
                </div>
                <div className="contact-info">
                  <div className="contact-info_icon"><i className=""><img src="assets/img/icon/message.svg" alt="" /></i>
                  </div>
                  <div className="media-body">
                    <span className="contact-info_title">Envoyez un email à tout moment</span><span className="contact-info_text"><a href="mailto:info@cctv-solutions.com">{Settings.email}</a></span>
                  </div>
                </div>
                <div className="contact-info">
                  <div className="contact-info_icon"><i className=""><img src="assets/img/icon/location.svg" alt="" /></i>
                  </div>
                  <div className="media-body">
                    <span className="contact-info_title">Visitez notre bureau</span><span className="contact-info_text">{Settings.full_location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MapSection />
    </>
  )
}
