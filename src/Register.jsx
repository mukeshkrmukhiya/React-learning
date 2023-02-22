import { useState } from "react";

export default function Register()
 {
    
    const [Fname, setFname] = useState();
    const [Fname1, setFname1] = useState("");
    const [Phone, setPhone] = useState("");
    const [Phone1, setPhone1] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    function onSubmits(event) {
      event.preventDefault();

        setFname1(Fname);
        setPhone1(Phone);
        console.log("Clicked");
    }

    function HOChange1(event) {
        console.log(event.target.value);
        setFname(event.target.value)
        console.log("Changed")
    }
    function HOChange2(event) {
        
        console.log(event.target.value);
        setPhone(event.target.value);
        console.log("Changed")
    }
    function HOChange3(event) {
        
        console.log(event.target.value);
        setEmail(event.target.value)
        console.log("Changed")
    }
    function HOChange4(event) {
        
        console.log(event.target.value);
        setPass(event.target.value)
        console.log("Changed")
    }




    return(

        <>
        <form   onSubmit={onSubmits}>
        <h1 className="mb-3 row mx-3">Hello, {Fname1.toLocaleUpperCase() +  " " + Phone1.toLocaleUpperCase()} </h1>
        <div className="mb-3 row">
        <label for="fullN" className="col-sm-2 col-form-label ">FullName</label>
        <div className="col-sm-10">
          <input type="text" readonly className="form-control" name="fullN" id="fullN" value={Fname} onChange={HOChange1} />
        </div>
      </div>
        <div className="mb-3 row">
        <label for="PhNo" className="col-sm-2 col-form-label"> Phone</label>
        <div className="col-sm-10">
          <input type="text" readonly className="form-control" name ="PhNo" id="PhNo" value={Phone} onChange={HOChange2} />
        </div>
      </div>
        <div className="mb-3 row">
        <label for="staticEmail" className="col-sm-2 col-form-label">email</label>
        <div className="col-sm-10">
          <input type="text" readonly className="form-control" name="staticEmail" id="staticEmail" value={email} onChange={HOChange3} />
        </div>
      </div>
      <div className="mb-3 row">
        <label for="inputPassword" className="col-sm-2 col-form-label ">Password</label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword"  value={pass} onChange={HOChange4}/>
        </div>
      </div>

      <div class="d-grid gap-2">
  <button class="btn btn-primary" type="submit" >Button</button>
</div>
</form>
      </>
    );
}