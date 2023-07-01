import { useContext, useEffect, useState } from "react";
import Layout from "../../global/layout";
import axios from "axios";
import { fetchAPI, fetchAPIGraphQL } from "src/helper/hooks";
import moment from "moment";
import { Q_CHARACTERS } from "src/helper/query";
import CardComments from "./card-comments";
import { useDispatch, useSelector } from "react-redux";
import { setJokes } from "src/store/slices/jokes";
import { ContextUser } from "src/context";

export default function Comments() {
  // global state
  const dispatch = useDispatch();
  const { state, setState } = useContext(ContextUser);
  console.log(state?.me);
  //state
  const [query, querySet] = useState("");
  const [isLoading, isLoadingSet] = useState(false);

  async function fetchJokes(e) {
    e.preventDefault();
    isLoadingSet(true);
    try {
      const data = await fetchAPI(`/search?query=${query}`);
      dispatch(setJokes(data));
      isLoadingSet(false);
    } catch (error) {
      isLoadingSet(false);
      console.log(error);
    }
  }

  async function fetchCharacters() {
    try {
      const { data } = await fetchAPIGraphQL("", "post", Q_CHARACTERS);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <Layout>
      <button
        onClick={() =>
          setState({
            me: {
              displayName: "Salman",
              isVerified: true,
            },
          })
        }
        className="btn btn-primary"
      >
        Ubah User
      </button>
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
          {!isLoading && <CardComments />}
        </div>
      </section>

      <section></section>
    </Layout>
  );
}
