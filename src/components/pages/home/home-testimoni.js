const testimoniList = [
  {
    name: "John",
    occupation: "Designer",
    message:
      "I like the way that the production clothes from this store is packaged and delivered",
  },
  {
    name: "Soleh",
    occupation: "Designer",
    message:
      "I like the way that the production clothes from this store is packaged and delivered",
  },
  {
    name: "Yazid",
    occupation: "Designer",
    message:
      "I like the way that the production clothes from this store is packaged and delivered",
  },
];

export default function HomeTestimoni() {
  return (
    <section>
      <div className="container">
        <div className="row">
          {testimoniList.map((item) => (
            <div className="col-lg-4">
              <div
                className="py-2 px-4"
                style={{ border: "1px solid #232323", borderRadius: 4 }}
              >
                {/* Content atas */}
                <div className="d-flex gap-3">
                  {/* thumbnail */}
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      backgroundColor: "gray",
                    }}
                  />

                  {/* nama dan profesi */}
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.occupation}</p>
                  </div>
                </div>

                {/* content bawah */}
                <div>
                  <p className="m-0">{item.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
