import Link from "next/link";

export default function Page_links() {
  return (
    <>
      <center>
        {/* I used bootstrap here  */}
        <nav>
          {/* Link for Home page  */}
          <Link href="/">
            <button className="btn btn-primary ">Home page </button>
          </Link>

          {/*Link for contact page */}
          <Link href={"/contact"}>
            <button className="btn btn-light">Contact Me</button>
          </Link>

          {/* links for login page  */}
          <Link href="/login">
            <button className="btn btn-info  ">Log in</button>
          </Link>

          {/* style using module.css */}
          <Link href="/animations">
            <button className="btn btn-warning">Animations</button>
          </Link>

          {/* style using module.css */}
          <Link href="/just">
            <button className="btn btn-dark">Just</button>
          </Link>

          {/* link for images  */}
          <Link href={"/pictures"}>
            <button className="btn btn-outline-primary">Pictures</button>
          </Link>

          {/* Add something (links) here  */}

          {/* Links for Error page  */}
          <Link href="/error">
            <button className="btn btn-danger ">Error page</button>
          </Link>
        </nav>
      </center>
    </>
  );
}
