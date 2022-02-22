import Link from "next/link";
import { nanoid } from "nanoid";

export default function Card({ title, img, description, date, id, skills }) {
  return (
    <li className="h-full list-none shadow-md cursor-pointer bg-gray-50">
      <Link passHref href={"projects/" + id}>
        <a>
          <div className="relative max-h-48">
            <img src={img} className="object-cover w-full h-full max-h-48" />
            <div className="absolute flex flex-row-reverse gap-1 text-white bottom-2 right-2 ">
              {skills.map((skill) => {
                if (skill !== undefined) {
                  return (
                    <div key={nanoid()} className="p-1 text-sm bg-indigo-500 rounded">
                      {skill}
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="flex flex-col justify-between p-4 bg-gray-50">
            <h1 className="flex-grow-0 text-2xl font-medium a">{title}</h1>
            <p className="flex-grow text-gray-700 no-underline">{description}</p>
            <p className="flex-grow-0 font-thin text-gray-500 no-underline">
              <strong>{date}</strong>
            </p>
          </div>
        </a>
      </Link>
    </li>
  );
}
