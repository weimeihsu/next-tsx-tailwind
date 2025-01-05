import Image from "next/image"
interface ChildItem {
    children?: ChildItem[];
}

interface ResumeItem {
id:string
comp: string;
icon: string;
date: string;
title: string;
list: string[];
}

interface ResumenItemProps {
    resumeItems: ResumeItem[];
}
const ResumenItem: React.FC<ResumenItemProps> = ({resumeItems}) => {
    return ( 
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-2">
            {resumeItems.map(({comp, icon, date, title, list})=>(
                <div className="flex flex-col gap-2 w-full" key={comp}>
                    <div className="w-20">
                    <Image 
                    priority={true}
                    alt={comp} 
                    src={icon}
                    width={56}
                    height={56}
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    className="rounded"
                    />
                    </div>

                    <p>{title}</p>
                    <p className="text-sm font-light text-neutral-600">{date}</p>
                    <ul className="list-disc list-outside pl-4" role="list">
                        {list.map((listChild)=>
                        <li key={listChild} className="text-sm font-light mb-1">{listChild}</li>)}
                    </ul> 
                </div>     
            ))}
        </div>
     );
}
 
export default ResumenItem;