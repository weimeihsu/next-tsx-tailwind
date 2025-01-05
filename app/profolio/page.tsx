import { db } from "../../firebase/config" 
import { collection, getDocs } from "firebase/firestore"
import Cards from "./component/Cards"
// import SideMenu from "./component/SideMenu"
import SideBar from "./component/sideBar/SideBar"

// const fetchImg = async () =>{
//     const querySnapshot = await getDocs(collection(db, 'illustration'))
//     const imgs = []
//     querySnapshot.forEach(doc=>{
//         imgs.push({id:doc.id, ...doc.data()})
//     })
//     return imgs
// }

const Profolio = async () => {
    // const [imgs, setImgs] = useState([])
    const querySnapshot = await getDocs(collection(db, 'illustration'))
    const imgs = querySnapshot.docs.map(doc=>({
        id:doc.id, ...doc.data()
    }))
    
    return ( 
    <>
        <div className="flex gap-2">
            <div className="flex-none w-48">
            <SideBar/>
            </div>
            <Cards imgs={imgs}/> 
        </div>      
    </>
    );
}
 
export default Profolio;