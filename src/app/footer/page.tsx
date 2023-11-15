import Link from "next/link";

export default function Footer() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <h1>I am footer </h1>
      <Link className="btn btn-outline-info" href={"/"}>
        Home
      </Link>
      {/* you can use both {""} or " "  sign for hyperlink reference*/}
      <br />
      <br/>
      <br />
    </>
  );
}
