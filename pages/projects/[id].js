import Header from "./../../components/header";
import Head from "next/head";
import { getData } from "./../../functions/getData";
import Check from "./../../assets/icons/check-circle-regular.svg";
import Git from "./../../assets/icons/github-square-brands.svg";

const API_URL = "https://content.benoit.fage.fr/items/";
const ASSETS_URL = "https://content.benoit.fage.fr/assets/";

export default function Projects({ skills, project, project_skills }) {
  const technologies = project_skills.map((pj_s) => {
    let item;
    skills.forEach((skill) => {
      if (skill.id === parseInt(pj_s.item)) {
        item = skill;
      }
    });
    return item;
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
        <title>{project?.project_title}</title>
        <link href="projects.css" rel="stylesheet" />
      </Head>
      <Header />
      <main className="flex justify-center px-0 pt-4 sm:px-2 sm:pt-12 md:px-16">
        <div className="w-full sm:w-1/2" id="content">
          {project ? (
            <img
              src={ASSETS_URL + project?.project_image}
              className="filter drop-shadow-sm"
            />
          ) : (
            ""
          )}
          {project?.project_github ? (
            <a
              href={project?.project_github}
              target="_blank"
              className="cursor-pointer"
            >
              <Git className="icon-medium" />
            </a>
          ) : (
            ""
          )}
          <h2 className="mx-2">Technologies</h2>
          <ul className="flex flex-row h-8 mt-4">
            {technologies?.map((el) => {
              return (
                <li
                  key={el.id}
                  className="flex flex-row items-center justify-start mx-2 mb-2"
                >
                  {el.skills_img ? (
                    <img
                      className="icon-small"
                      src={ASSETS_URL + el.skills_img}
                    />
                  ) : (
                    <div className="icon-small"></div>
                  )}
                  <span className="mx-2">{el.skill_name}</span>
                  {el.linkedin_certificate ? (
                    <a href={el.linkedin_link} target="_blank">
                      <Check className="icon-tiny" />
                    </a>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
          <br></br>
          <div
            className="mx-2"
            dangerouslySetInnerHTML={{ __html: project?.project_description }}
          ></div>
        </div>
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
  const project = await getData(API_URL + "projects/" + ctx.params.id)
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      console.log(err);
    });
  const project_skills = await getData(
    API_URL +
      "projects_project_skills?filter[projects_id][_eq]=" +
      ctx.params.id
  )
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: { skills: skills, project: project, project_skills: project_skills },
  };
};
