import Image from "next/image"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";

const ResumenItem = ({resumeItems}) => {

    return ( 
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-2">
            {resumeItems.map(({id, comp, icon, date, title, list})=>(
                <div className="flex flex-col gap-2 w-full" key={id}>
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
                    <ul className="list-disc list-outside pl-4">{list.map((li: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode, idx: Key)=>
                        <li key={idx} className="text-sm font-light mb-1">{li}</li>)}
                    </ul>
                    
                </div>     
            ))}
        </div>
     );
}
 
export default ResumenItem;