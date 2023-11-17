export default function Error() {
  return (
    <>
      <h1>It is an Error ❎ page </h1>
      <h2>This page does not exists. </h2>
    </>
  );
}

// Title for Error page 
export function generateMetadata(){
  return{
    title:"Error page"
  }
}