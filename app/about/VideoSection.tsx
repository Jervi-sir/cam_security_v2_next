export const VideoSection = () => {
  return (
    <>
      <div className="space" data-bg-src="assets/img/bg/video_bg_1.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="title-area text-center">
                <span className="sub-title">Watch Video</span>
                <h2 className="sec-title">We help our clients realize their business ideas and achieve great results
                </h2>
              </div>
            </div>
          </div>
          <div className="video-box1 th-anim">
            <img src="assets/img/normal/video_1.jpg" alt="video" />
            <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="play-btn popup-video"><i className="fa-sharp fa-solid fa-play"></i></a>
          </div>
        </div>
      </div>
    </>
  )
}