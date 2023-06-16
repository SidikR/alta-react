export default function HomeBanner() {
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
                <h1 className="fw-bold fs-1">New Arrival</h1>
                <p className="fs-6">Introducing our latest fashion masterpiece, the stunning clothes. Crafted with unparalleled precision and designed to captivate, this extraordinary addition to our collection embodies elegance and modernity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
