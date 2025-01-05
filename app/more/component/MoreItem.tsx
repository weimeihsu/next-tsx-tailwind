import Image from "next/image"
import Link from "next/link"

const MoreItem = ({moreItems}) => {
    return ( 
        <div className="grid gap-2">{moreItems.map(({id, des, file, thumb, title})=>(
            <Link className="flex flex-row gap-6 p-4 border border-java-800 hover:bg-java-900" key={id} href={file} target="_blank">
                <div className="w-20 flex-none">
                    <Image 
                    priority={true}
                    alt={title} 
                    src={thumb}
                    width={72}
                    height={72}
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                        }}
                    className="rounded"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p>{title}</p>
                    <p className="text-sm font-light">{des}</p>
                </div>
                
            </Link>
            
        ))}</div>
     );
}
 
export default MoreItem;