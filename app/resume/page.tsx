import { db } from "../../firebase/config" 
import { collection, getDocs } from "firebase/firestore"
import ResumenItem from "./component/ResumeItem"

const Resume = async () => {
    // const [imgs, setImgs] = useState([])
    const querySnapshot = await getDocs(collection(db, 'expcs'))
    const expcsItems = querySnapshot.docs.map(doc=>({
        id:doc.id, ...doc.data()
    }))
    
    return ( 
    <>
        <ResumenItem resumeItems={expcsItems}/>     
    </>
    );
}
 
export default Resume;