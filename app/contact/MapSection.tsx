import { Settings } from "@/utils/db"

export const MapSection = () => {
  return (
    <>
      <div className="space-bottom">
        <div className="container">
          <div className="contact-map">
            <iframe src={Settings.map_location} allowFullScreen loading="lazy"></iframe>
            <div className="contact-icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}