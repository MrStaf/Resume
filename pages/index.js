import Cogs from "./../assets/icons/cogs-solid.svg";
import Language from "./../assets/icons/language-solid.svg";
import Graduation from "./../assets/icons/graduation-cap-solid.svg";
import Briefcase from "./../assets/icons/briefcase-solid.svg";
import Check from "./../assets/icons/check-circle-regular.svg";
import Git from "./../assets/icons/github-square-brands.svg";
import LinkedIn from "./../assets/icons/linkedin-brands.svg";
import Header from "./../components/header";
import Head from 'next/head';

import { getData } from '../functions/getData';

const API_URL = "http://144.76.222.120:8055/items/";
const ASSETS_URL = "http://144.76.222.120:8055/assets/";


export default function Resume({exp, skills, formations, perso_info}) {
  
  return (
    <div style={{background:"var(--color-bg)",fontFamily:"Quicksand",color:"var(--color-primary)"}}>
      <Head>
        <title>Resume Benoît Fage</title>
      </Head>
      <Header />
      <main className="px-16 pt-12 flex flex-col">
        <div className="flex flex-row">
          <img width="200px" height="200px" src={ASSETS_URL + perso_info?.profile_picture} />
          <div className="ml-16 mt-20 text-2xl">
            <span style={{fontFamily:"Degular"}} className="text-4xl font-bold">Hi, I'm Benoît</span><br/>
            <span>{perso_info?.job_situation}</span><br/>
            <span className={`font-thin ${perso_info?.available?"text-green-800":"text-red-800"}`}>{perso_info?.available?"Open to work":"Not available"}</span>
          </div>
        </div>
        <div className="flex flex-row">
          <div style={{width:"200px"}}>
            <div className="text-center text-2xl pt-6 border-b border-black pb-2" style={{ width: "200px" }}>Personal Info</div>
            <div>
              <p className="mt-2">{perso_info?.email}</p>
              <p className="mt-2">{perso_info?.phone_number}</p>
              <p className="mt-2">{perso_info?.perso_address}</p>
              <span className="flex flex-row justify-around mt-2">
                <a href={perso_info?.github_link} target='_blank' className="cursor-pointer">
                  <Git className="icon-medium" />
                </a>
                <a href={perso_info?.linkedin_link} target='_blank' className="cursor-pointer">
                  <LinkedIn className="icon-medium" />
                </a>
              </span>
            </div>
          </div>
          <div className="w-full pt-8 grid grid-cols-11">
            <div className="flex flex-col items-end pr-6 col-span-5">
              <span className="text-3xl uppercase font-semibold">Experience</span>
              <ul>
                {exp?.map((el) => {
                  return (
                       <li key={el.id} className="flex flex-row mt-2">
                        <div className="text-right mr-6">
                        <span className="text-2xl">{el.job_position} - {el.end_date.split("-")[0]}</span><br/>
                        <span>2 Months - {el.company_name}</span>
                      </div>
                      <a href={el.linkedin_company}>
                        <img height="50px" width="50px" src={ASSETS_URL + el.company_photo}/>
                      </a>
                      </li>
                  )
                })}
              </ul>
            </div>
            <div className="col-end-7 justify-start items-center flex flex-col pb-2">
              <Briefcase className="icon-medium mb-2"/>
              <div className="border-r-2 border-black h-full"></div>
            </div>
            <div className="col-start-6 justify-start items-center flex flex-col pb-2">
              <Graduation className="icon-medium mb-2" />
              <div className="border-r-2 border-black h-full"></div>
            </div>
            <div className="flex flex-col pl-6 col-span-5">
              <span className="text-3xl uppercase font-semibold">Formation</span>
              <ul>
                {formations?.map((el) => {
                  return (
                    <li key={el.id} className="flex flex-row mt-2">
                      <a href={el.school_linkedin} target="_blank"><img height="50px" width="50px" src={ASSETS_URL + el.school_img}/></a>
                  <div className="text-left ml-6">
                        <span className="text-2xl">{`${el.school_name} - ${el.begin_date.split("-")[0]} / ${el.end_date.split("-")[0]}`}</span><br/>
                        <span>{el.formation_title}</span>
                  </div>
                </li>
                  )
                })}
              </ul>
            </div>
            <div className="flex flex-col items-end pr-6 col-span-5">
              <span className="text-3xl uppercase font-semibold">Languages</span>
              <ul className="text-xl">
                <li className="text-right mr-6 mt-2">
                    French ~ Native
                </li>
                <li className="text-right mr-6 mt-2">
                    English ~ B2
                </li>
                <li className="text-right mr-6 mt-2">
                    Korean ~ A1
                </li>
              </ul>
            </div>
            <div className="col-end-7 justify-start items-center flex flex-col pb-2">
              <Language className="icon-medium mb-2" />
              <div className="border-r-2 border-black h-full"></div>
            </div>
            <div className="col-start-6 justify-start items-center flex flex-col pb-2">
              <Cogs className="icon-medium mb-2" />
              <div className="border-r-2 border-black h-full"></div>
            </div>
            <div className="flex flex-col pl-6 col-span-5">
              <span className="text-3xl uppercase font-semibold">Skills</span>
              <ul className="grid grid-cols-2">
                {skills?.map((el) => {
                  return (
                    <li key={el.id} className="flex flex-row mt-2 items-center justify-start">
                      {el.skills_img ? <img className="icon-small" src={ASSETS_URL + el.skills_img} />:<div className="icon-small"></div>}
                      <span className="mx-4">{el.skill_name}</span>
                      {el.linkedin_certificate ? <a href={el.linkedin_link} target="_blank"><Check className="icon-tiny" /></a>:""}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <footer className="pt-8">

      </footer>
    </div>
  )
}

export const getServerSideProps = async ctx => {
  const exp = await getData(API_URL + "experiences")
    .then(data => {
      return(data.data);
    })
    .catch(err => {
      console.log(err);
    })
  const skills = await getData(API_URL + "skills")
    .then(data => {
      return(data.data);
    })
    .catch(err => {
      console.log(err);
    })
  const formations = await getData(API_URL + "formation")
    .then(data => {
      return(data.data);
    })
    .catch(err => {
      console.log(err);
    })
  const perso_info = await getData(API_URL + "perso_info")
    .then(data => {
      return(data.data);
    })
    .catch(err => {
      console.log(err);
    })
  return {props: {exp: exp, skills: skills,formations:formations, perso_info:perso_info}}
}