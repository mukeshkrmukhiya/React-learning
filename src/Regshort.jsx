import { useState } from "react";

export default function Regshort() {
    const [Text, setText] = useState({
        Fname: "Mukesh",
        Phone: "857980",
        email: "Mukesh@gmail.com",
        pass: "Mukesh",
    });

    const [Text1, setText1] = useState({
      Fname: "",
      Phone: "",
      
  });

    function onSubmits(event) {
        event.preventDefault();
       
        setText1(()=>{
          return{
          Fname: Text.Fname,
                Phone: Text.Phone
        }});

        console.log("Clicked");
    }

    function HOChange(event) {
        const Value = event.target.value;
        const name = event.target.name;
        setText( (PreValue)=>{
          console.log(name);
          if (name === "fullN" ) {
              return { 
                Fname: Value,
                Phone: PreValue.Phone,
                email: PreValue.email,
                pass: PreValue.pass
              }
            } 
            else if (name === "PhNo" ) {
                return { Fname: PreValue.Fname,
                  Phone: Value,
                  email: PreValue.email,
                pass: PreValue.pass}
                  
  
              } else  if (name === "staticEmail" ) {
                return {
                   Fname: PreValue.Fname,
                  Phone: PreValue.Phone,
                  email: Value,
                  pass: PreValue.pass}
                  
  
              } else if (name === "inputPassword" ) {
                  return { 
                    Fname: PreValue.Fname,
                  Phone: PreValue.Phone,
                  email: PreValue.email,
                  pass: Value}
                    
    
                }else{
                  return { 
                    Fname: PreValue.Fname,
                  Phone: PreValue.Phone,
                  email: PreValue.email,
                  pass: Value}
                }
        });

       
    }


    return (
      
                <>
                <h1 className="mb-1 row mx-3">Hello, {Text1.Fname } { Text1.Phone} </h1>
                <form   onSubmit={onSubmits}>
                
                
                <div className="mb-3 row">
                <label htmlFor="fullN" className="col-sm-2 col-form-label ">FullName</label>
                <div className="col-sm-10">
                  <input type="text" placeholder="placeHolder" readonly className="form-control" name="fullN" id="fullN" value={Text.Fname} onChange={HOChange} />
                </div>
              </div>
                <div className="mb-3 row">
                <label htmlFor="PhNo" className="col-sm-2 col-form-label"> Phone</label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control" name ="PhNo" id="PhNo" value={Text.Phone} onChange={HOChange} />
                </div>
              </div>
                <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">email</label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control" name="staticEmail" id="staticEmail" value={Text.email} onChange={HOChange} />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label ">Password</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" name="inputPassword" id="inputPassword"  value={Text.pass} onChange={HOChange}/>
                </div>
              </div>

              <div className="d-grid gap-2">
          <button className="btn btn-primary" type="submit" >Button</button>
        </div>
        </form>
              </>
    );
}