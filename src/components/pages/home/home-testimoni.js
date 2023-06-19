import { useEffect, useState } from "react";

export default function HomeTestimoni({ testimoniData, handleAddTestimoni,bannerData }) {
  return (
    <section>
      <div className="container">
        <div className="row">
          {testimoniData.map((item) => (
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
        <button onClick={handleAddTestimoni}>Add Testimoni</button>
        <p>title banner adalah: {bannerData.title}</p>
      </div>
    </section>
  );
}
