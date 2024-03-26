'use client'
import { supabaseClient } from '@/utils/supabase'
import './JoinUs.css'
import { useState } from "react"
import { Bars, Rings } from 'react-loading-icons'
import animationData from '../../public/assets/lottiefiles/success.json'
import Lottie from "react-lottie";

export const JoinUs = () => {
  const animationURL = "https://assets3.lottiefiles.com/packages/lf20_JExdDIS87T.json";
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessfull, setIsSuccessfull] = useState(false);

  const [fullName, setFullName] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [age, setAge] = useState(18);
  const [experience, setExperience] = useState(true)
  const [yearsExperience, setYearsExperience] = useState(null);
  const [wilaya, setWilaya] = useState(null);
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState(null);

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [yearsExperienceError, setyearsExperienceError] = useState(false);
  const [wilayaError, setWilayaError] = useState(false);
  const [fileError, setFileError] = useState(false);

  const wilayas = [
    "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar", "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Algiers", "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa", "Relizane", "El M'Ghair", "El Menia", "Ouled Djellal", "Bordj Baji Mokhtar", "Beni Abbes", "Timimoun", "Touggourt", "Djanet", "In Salah", "In Guezzam"
  ];


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
    setFileName(file ? file.name : '');
  };

  const handleFileClick = () => {
    document.getElementById('hiddenFileInput').click();
  };

  const handleIncrease = () => setAge(age + 1);
  const handleDecrease = () => setAge(age > 18 ? age - 1 : 18);

  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/[^\d]/g, '');
    const phoneNumberMatch = numbers.match(/^(\d{0,4})(\d{0,2})(\d{0,2})(\d{0,2})$/);
    const formattedNumber = phoneNumberMatch
      ? `${phoneNumberMatch[1] ? '(' + phoneNumberMatch[1] : ''}${
          phoneNumberMatch[2] ? ') ' + phoneNumberMatch[2] : ''
        }${phoneNumberMatch[3] ? ' ' + phoneNumberMatch[3] : ''}${
          phoneNumberMatch[4] ? ' ' + phoneNumberMatch[4] : ''
        }`
      : '';
    return formattedNumber.trim();
  };
  const handlePhoneChange = (event) => {
    if(event.target.value.length > 15 ) return ;
    const formattedNumber = formatPhoneNumber(event.target.value);
    setPhoneNumber(formattedNumber);
  };
  
  const submitForm = (event) => {
    if(fullName === null) { setNameError(true); return; }
    if(phoneNumber?.length <= 10) { setPhoneError(true); return; }
    if(wilaya === null) { setWilayaError(true); return; }
    if(experience && yearsExperience === null) { setyearsExperienceError(true); return; }
    if(experience && file === null) { setFileError(true); return; }

    event.preventDefault();
    setIsLoading(true);
    setIsSuccessfull(false)
    if(experience) {
      uploadFile().then(e => {
        fetchPortfolio(e).then(e => {
          setIsLoading(false)
          setIsSuccessfull(true)
        })
      })
    } else {
      fetchPortfolio().then(e => {
        setIsLoading(false)
        setIsSuccessfull(true)
      })
    }
  }

  const uploadFile = async () => {
    const avatarFile = file;
    const fileName = file.name;
    const fileExtension = fileName.split('.').pop();

    const filepath = generateFileName(fullName, phoneNumber, wilaya) + '.' + fileExtension;
        
    const { data, error } = await supabaseClient
        .storage
        .from('cv')
        .upload('public/' + filepath, avatarFile);

    if (error) {
        console.error('Upload error', error);
        return;
    }

    const { data: dataURL } = supabaseClient
        .storage
        .from('cv')
        .getPublicUrl('public/' + filepath);

    //return the filepath url
    return dataURL.publicUrl;
  };

  const fetchPortfolio = async (filePath = null) => {
    const { data, error } = await supabaseClient
    .from('porfolios')
    .insert([
      { 
        full_name: fullName, 
        phone_number: phoneNumber, 
        age: age,
        experience_time: yearsExperience,
        wilaya: wilaya,
        cv: filePath,
      },
    ])
    .select()
    
    if (error) {
      console.error('error fetching user', error);
      return;
    }

    return data;
  }

  const generateFileName = (fullName, phoneNumber, wilaya) => {
    const timeStamp = new Date().getTime();
    console.log('timestamp: ' + timeStamp)
    const cleanFullName = fullName.replace(/\s+/g, '_');
    console.log('cleanFullName: ' + cleanFullName)
    const cleanPhoneNumber = phoneNumber.replace(/[^\d]/g, '');
    console.log('cleanPhoneNumber: ' + cleanPhoneNumber)
    const cleanWilaya = wilaya.replace(/\s+/g, '_');
    console.log('cleanWilaya: ' + cleanWilaya)
    const fileName = `${cleanWilaya}_${cleanFullName}_${cleanPhoneNumber}_${timeStamp}`;
    console.log('fileName: ' + fileName)
    return fileName.replace(/:/g, '_'); // Replacing colons from timestamp for file name compatibility
  };
  
  return (
    <section className="appointment-sec space-extra3 th-radius overflow-hidden space-top space-bottom">
      <div className="container">
        <div className="appointment-wrapper">
          <div className="appointment-area-wrapper">
            <div className='appointment-form input-smoke ajax-contact'>
            {
              isSuccessfull
              ?
              <div>
                <Lottie options={defaultOptions} height={260} width={260}  />
                <h4 className='text-center'>Nous Vous Contacterons dès que possible</h4>
              </div>
              :
              <form action="#" method="POST" >
                {
                  isLoading
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
                <div className="title-area mb-50 text-center">
                  <span className="sub-title">Vous cherchez du Travail avec Nous ?</span>
                  <h2 className="sec-title">Discutons de votre portfolio</h2>
                </div>
                <div className="row">
                  <div className="form-group col-lg-4">
                    <input value={fullName} onChange={(e) => {setFullName(e.target.value); setNameError(true)}} type="text" className="form-control" placeholder="Nom et Prénom*" required />
                    { nameError && <ErrorLine /> }
                  </div>
                  <div className="form-group col-lg-4">
                    <input
                      type="tel"
                      className="form-control"
                      name="number"
                      placeholder="(0558) .. .. .."
                      value={phoneNumber}
                      onChange={e => {handlePhoneChange(e); setPhoneError(false)}}
                      required
                    />
                    { phoneError && <ErrorLine /> }
                  </div>
                  
                  <div className="form-group col-lg-4 ">
                    <div className="form-control d-flex p-0 overflow-hidden align-items-center">
                      <span className="px-3">Age*</span>
                      <span >|</span>
                      <input
                        type="number"
                        name="age"
                        style={{border: 'none', textAlign: 'center'}}
                        value={age}
                        onChange={e => setAge(Number(e.target.value))}
                        min="18"
                        required
                      />
                      <div style={{height: '100%'}}>
                        <button type="button" onClick={handleIncrease} className="btn-secondary px-3" style={{ height: '50%', width: '100%', border: 'none' }}><i className="fa-solid fa-chevron-up"></i></button>
                        <button type="button" onClick={handleDecrease} className="btn-secondary px-3" style={{ height: '50%', width: '100%', border: 'none' }}><i className="fa-solid fa-chevron-down"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="appointment-radio-wrapper">
                    <div className="appointment-radio align-items-center d-flex flex-column align-items-start flex-lg-row">
                      <h4 className="sec-title m-0">Avez-vous de l'Expérience Précédente?</h4>
                      <div className="class-name" onClick={() => setExperience(true)}>
                        <input type="radio" id="check1" name="radio-group" checked={experience ? true : false} />
                        <label htmlFor="check1">Oui j'en ai</label>
                      </div>
                      <div className="class-name" onClick={() => setExperience(false)}>
                        <input type="radio" id="check2" name="radio-group" checked={!experience ? true : false} />
                        <label htmlFor="check2">Non, je n'ai pas et </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <h5 className="text-center mb-30">Je veux Rejoindre Une Formation</h5>
                  <div className="form-group col-lg-6">
                    <select onChange={e => {setYearsExperience(e.target.value); setyearsExperienceError(false)}} defaultValue={""} className="form-control" required>
                      <option value="0">Select Years of Experience</option>
                      <option value="1">Less than 1 year</option>
                      <option value="2">1-2 years</option>
                      <option value="3">3-5 years</option>
                      <option value="4">5-10 years</option>
                      <option value="5">More than 10 years</option>
                    </select>
                    { yearsExperienceError && <ErrorLine /> }
                  </div>
                  <div className="form-group col-lg-6">
                    <select onChange={e => {setWilaya(e.target.value); setWilayaError(false)}} className="form-control" required defaultValue={""}>
                      <option value="" disabled>Select Wilaya</option>
                      {wilayas.map((wilaya, index) => (
                        <option key={index} value={wilaya}>{`${index + 1 < 10 ? '0' : ''}${index + 1} - ${wilaya}`}</option>
                      ))}
                    </select>
                    { wilayaError && <ErrorLine /> }
                  </div>
                  {
                    experience
                    &&
                    <div className="form-group col-lg-12">
                      <div
                        className="form-control d-flex flex-row-reverse justify-content-between align-items-center"
                        style={{ paddingRight: 0, overflow: 'hidden' }}
                      >
                        <button
                          type="button"
                          onClick={handleFileClick}
                          className="th-btn"
                          style={{ height: '100%', borderRadius: 0 }}
                        >
                          Choisir un Fichier
                        </button>
                        <input
                          type="file"
                          id="hiddenFileInput"
                          onChange={e => { handleFileChange(e); setFileError(false) }}
                          style={{ display: 'none' }}
                          required
                        />
                        {
                          fileName
                            ?
                            <div className="file-name">{fileName}</div>
                            :
                            <div className="file-name" style={{ opacity: '0.5' }}>Ajouter votre CV.</div>
                        }
                      </div>
                      { fileError && <ErrorLine /> }
                    </div>
                  }
                </div>

                <div className="form-btn col-12">
                  <button className="th-btn btn-fw" onClick={submitForm}>Postuler</button>
                </div>
                <p className="form-messages mb-0 mt-3"></p>
              </form>
            }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ErrorLine = () => {
  return (
    <div style={{width: '100%', height: '2px', background: 'red', marginTop: '10px'}}></div>
  )
}