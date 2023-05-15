import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "../src/components/Link";
import { faQ } from "@fortawesome/free-solid-svg-icons";

export async function getStaticProps() {
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
  const faq = await fetch(FAQ_API_URL)
    .then((respostaDoServidor) => {
      return respostaDoServidor.json();
    })
    .then((resposta) => {
      return resposta;
    });

  return {
    props: {
      qualquercoisa: "que eu passar aqui",
      faq,
    }, //will be passed to the page component as props
  };
}

export default function FAQPage({ faq }) {
  console.log(faq);
  //     const [faq, setFaq] = useState([])
  //     useEffect(() => {

  //   }, []);

  return (
    <div>
      <Head>
        <title>Página FAQ</title>
      </Head>
      <h1>Página de FAQ</h1>
      <Link href="/" passhref>
        Ir para Home Page
      </Link>
      <ul>
        {faq.map(({ answer, question }) => (
          <li key={question}>
            <article>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
