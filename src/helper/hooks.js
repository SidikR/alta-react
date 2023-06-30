import axios from "axios";
import { useState } from "react";

export async function fetchAPIGraphQL(url, method, query) {
  try {
    const { data } = await axios({
      method: method || "get",
      baseURL: "https://rickandmortyapi.com/graphql", // `${process.env.REACT_APP_ENDPOINT}`,
      url: url,
      data: { query },
    });

    if (data) {
      return data;
    }
    return [];
  } catch (error) {
    console.log(error);
  }
}
export async function fetchAPI(url, method) {
  try {
    const { data } = await axios({
      method: method || "get",
      baseURL: `${process.env.REACT_APP_ENDPOINT}`,
      url: url,
    });

    if (data) {
      return data?.result;
    }
    return [];
  } catch (error) {
    console.log(error);
  }
}
