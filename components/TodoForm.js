import { Button, Typography, TextField } from "@mui/material"
import { useState, useContext } from "react";
import { addDoc,collection,serverTimestamp,doc,updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { TodoContext } from "../contexts/TodoContext";
import { AuthContext } from "../contexts/AuthContext";

export default function TodoForm() {

    const {showAlert,todo,setTodo} = useContext(TodoContext);
    const {googleUser} = useContext(AuthContext);

    const [hata,setHata] = useState('');

    const handleclick = async (e) =>{
        e.preventDefault();
        if(todo.baslik == '' || todo.aciklama ==''){
            showAlert("error","Başlık ya da Açıklama Eksik Girilemez");
            return;
        }

        if(todo?.hasOwnProperty("id")){
            const ref = doc(db,"todos",todo.id);
            const refDoc = updateDoc(ref,{baslik:todo.baslik,aciklama:todo.aciklama,guncellemeTarihi:serverTimestamp()});
            setTodo({baslik:'',aciklama:''});
            showAlert("success", `${refDoc.id} id li todo güncellendi`);
        }
        else{
            const ref = collection(db,"todos");
            const refDoc = await addDoc(ref,{...todo,kullaniciEmail:googleUser.email,eklemeTarih:serverTimestamp()}); 
            setTodo({...todo,baslik:'',aciklama:''});
            showAlert("success", `${refDoc.id} id li todo eklendi`);  
        }
          
    
    }
  return (
    <div>
        <Typography sx={{mt:3, fontWeight:'bold'}} variant="h5" color="darkgrey"> Yeni Todo Ekle </Typography>

        <TextField value={todo.baslik} fullWidth label="Başlık" margin="normal" onChange={e=>setTodo({...todo,baslik:e.target.value})}></TextField>
        <TextField value={todo.aciklama} fullWidth label="Açıklama" margin="normal" onChange={e=>setTodo({...todo,aciklama:e.target.value})}></TextField>

        {todo?.hasOwnProperty("id") && <Button sx={{mt:3}} variant="outlined" color="warning" onClick={handleclick}>Todo Güncelle</Button> }
        {!todo?.hasOwnProperty("id") && <Button sx={{mt:3}} variant="outlined" color="success" onClick={handleclick}>Todo Ekle</Button> }
    </div>
  )
}
