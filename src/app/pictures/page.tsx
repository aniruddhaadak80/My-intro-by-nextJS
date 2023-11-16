import Image from "next/image"

export  default function Pictures(){
    return(
        <>
        <h1>You will see some images here </h1>
        {/* Image of beautiful queen */}
<Image height={400} width={400} src="https://image.lexica.art/md2_webp/182e551e-6443-46d6-abee-2336b2499c3c" alt="image of queen"/>
{/* image of a cute cat  */}
<Image height={400} width={400}  src={"https://image.lexica.art/md2_webp/cdbf782f-8061-4cc6-a925-8a618986a00c"} alt="cat-image" /> 
        </>
    )}