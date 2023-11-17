import { title } from "process";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <div>
        <h1>😊Feel free to Contact me :👇👇👇</h1> 
        <h3>Mobile no :👇</h3>
        <p>7029155691</p>
        <h3>Email ID :👇</h3>
        <p>adakaniruddha9@gmail.com </p>
        or
        <p>aniruddhaadak80@gmail.com</p>
      </div>
    </>
  );
}

// Title and description for my contact page 
export  function generateMetadata({params}){
  return{
     title:"Contact page",
     description:"Description for contact page"
  }
}
