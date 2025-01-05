import { db } from "../../firebase/config" 
import { collection, getDocs } from "firebase/firestore"
import MoreItem from "./component/MoreItem"

const More = async () => {
    // const [imgs, setImgs] = useState([])
    const querySnapshot = await getDocs(collection(db, 'pdf'))
    const moreItems = querySnapshot.docs.map(doc=>({
        id:doc.id, ...doc.data()
    }))
    
    return ( 
    <>
        <MoreItem moreItems={moreItems}/>     
    </>
    );
}
 
export default More;