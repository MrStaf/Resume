import Header from "./../../components/header";
import Card from "./../../components/card";
import Head from "next/head";
import { getData } from "../../functions/getData";
import { nanoid } from 'nanoid';

const API_URL = "https://content.benoit.fage.fr/items/";
const ASSETS_URL = "https://content.benoit.fage.fr/assets/";

export default function Projects({ skills, projects, project_skills }) {
  const technologies = project_skills.map((pj_s) => {
    let item;
    skills.forEach((skill) => {
      if (skill.id === parseInt(pj_s.item)) {
        item = skill.skill_name;
      }
    });
    return { id: pj_s.id, skill_name: item, projects_id: pj_s.projects_id };
  });
  return (
    <div
      style={{
        background: "var(--color-bg)",
        fontFamily: "Quicksand",
        color: "var(--color-primary)",
      }}
      className="h-full"
    >
      <Head>
        <title>Projects</title>
      </Head>
      <Header />
      <main className="flex justify-center px-2 pt-8 sm:pt-12 md:px-16">
        <ul className="grid grid-flow-row grid-cols-1 gap-8 md:grid-cols-2 max-w-prose">
          {projects?.map((project) => {
            return (
              <Card
                key={nanoid()}
                id={project?.id}
                title={project?.project_title}
                img={ASSETS_URL + project?.project_image}
                description={project?.project_subtitle}
                date={project?.project_date}
                skills={technologies.map((tech) => {
                  if (tech.projects_id === project?.id) {
                    return tech.skill_name;
                  }
                })}
              />
            );
          })}
        </ul>
      </main>
      <footer className="pt-8"></footer>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const skills = await getData(API_URL + "skills")
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      console.log(err);
    });
  const projects = await getData(API_URL + "projects")
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      console.log(err);
    });
  const project_skills = await getData(API_URL + "projects_project_skills")
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      skills: skills,
      projects: projects,
      project_skills: project_skills,
    },
  };
};
