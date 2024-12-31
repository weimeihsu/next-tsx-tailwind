import Image from "next/image"

const Cards = ({imgs}) => {
    return ( 
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {imgs.map(({id, title, url})=>(
            <div className="p-4 rounded shadow-deeper" key={id} >
            <Image
            priority={true}
            alt={title}
            src={url}
            width={1000}
            height={1000}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}/>
                <p className="text-md font-light mt-2">{title}</p>
            </div>
        ))}
    </div> );
}
 
export default Cards;