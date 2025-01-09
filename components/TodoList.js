import { onSnapshot,collection,query,orderBy, where } from "firebase/firestore"
import { db } from "../firebase/config"
import { useContext, useEffect,useState } from "react"
import Todo from "./Todo"
import { AuthContext } from "../contexts/AuthContext"

export default function TodoList() {

    const [todos,setTodos] = useState([])
    const {googleUser,email} = useContext(AuthContext)
    
    
    

    useEffect(()=>{
      
       
        const ref = collection(db,"todos");
        const q = query(ref,where('kullaniciEmail','==',email),orderBy("eklemeTarih","desc"));
        console.log("email:" + email);

        const unsub = onSnapshot(q,(snap)=>{
            setTodos(snap.docs.map(doc=>(
                {...doc.data(),id:doc.id,eklemeTarih:doc.data().eklemeTarih?.toDate().getTime()}
            )))
        })

        return unsub;

    },[googleUser])
    

  return (
    <div>
        {todos.map(todo=>
        <Todo key={todo.id} todoDetay={todo}/>
        )}
    </div>
  )
}
