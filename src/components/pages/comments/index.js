import { useEffect, useState } from "react";
import Layout from "../../global/layout";
import axios from "axios";
import { fetchAPI, fetchAPIGraphQL } from "src/helper/hooks";
import moment from "moment";
import { Q_CHARACTERS } from "src/helper/query";

export default function Comments() {
  //state
  const [jokes, jokesSet] = useState([]);
  const [query, querySet] = useState("");
  const [isLoading, isLoadingSet] = useState(false);

  async function fetchJokes(e) {
    e.preventDefault();
    isLoadingSet(true);
    try {
      const data = await fetchAPI(`/search?query=${query}`);      
      jokesSet(data);
      
      isLoadingSet(false);
    } catch (error) {
      isLoadingSet(false);
      console.log(error);
    }
  }

  async function fetchCharacters() {
    try {
      const {data} = await fetchAPIGraphQL("", "post", Q_CHARACTERS);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <Layout>
      <section
        style={{ minHeight: "100vh" }}
        className="d-flex flex-column align-items-center py-5"
      >
        <form onSubmit={fetchJokes} className="mb-4">
          <input
            onChange={({ target: { value } }) => querySet(value)}
            value={query}
            className="input"
          />
          <button type="submit">Get jokes</button>
        </form>

        <div
          className="d-flex flex-column align-items-center gap-4"
          style={{ height: 500, overflow: "auto" }}
        >
          {isLoading && <p>Loading...</p>}
          {!isLoading &&
            jokes.map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#f6f6f6",
                  borderRadius: 8,
                  boxShadow: "1px 2px 3px rgba(0,0,0,.3)",
                  maxWidth: 520,
                  width: "100%",
                }}
                className="p-4"
              >
                <p style={{ fontSize: 12 }}>
                  Created at: {moment(item?.created_at).format("DD/MMM/YYYY")}
                </p>
                <p>{item?.value}</p>
              </div>
            ))}
        </div>
      </section>

      <section></section>
    </Layout>
  );
}
