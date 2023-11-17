"use client";
import custom from "@/app/style/custom.module.css";
import other from "@/app/style/oher.module.css";
import green from "@/app/style/green.module.css";
import style from "@/app/style/style.module.css";
import { useState } from "react";

export default function Style() {
  // for useState  hook
  const [color, setcolor] = useState("red");

  return (
    <>
      {/* format ----> module_name.class_name */}
      <h1 className={custom.main}>Style using module.css</h1>
      <h2 className={other.main}>heading 2</h2>
      <h3 className={green.green}>Heading 3</h3>
      <button className={other.main}>Click me </button>
      <br />
      <br />

      {/*For conditional styling . It (style/css) is imported from @/app/style/style.module.css*/}
      <p className={color == "red" ? style.red : style.green}>
        I am paragraph .You can change the color using the bottom button. The
        background color also be change .
      </p>
      <button className={other.main} onClick={() => setcolor("green")}>
        Change paragraph color
      </button>

      {/* for id attribute  */}
      {/*For conditional styling . It (style/css) is imported from style.module.css  */}
      <h3 id={style.orange}>Heading 3 using id attribute .</h3>
    </>
  );
}

//******  Title for just page.It is not usable for "use client " ********
//  export function generateMetadata(){
//   return{
// title:"Just page "
//   }
// }
