import { Campus } from "./types";

interface Term {
  code: string;
  description: string;
}

interface GetTerms {
  terms: Term[];
  cookie: string;
}

export const getTerms = async (noTerms: number = 10): Promise<GetTerms> => {
  const response = await fetch(
    "https://nubanner.neu.edu/StudentRegistrationSsb/ssb/classSearch/getTerms?" +
      new URLSearchParams({
        searchTerm: "",
        offset: "1",
        max: noTerms.toString(),
      })
  );
  const terms = await response.json();

  const cookieText = response.headers.get("set-cookie");
  // TODO: ensure cookietext not null
  const cookie = parseCookie(cookieText!);

  return {
    terms,
    cookie: "",
  };
};

const parseCookie = (cookieText: string): string => {
  /* 
  Convert cookie from
  JSESSIONID=...; Path=/...; Secure; ..., nubanner-cookie=...;
  to
  JSESSIONID=...; nubanner-cookie=...;
  */
  const jssessionid = cookieText.split("JSESSIONID=")[1].split(";")[0];
  const nubannercookie = cookieText.split("nubanner-cookie=")[1].split(";")[0];
  const cookieToSend = `JSESSIONID=${jssessionid}; nubanner-cookie=${nubannercookie};`;
  return cookieToSend;
};

export const getTerm = async (termCode: string): Promise<Term | undefined> => {
  const { terms } = await getTerms(20);
  return terms.find((term) => term.code == termCode);
};

export const getLatestTerm = async (
  campus: Campus
): Promise<Term | undefined> => {
  /* Find the latest term of the campus (NU, CPS, or LAW) */

  const { terms } = await getTerms(10);

  if (campus == "nu") {
    return terms.find(
      (term) =>
        !term.description.toLowerCase().includes("cps") &&
        !term.description.toLowerCase().includes("law")
    );
  } else {
    return terms.find((term) =>
      term.description.toLowerCase().includes(campus)
    );
  }
};
