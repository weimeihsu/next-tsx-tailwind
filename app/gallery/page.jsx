'use client'

import { useState, useEffect } from "react"
import { db } from "../firebase/config" 
import { collection, getDocs } from "firebase/firestore"
import Image from "next/image"

const fetchImg = async () =>{
    const querySnapshot = await getDocs(collection(db, 'img-the-crew'))
    const imgs = []
    querySnapshot.forEach(doc=>{
        imgs.push({id:doc.id, ...doc.data()})
    })
    return imgs
}

const Gallery = () => {
    const [imgs, setImgs] = useState([])

    useEffect(()=>{
        const fetchData = async() =>{
            const data = await fetchImg()
            setImgs(data)
        }
        fetchData()
    }, [])
    return ( <>
        <h1 className="text-xl mt-4 px-4">Images Fetched from Firebase</h1>
        <div className="grid grid-cols-1 gap-2 p-4 md:grid-cols-2 lg:grid-cols-4">
            {imgs.map(item=>(
                <div className="p-4 rounded shadow-deeper" key={item.id} >
                <Image
                alt={item.title}
                src={item.url}
                width={1000}
                height={1000}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}/>
                    <p className="text-md font-light mt-2">{item.title}</p>
                </div>
            ))}
        </div>
        </>
     );
}
 
export default Gallery;