import { IconButton, ListItem,ListItemText } from "@mui/material";
import moment from "moment";
import "moment/locale/tr";
import { cyan,yellow,blue } from "@mui/material/colors";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useRouter } from "next/router";
import { Delete, MoreVert } from "@mui/icons-material";


export default function Todo({todoDetay}) {

    const router = useRouter();

    const {showAlert,todo,setTodo} = useContext(TodoContext);
  
    const {id,baslik,aciklama,eklemeTarih} = todoDetay;

    const handleClick=async(id)=>{
        const ref = doc(db,"todos",id);
        const delDoc = await deleteDoc(ref);
        setTodo({baslik:'',aciklama:''});
        showAlert("warning", `${id} id li todo silindi.`)    
    }

    const handleDetay=(e,id)=>{
        router.push(`todos/${id}`);
    }

    
  
    return (
    <ListItem  sx={{mt:3,boxShadow:3}} style={{backgroundColor:cyan}} secondaryAction={
        <>
        <IconButton onClick={()=>handleClick(id)} edge="end" aria-label="delete">
             <Delete/>
        </IconButton>
        <IconButton onClick={(e)=>handleDetay(e,id)}>
            <MoreVert/>
        </IconButton>
        </>
    }>
        <ListItemText onClick={()=>setTodo({id,baslik,aciklama,eklemeTarih})} primary={baslik} secondary={moment(eklemeTarih).format('LLL')}></ListItemText>
    
    </ListItem>
  )
}