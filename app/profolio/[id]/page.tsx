import { db } from "../../../firebase/config" 
import { collection, getDocs } from "firebase/firestore"
import Cards from "../component/Cards";
const GraphicDesign = async ({ params }) => {
    const title = params.id
    const querySnapshot = await getDocs(collection(db, 'illustration'))
    const imgs = querySnapshot.docs.map(doc=>({
        id:doc.id, ...doc.data()
    }))
    return ( 
        <div className="grid grid-cols-1 gap-2">
        <p className="text-lg leading-8">{title}</p>
        <Cards imgs={imgs}/>
        </div>
        
     );
}
 
export default GraphicDesign;