import Link from "next/link";

export default function Page_links() {
  return (
    <>
      {/* I used bootstrap here  */}
      <div className=" btn btn-group">
        {/* Link for Home page  */}
        <Link href="/">
          <button className="btn btn-outline-primary ">Home page </button>
        </Link>

        {/* Links for link page  */}
        <Link href="/links">
          <button className="btn btn-outline-success ">Links page</button>
        </Link>


        {/* links for profile page  */}
        <Link href="/login">
          <button className="btn btn-outline-info  ">Log in</button>
        </Link>
        

        {/* Links for Error page  */}
        <Link href="/error">
          <button className="btn btn-outline-danger ">Error page</button>
        </Link>

      </div>
    </>
  );
}
