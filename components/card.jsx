
export default function Card({title, img, description, date, id, skills}) {
    return(
        <a href={"projects/"+id}>
            <div className="h-full bg-gray-50">
                <div className="relative h-2/3">
                    <img src={img} className="w-full h-full object-cover"/>
                    <div className="absolute top-2 right-2 flex flex-row-reverse gap-1 text-white">
                        {skills.map((skill) => {
                            if (skill !== undefined) {
                                return <div className="bg-indigo-500 p-1 rounded">{skill}</div>
                            }
                        })}
                    </div>
                </div>
                <div className="p-4 h-1/3 flex flex-col justify-between">
                    <h1 className="flex-grow-0 text-2xl font-medium">{title}</h1>
                    <p className="flex-grow">{description}</p>
                    <p className="flex-grow-0 font-thin">Date : <i>{date}</i></p>
                </div>
            </div>
        </a>
    )
}