// import React, { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../Firebase/firebaseConfig"; // Asegúrate de importar la configuración de Firebase
// import styles from "../Picture.module.css";
// import { UserText } from "../interfaces/interfaces";

// const Home: React.FC = () => {
//   const [images, setImages] = useState<UserText[]>([]);

//   const fetchImage = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "images"));
//       const imagesData: UserText[] = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//         createdAt: doc.data().createdAt?.toDate(),
//       })) as UserText[];

//       setImages(imagesData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

 
//   useEffect(() => {
//     fetchImage();
//   }, []);

//   return (
//     <div>
//       <h1>Images</h1>
//       {images.map((image) => (
//         <article className={styles.article} key={image.id}>
//           <picture className={styles.picture}>
//             <source media="(min-width: 0px)" srcSet={image.imageUrl} />
//             <img src={image.imageUrl} alt="background" />
//           </picture>
//           <h1
//             className={styles.header}
//           >{` ${image.createdAt.toLocaleDateString()} at ${image.createdAt.toLocaleTimeString()}`}</h1>
//         </article>
//       ))}
//     </div>
//   );
// };

// export default Home;
