'use client'

import { useState } from "react"


export const JoinUs = () => {
  const [experience, setExperience] = useState(true)
  const wilayas = [
    "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar", "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Algiers", "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa", "Relizane", "El M'Ghair", "El Menia", "Ouled Djellal", "Bordj Baji Mokhtar", "Beni Abbes", "Timimoun", "Touggourt", "Djanet", "In Salah", "In Guezzam"
  ];

  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : '');
  };

  const handleClick = () => {
    document.getElementById('hiddenFileInput').click();
  };

  const [age, setAge] = useState(18);

  const handleIncrease = () => {
    setAge(age + 1);
  };

  const handleDecrease = () => {
    if (age > 18) {
      setAge(age - 1);
    }
  };

  return (
    <section className="appointment-sec space-extra3 th-radius overflow-hidden space-top">
      <div className="container">
        <div className="appointment-wrapper">
          <div className="appointment-area-wrapper">
            <form action="mail.php" method="POST" className="appointment-form input-smoke ajax-contact">
              <div className="title-area mb-50 text-center">
                <span className="sub-title">Vous cherchez du Travail avec Nous ?</span>
                <h2 className="sec-title">Discutons de votre portfolio</h2>
              </div>
              <div className="row">
                <div className="form-group col-lg-4">
                  <input type="text" className="form-control" name="name" placeholder="Nom et Prénom*" required />
                </div>
                <div className="form-group col-lg-4">
                  <input type="tel" className="form-control" name="number"  placeholder="Numero de Telephone*" required />
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
                    <div>
                      <button type="button" onClick={handleIncrease} className="btn-secondary px-3"><i className="fa-solid fa-chevron-up"></i></button>
                      <button type="button" onClick={handleDecrease} className="btn-secondary px-3"><i className="fa-solid fa-chevron-down"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="appointment-radio-wrapper">
                  <div className="appointment-radio align-items-center d-flex">
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
                  <select className="form-control" name="yearsExperience" id="yearsExperience">
                    <option value="0">Select Years of Experience</option>
                    <option value="1">Less than 1 year</option>
                    <option value="2">1-2 years</option>
                    <option value="3">3-5 years</option>
                    <option value="4">5-10 years</option>
                    <option value="5">More than 10 years</option>
                  </select>
                </div>
                <div className="form-group col-lg-6">
                  <select className="form-control" name="wilaya" id="wilaya" required defaultValue="">
                    <option value="" disabled>Select Wilaya</option>
                    {wilayas.map((wilaya, index) => (
                      <option key={index} value={wilaya}>{`${index + 1 < 10 ? '0' : ''}${index + 1} - ${wilaya}`}</option>
                    ))}
                  </select>
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
                        onClick={handleClick}
                        className="th-btn"
                        style={{ height: '100%', borderRadius: 0 }}
                      >
                        Choisir un Fichier
                      </button>
                      <input
                        type="file"
                        id="hiddenFileInput"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                      />
                      {
                        fileName
                          ?
                          <div className="file-name">{fileName}</div>
                          :
                          <div className="file-name" style={{ opacity: '0.5' }}>Ajouter votre CV.</div>
                      }
                    </div>
                  </div>
                }
              </div>

              <div className="form-btn col-12">
                <button className="th-btn btn-fw">Submit Reservation</button>
              </div>
              <p className="form-messages mb-0 mt-3"></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}