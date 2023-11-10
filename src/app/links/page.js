 
import Link from "next/link";

export default function Page_links() {
  return (
    <>

    <div className=" btn btn-group ">
  {/* Link for Home page  */}
      <Link href="/">
      <button className="btn btn-primary m-2">Home page </button> 
       </Link>

{/* Links for link page  */}
       <Link href="/links">
       <button className="btn btn-success m-2 transition-all">Links page</button>
       </Link>
 
 {/* Links for Error page  */}
 <Link href="/not-found/error">
 <button className="btn btn-danger m-2" >Error page</button>
       </Link>

</div>
    </>
  );
}
