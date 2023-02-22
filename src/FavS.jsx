import Card from './Card';
import Sdata from './Sdata';

const FavSeries = "Neflix";

function FavS() {
  
if(FavSeries === "Netflix"){
  return(
    <Card
    imgsrc = {Sdata[1].imgsrc}
    title = {Sdata[1].title}
  Sname = {Sdata[1].Sname}
    links = {Sdata[1].links}
/>
  );
} else{
  return(
    <Card
    imgsrc = {Sdata[3].imgsrc}
    title = {Sdata[3].title}
  Sname = {Sdata[3].Sname}
    links = {Sdata[3].links}
/>
  );

}
}

export default FavS;