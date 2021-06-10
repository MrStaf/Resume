import Header from "./../../components/header";
import Card from "./../../components/card";
import Head from "next/head";
import {getData} from "../../functions/getData";

const API_URL = "http://localhost:8055/items/";
const ASSETS_URL = "http://localhost:8055/assets/";

export default function Projects({skills, projects, project_skills}) {
  const technologies = project_skills.map((pj_s) => {
    let item;
    skills.forEach((skill) => {
      if (skill.id === parseInt(pj_s.item)) {
        item = skill.skill_name;
      }
    })
    return ({id:pj_s.id, skill_name: item, projects_id:pj_s.projects_id})
  })
  return (
  <div style={{ background: "var(--color-bg)", fontFamily: "Quicksand", color: "var(--color-primary)" }} className="h-full">
    <Head>
      <title>Projects</title>
    </Head>
    <Header />
    <main className="px-2 md:px-16 pt-12 flex justify-center">
        <div className="grid grid-flow-row grid-cols-2 gap-8 md:w-1/2">
          {projects?.map((project) => {
            return <Card 
              key={project?.id}
              id={project?.id}
              title={project?.project_title}
              img={ASSETS_URL+project?.project_image}
              description={project?.project_subtitle}
              date={project?.project_date}
              skills={technologies.map(tech => {if(tech.projects_id === project?.id) {return tech.skill_name}})}
              />
          })}
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
  const projects = await getData(API_URL + "projects")
    .then(data => {
      return(data.data);
    })
    .catch(err => {
      console.log(err);
    })
  const project_skills = await getData(API_URL + "projects_project_skills")
    .then(data => {
      return(data.data);
    })
    .catch(err => {
      console.log(err);
    })
  return {props: {skills: skills, projects:projects, project_skills:project_skills}}
}