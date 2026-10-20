const getCroppedImageUrl=(url: string)=>{
      const target="g/";
      const index = url.indexOf(target)+ target.length;
      return url.slice(0,index) + 'crop/600/300/'+ url.slice(index);
}

export default getCroppedImageUrl;