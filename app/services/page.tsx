import { NoticeWrapper } from "@/components/NoticeWrapper";

export default function Services() {
  return (
    <>
      <section className=" space">
        <div className="container">
        <NoticeWrapper title={'Nos Services'} />
          <div className="row gy-4">
            {
              [
                { title: 'Installation', slug: '/services/installation', image: '/assets/illustrations/cctv_installation.svg' },
                { title: 'Maintenance', slug: '/services/maintenance', image: '/assets/illustrations/cctv_thief.svg' },
                { title: 'Estimation', slug: '/services/estimation', image: '/assets/illustrations/cctv_urbans.svg' },
                { title: 'No Produits', slug: '/items', image: '/assets/illustrations/cctv_equipment.svg' }
              ].map((e, index) => (
                <div className="col-md-6 col-xl-3" key={index}>
                  <div className="service-card th-ani">
                    <div className="box-img global-img" style={{ height: '12rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={e.image} alt={ e.title } />
                    </div>
                    <div className="box-content">
                      <h3 className="box-title"><a href={e.slug}>{ e.title }</a></h3>
                    </div>
                    <a href={e.slug} className="line-btn">Read Details<i className="fa-regular fa-arrow-right"></i></a>
                  </div>
                </div>

              ))
            }
            

          </div>
        </div>
      </section>
    </>
  )
}