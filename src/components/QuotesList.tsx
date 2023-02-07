import { useEffect, useState } from "react";
import { Quotes } from "../models/Quotes";
import { GetQuotesData } from "../services/QuoteService";

export function QuotesList() {
  const [quotes, setQuotes] = useState<Quotes[]>();
  useEffect(() => {
    GetQuotesData().then((data) => setQuotes(data));
  }, []);

  useEffect(() => console.log(quotes), [quotes]);

  let displayQuotes = quotes?.map((quote) => (
    <ul>
      <li>{quote.text}</li>
      <li>{quote.author}</li>
    </ul>
  ));

  return (
    <div className="Quotes">{quotes !== undefined && <>{displayQuotes}</>}</div>
  );
}
