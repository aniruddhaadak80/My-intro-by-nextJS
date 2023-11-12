import custom from '@/app/style/custom.module.css'
import other from '@/app/oher.module.css'
import green from '@/app/style/green.module.css'

export default function Style(){
    return(
        <>
        {/* format ----> module_name.class_name */}
        <h1 className={custom.main} >Style using module.css</h1>
        <h2 className={other.main}>heading 2</h2>
        <h3 className={green.green}>Heading 3</h3>
        <button className={other.main}>Click me </button>
        </>
)}