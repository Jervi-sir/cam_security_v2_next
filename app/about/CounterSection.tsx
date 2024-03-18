export const CounterSection = () => {
  return (
    <>
      <div className="bg-theme ">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xl-3 counter-card-wrap style2">
              <div className="counter-card style2">
                <div className="box-icon">
                  <img src="assets/img/icon/counter_card_2_1.svg" alt="Icon" />
                </div>
                <div className="media-body">
                  <h2 className="box-number text-white"><span className="counter-number">40</span>+</h2>
                  <p className="box-text text-white">Our Total Products</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 counter-card-wrap style2">
              <div className="counter-card style2">
                <div className="box-icon">
                  <img src="assets/img/icon/counter_card_2_2.svg" alt="Icon" />
                </div>
                <div className="media-body">
                  <h2 className="box-number text-white"><span className="counter-number">200</span>+</h2>
                  <p className="box-text text-white">Team Members</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 counter-card-wrap style2">
              <div className="counter-card style2">
                <div className="box-icon">
                  <img src="assets/img/icon/counter_card_2_3.svg" alt="Icon" />
                </div>
                <div className="media-body">
                  <h2 className="box-number text-white"><span className="counter-number">68</span>+</h2>
                  <p className="box-text text-white">Satisfied Customers</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 counter-card-wrap style2">
              <div className="counter-card style2">
                <div className="box-icon">
                  <img src="assets/img/icon/counter_card_2_4.svg" alt="Icon" />
                </div>
                <div className="media-body">
                  <h2 className="box-number text-white"><span className="counter-number">99</span>+</h2>
                  <p className="box-text text-white">Awards Winning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}