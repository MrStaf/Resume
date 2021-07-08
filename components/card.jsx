export default function Card({ title, img, description, date, id, skills }) {
  return (
    <a href={"projects/" + id}>
      <div className="h-full bg-gray-50">
        <div className="relative h-2/3">
          <img src={img} className="object-cover w-full h-full" />
          <div className="absolute flex flex-row-reverse gap-1 text-white top-2 right-2">
            {skills.map((skill) => {
              if (skill !== undefined) {
                return <div className="p-1 bg-indigo-500 rounded">{skill}</div>;
              }
            })}
          </div>
        </div>
        <div className="flex flex-col justify-between p-4 h-1/3">
          <h1 className="flex-grow-0 text-2xl font-medium">{title}</h1>
          <p className="flex-grow truncate">{description}</p>
          <p className="flex-grow-0 font-thin no-underline">
            Date : <i>{date}</i>
          </p>
        </div>
      </div>
    </a>
  );
}
