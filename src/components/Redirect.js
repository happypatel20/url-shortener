// Redirect.js
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const Redirect = () => {
  let { slug } = useParams();

  useEffect(() => {
    const redirectToUrl = async () => {
      const q = query(collection(db, 'urls'), where('slug', '==', slug));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        console.error('No matching documents.');
        return;
      }
      const finalData = querySnapshot.docs[0].data();
      if (finalData && finalData.url) {
        window.location.href = finalData.url; 
      } else {
        console.error('URL not found in the document.');
      }
    };

    redirectToUrl();
  }, [slug]);

  return (
    <>
      <h1>Redirecting...</h1>
    </>
  );
};

export default Redirect;
