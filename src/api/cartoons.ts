/** @format */

import axios from "axios";

const API_URL = "https://api.sampleapis.com/cartoons/cartoons2D";

export interface Cartoon {
  title: string;
  year: number;
  creator: string[];
  rating?: string;
  genre: string[];
  image?: string;
  wikiUrl?: string;
}

export async function fetchCartoons(): Promise<Cartoon[]> {
  const res = await axios.get<Cartoon[]>(API_URL);
  return res.data;
}
