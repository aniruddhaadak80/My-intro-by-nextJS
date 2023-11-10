import Link from "next/link";

export default function Page_links() {
  return (
    <>
  {/* Link for Home page  */}
      <Link href="/">
      <button>Home page </button> 
       </Link>

{/* Links for link page  */}
       <Link href="/links">
      <button>Links page</button> 
       </Link>
 
 {/* Links for Error page  */}
 <Link href="/not-found/error">
      <button>Error page</button> 
       </Link>
 
    </>
  );
}
