
export default function Profile(){
    return(
        <>
 <h1 className="text-info">Log in to continue ...</h1>
 <div>
<h2>Enter your email: </h2>
 <input class="form-control form-control-lg  " type="text" placeholder="Enter your email..." aria-label=".form-control-lg example"/>
<br/>
<h2>Enter password :</h2>
 <input class="form-control " type="text" placeholder="Enter your password..." aria-label="default input example"/>

<button className="btn btn-info m-3">Submit</button>
 
 </div>
        </>
    )}