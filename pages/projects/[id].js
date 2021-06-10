import Header from "./../../components/header";
import Head from "next/head";
import { getData } from './../../functions/getData';
import Check from "./../../assets/icons/check-circle-regular.svg";

const API_URL = "http://localhost:8055/items/";
const ASSETS_URL = "http://localhost:8055/assets/";

export default function Projects({skills, project, project_skills}) {
  const technologies = project_skills.map((pj_s) => {
    let item;
    skills.forEach((skill) => {
      if (skill.id === parseInt(pj_s.item)) {
        item = skill;
      }
    })
    return (item)
  })
  console.log(technologies)
  return (
  <div style={{ background: "var(--color-bg)", fontFamily: "Quicksand", color: "var(--color-primary)" }} className="h-full">
    <Head>
      <title>{project?.project_title}</title>
      <link href="projects.css" rel="stylesheet"/>
    </Head>
    <Header />
    <main className="px-2 md:px-16 pt-12 flex justify-center">
        <div className="w-full sm:w-1/2" id="content">
          {project?<img src={ASSETS_URL + project?.project_image}/>:""}
          <h2>Technologies</h2>
          <ul className="flex flex-row h-8 mt-4">
            {technologies?.map((el)=> {
              return (
                <li key={el.id} className="flex flex-row mb-2 mx-2 items-center justify-start">
                    {el.skills_img ? <img className="icon-small" src={ASSETS_URL + el.skills_img} />:<div className="icon-small"></div>}
                    <span className="mx-2">{el.skill_name}</span>
                    {el.linkedin_certificate ? <a href={el.linkedin_link} target="_blank"><Check className="icon-tiny" /></a>:""}
                  </li>
                )
              })}
          </ul>
          <br></br>
          <div dangerouslySetInnerHTML={{ __html: project?.project_description }}>
          </div>
        </div>
    </main>
    <footer className="pt-8"></footer>
  </div>
  )
}

export const getServerSideProps = async ctx => {
    const skills = await getData(API_URL + "skills")
      .then(data => {
        return(data.data);
      })
      .catch(err => {
        console.log(err);
      })
    const project = await getData(API_URL + "projects/" + ctx.params.id)
      .then(data => {
        return(data.data);
      })
      .catch(err => {
        console.log(err);
      })
    const project_skills = await getData(API_URL + "projects_project_skills?filter[projects_id][_eq]=" + ctx.params.id)
      .then(data => {
        return(data.data);
      })
      .catch(err => {
        console.log(err);
      })
    return {props: {skills: skills, project:project, project_skills:project_skills}}
}