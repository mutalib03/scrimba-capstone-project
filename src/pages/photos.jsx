import React from "react";
import { useContext } from "react";
import Image from "../component/image";
import { galleryContext } from "../Context.js/context";
import { getClass } from "../utilis";
function Photos() {
  const {allPhotos} = useContext(galleryContext)
  
const arrayAllPhotos = allPhotos.map((photo,index) => (
<Image key={photo.id} img={photo} className={getClass(index)} />


))
        
  return (
    <main className="photos">
    {arrayAllPhotos}
    </main>
  );
}

export default Photos;
