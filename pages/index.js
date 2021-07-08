import Cogs from "./../assets/icons/cogs-solid.svg";
import Language from "./../assets/icons/language-solid.svg";
import Graduation from "./../assets/icons/graduation-cap-solid.svg";
import Briefcase from "./../assets/icons/briefcase-solid.svg";
import Check from "./../assets/icons/check-circle-regular.svg";
import Git from "./../assets/icons/github-square-brands.svg";
import LinkedIn from "./../assets/icons/linkedin-brands.svg";
import Header from "./../components/header";
import Head from "next/head";

import { getData } from "../functions/getData";

const API_URL = "https://content.benoit.fage.fr/items/";
const ASSETS_URL = "https://content.benoit.fage.fr/assets/";

export default function Resume({
  exp,
  skills,
  formations,
  perso_info,
  languages,
}) {
  return (
    <div
      style={{
        background: "var(--color-bg)",
        fontFamily: "Quicksand",
        color: "var(--color-primary)",
      }}
    >
      <Head>
        <title>Resume Benoît Fage</title>
      </Head>
      <Header />
      <main className="flex flex-col px-2 pt-8 sm:pt-12 sm:px-16 print:pt-2">
        <div className="flex flex-row">
          <img
            width="200px"
            height="200px"
            className="object-contain"
            src={ASSETS_URL + perso_info?.profile_picture}
          />
          <div className="ml-4 text-2xl sm:mt-20 sm:ml-16">
            <span
              style={{ fontFamily: "Degular" }}
              className="text-4xl font-bold"
            >
              Hi, I'm Benoît
            </span>
            <br />
            <span>{perso_info?.job_situation}</span>
            <br />
            <span
              className={`font-thin print:hidden ${
                perso_info?.available ? "text-green-800" : "text-red-800"
              }`}
            >
              {perso_info?.available ? "Open to work" : "Not available"}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center print:items-start sm:items-start sm:flex-row">
          <div style={{ width: "200px" }}>
            <div
              className="pt-6 pb-2 text-2xl text-center border-b border-black print:pt-1 print:text-xl"
              style={{ width: "200px" }}
            >
              Personal Info
            </div>
            <div className="print:text-lg">
              <p className="mt-2 print:mt-0">{perso_info?.email}</p>
              <p className="mt-2 print:mt-0">{perso_info?.phone_number}</p>
              <p className="mt-2 print:mt-0">{perso_info?.perso_address}</p>
              <span className="flex flex-row justify-around mt-2 print:hidden">
                <a
                  href={perso_info?.github_link}
                  target="_blank"
                  className="cursor-pointer"
                >
                  <Git className="icon-medium" />
                </a>
                <a
                  href={perso_info?.linkedin_link}
                  target="_blank"
                  className="cursor-pointer"
                >
                  <LinkedIn className="icon-medium" />
                </a>
              </span>
            </div>
          </div>
          <div className="grid w-full grid-cols-11 pt-8 print:pt-0">
            <div className="flex flex-col items-end col-span-5 pr-6 print:col-span-4">
              <span className="mt-1 text-xl font-semibold uppercase sm:text-3xl">
                Experience
              </span>
              <ul>
                {exp?.map((el) => {
                  return (
                    <li
                      key={el.id}
                      className="flex flex-col mt-2 sm:flex-row print:flex-row"
                    >
                      <div className="mr-2 text-left sm:mr-6 sm:text-right print:text-right">
                        <span className="text-lg sm:text-2xl">
                          {el.job_position} - {el.end_date.split("-")[0]}
                        </span>
                        <br />
                        <span>2 Months - {el.company_name}</span>
                      </div>
                      <a
                        href={el.linkedin_company}
                        className="order-first sm:order-last print:order-last"
                      >
                        <img
                          className="object-contain h-50 w-50"
                          src={ASSETS_URL + el.company_photo}
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col items-center justify-start col-end-7 pb-2 print:col-end-6">
              <Briefcase className="mb-2 icon-medium" />
              <div className="h-full border-r-2 border-black"></div>
            </div>
            <div className="flex flex-col items-center justify-start col-start-6 pb-2 print:col-start-5">
              <Graduation className="mb-2 icon-medium" />
              <div className="h-full border-r-2 border-black"></div>
            </div>
            <div className="flex flex-col col-span-5 pl-6 print:col-span-6">
              <span className="mt-1 text-xl font-semibold uppercase sm:text-3xl">
                Formation
              </span>
              <ul>
                {formations?.map((el) => {
                  return (
                    <li
                      key={el.id}
                      className="flex flex-col items-start mt-2 sm:flex-row print:flex-row"
                    >
                      <img
                        className="object-contain h-50 w-50"
                        src={ASSETS_URL + el.school_img}
                      />
                      <div className="text-sm text-left sm:ml-6 print:ml-6">
                        <span className="text-lg sm:text-2xl">{
                          el.school_linkedin ? (
                            <a href={el.school_linkedin} target="_blank">
                              {el.school_name}
                            </a>
                          ) : (
                            el.school_name
                          )
                        } - {el.begin_date.split("-")[0]} / {
                          el.end_date.split("-")[0]
                        }</span>
                        <br />
                        <span>{el.formation_title}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col items-end col-span-5 pr-6 print:col-span-4">
              <span className="mt-1 text-xl font-semibold uppercase sm:text-3xl">
                Languages
              </span>
              <ul className="text-lg sm:text-2xl">
                {languages?.map((el) => {
                  return (
                    <li key={el.id} className="mt-2 mr-6 text-right print:mt-0">
                      {el.languages_name} ~ {el.languages_level}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col items-center justify-start col-end-7 pb-2 print:col-end-6">
              <Language className="mb-2 icon-medium" />
              <div className="h-full border-r-2 border-black"></div>
            </div>
            <div className="flex flex-col items-center justify-start col-start-6 pb-2 print:col-start-5">
              <Cogs className="mb-2 icon-medium" />
              <div className="h-full border-r-2 border-black"></div>
            </div>
            <div className="flex flex-col col-span-5 pl-6 print:col-span-6">
              <span className="mt-1 text-xl font-semibold uppercase sm:text-3xl">
                Skills
              </span>
              <ul className="grid grid-cols-1 mt-4 sm:mt-0 print:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {skills?.map((el) => {
                  return (
                    <li
                      key={el.id}
                      className="flex flex-row items-center justify-start mt-2 print:mt-1"
                    >
                      {el.skills_img ? (
                        <img
                          className="icon-small"
                          src={ASSETS_URL + el.skills_img}
                        />
                      ) : (
                        <div className="icon-small"></div>
                      )}
                      <span className="mx-1 sm:mx-4 print:text-sm">
                        {el.skill_name}
                      </span>
                      {el.linkedin_certificate ? (
                        <a href={el.linkedin_link} target="_blank">
                          <Check className="icon-tiny print:hidden"/>
                        </a>
                      ) : (
                        ""
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <footer className="pt-8 text-center print:hidden">
        Hosted by <a href="https://vercel.com/">Vercel</a>, source code is available <a href="https://github.com/MrStaf/Resume">here</a>
      </footer>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const exp = await getData(API_URL + "experiences")
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      console.log(err);
    });
  const skills = await getData(API_URL + "skills")
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      console.log(err);
    });
  const formations = await getData(API_URL + "formation")
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      console.log(err);
    });
  const perso_info = await getData(API_URL + "perso_info")
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      console.log(err);
    });
  const languages = await getData(API_URL + "languages")
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      exp: exp,
      skills: skills,
      formations: formations,
      perso_info: perso_info,
      languages: languages,
    },
  };
};
