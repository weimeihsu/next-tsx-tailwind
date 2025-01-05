import { db } from "../../firebase/config" 
import { collection, getDocs } from "firebase/firestore"
import ResumenItem from "./component/ResumeItem"

const Resume = async () => {
    // const [imgs, setImgs] = useState([])
    const querySnapshot = await getDocs(collection(db, 'expcs'))
    const expcsItems = querySnapshot.docs.map(doc=>{
        const data = doc.data()
        return{
            id: doc.id,
            comp: data.comp || '',  // Ensure 'comp' exists or default to empty string
            icon: data.icon || '',  // Default to empty string if not present
            date: data.date || '',
            title: data.title || '',
            list: data.list || [],   // Ensure 'list' is an array
        }
    })
    return ( 
    <>
        <ResumenItem resumeItems={expcsItems}/>     
    </>
    );
}
 
export default Resume;