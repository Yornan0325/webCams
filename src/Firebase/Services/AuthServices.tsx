import {serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";


export const createUser = async (imageUrl: string) => {
    try {
      const docRef = await addDoc(collection(db, 'images'), {
        imageUrl: imageUrl, // Almacena la cadena base64 o la URL de la imagen
        createdAt: serverTimestamp(), // Marca de tiempo de cuándo se creó el documento
        // Agrega más campos aquí según tus necesidades
      });
      console.log('Usuario creado con éxito en Firestore con ID:', docRef.id);
    } catch (error) {
      console.error('Error al crear el usuario:', error);
    }
  };