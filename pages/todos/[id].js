import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Button, Card, CardActions, CardContent, Grid, Link, ListItemText, Typography } from "@mui/material";


export default function TodoDetay({todoProps}) {

  const todo = JSON.parse(todoProps); 


  return (
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{minHeight:'100vh'}} >         
        <Grid item xs={4}>
                <Card sx={{minWidth:300,maxWİdth:600,boxShadow:3}} style={{backgroundColor:'#fafafa'}}>
                    <CardContent>
                        <ListItemText variant="h5" component="div" primary="Todo Başlık" secondary={todo.baslik}>
                        </ListItemText>
                        <ListItemText variant="h5" component="div" primary="Todo Açıklama" secondary={todo.aciklama}>
                        </ListItemText>

                    </CardContent>
                    <CardActions>
                        <Link href="/afg-todo-app-next">
                            <Button size="small">Geri Dön</Button>
                        </Link>
                    </CardActions>
                </Card>
        </Grid>
    </Grid>
  )
}


export const getStaticPaths=async ()=>{

    const snap=await getDocs(collection(db,'todos'));

    const paths=snap.docs.map(doc=>{
        return {
            params:{id:doc.id.toString()}
        }
    })

    return {
        paths,
        fallback:false
    }
}

export const getStaticProps=async (context)=>{

    const id=context.params.id

    const docRef=doc(db,'todos',id);
    const docSnap=await getDoc(docRef);

    return {
        props:{todoProps:JSON.stringify(docSnap.data()) || null}
    }
}
