export const BreadcumbWrapper = ({ title }) => {
  return (
    <>
      <div className="breadcumb-wrapper " data-bg-src="assets/img/bg/breadcumb-bg.jpg">
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">{ title }</h1>
          </div>
        </div>
      </div>
    </>
  )
}