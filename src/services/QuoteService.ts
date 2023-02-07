import axios from "axios";
import { Quotes } from "../models/Quotes";

export function GetQuotesData(): Promise<Quotes[]> {
  return axios
    .get<Quotes[]>("https://grandcircusco.github.io/demo-apis/quotes.json")
    .then((response) => response.data);
}
