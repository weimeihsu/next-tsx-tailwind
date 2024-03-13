'use client'
import { useState, useEffect } from "react"
import { db } from "../firebase/config" 
import { collection, getDocs } from "firebase/firestore"

export const fetchImg = async () =>{
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
        <h1 className="text-xl my-4">Images Fetched from Firebase</h1>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {imgs.map(item=>(
                <div className="p-4 rounded shadow-deeper ">
                    <img src={item.url} alt={item.title} key={item.id} className="rounded-sm mb-2"/>
                    <p className="text-sm font-light">{item.title}</p>
                </div>
            ))}
        </div>
        </>
     );
}
 
export default Gallery;