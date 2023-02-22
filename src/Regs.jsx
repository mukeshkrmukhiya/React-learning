import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Regs() {
    const [Text, setText] = useState({
        Fname: "Mukesh",
        Phone: "857980",
        email: "Mukesh@gmail.com",
        pass: "Mukesh",
      
    });

    const [Text1, setText1] = useState({
      Fname: "",
      Phone: "",
      greet: ""
      
  });

  const Navigate = useNavigate();
  function HONClick(){
    Navigate("/dtime");
  }

    function onSubmits(event) {
        event.preventDefault();
       
        setText1(()=>{
          return{
          Fname: Text.Fname,
                Phone: Text.Phone,
                greet: "Hello, "
        }});

        console.log("Clicked");
    }

    function HOChange(event) {
        // const Value = event.target.value;
        // const name = event.target.name;

        const {name, value} = event.target;
        setText( (PreValue)=>{
            return{
            ...PreValue,
            [name] : value
            }
        });

       
    }


    return (
      
                <>
                <h1 className="mb-1 row mx-3">{Text1.greet} {Text1.Fname }  </h1>
                <form   onSubmit={onSubmits}>
                <div className="mb-3 row">
                <label htmlFor="Fname" className="col-sm-2 col-form-label ">FullName</label>
                <div className="col-sm-10">
                  <input type="text" placeholder="placeHolder" readonly className="form-control" name="Fname" id="Fname" value={Text.Fname} onChange={HOChange} />
                </div>
              </div>
                <div className="mb-3 row">
                <label htmlFor="Phone" className="col-sm-2 col-form-label"> Phone</label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control" name ="Phone" id="Phone" value={Text.Phone} onChange={HOChange} />
                </div>
              </div>
                <div className="mb-3 row">
                <label htmlFor="email" className="col-sm-2 col-form-label">email</label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control" name="email" id="email" value={Text.email} onChange={HOChange} />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="pass" className="col-sm-2 col-form-label ">Password</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" name="pass" id="pass"  value={Text.pass} onChange={HOChange}/>
                </div>
              </div>

              <div className="d-grid gap-2">
          <button className="btn btn-primary " type="submit" >SUBMIT</button>
          <button className="btn btn-primary" type="button"  onClick={HONClick}>GoTo Time Page</button>
        </div>
        </form>
              </>
    );
}