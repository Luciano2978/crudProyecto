import ContextoFirestore from "./Contexto";
import { collection,onSnapshot, query,addDoc,updateDoc,where,getDocs,doc,deleteDoc } from "firebase/firestore";
import { fs } from "../Services/Firebase";
import { useState,useEffect} from "react";



export default function FirestoreContext(props){

    const { children } = props;
    const [ cliente, setCliente] = useState([]);

    const registro = (nombreApellido,email,domicilio,celular) => {
        addDoc(collection(fs,"cliente"),{
            nombreApellido: nombreApellido,
            email: email,
            domicilio: domicilio,
            celular: celular
        });
    }

    const modificar = async (identificador,nombreApellido,email,domicilio,celular) => {
        updateDoc(doc(fs,"cliente",identificador),{
            nombreApellido: nombreApellido,
            email: email,
            domicilio: domicilio,
            celular: celular
        });
    }

    const eliminar = async (identificador) => {

         deleteDoc(doc(fs,"cliente",identificador));
        
        }


    useEffect(() => {
        const q = query(collection(fs, "cliente"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id});
            });
            setCliente(docs);
        });
        return unsubscribe;
    }, []);
    


    return(
        <>
            <ContextoFirestore.Provider value={{
                cliente,
                modificar,
                registro,
                eliminar
            }}>
                {children}
            </ContextoFirestore.Provider>
        
        
        </>
    )



}