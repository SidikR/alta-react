export default function HomeBanner({ bannerData }) {
  return (
    <section className="py-5 position-relative z-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="w-100"
              style={{ backgroundColor: "gray", height: 335 }}
            />
          </div>
          <div className="col-lg-6">
            <div className="d-flex flex-column justify-content-center h-100">
              <h1 className="fw-bold fs-1">{bannerData.title}</h1>
              <p className="fs-6">{bannerData.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
