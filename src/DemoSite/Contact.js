import React,{useState} from 'react'

function Contact() {
    const [data,setData] = useState({
        fullName:"",
        phone:"",
        email:"",
        password:""
    });
    const inputEvent = (event)=>{
        const {name,value} = event.target ;
        setData((previous)=>{
            return{
                ...previous,[name]:value
            }
        })

    }
    const OnSubmit=(e)=>{
        alert(
            `My Name is ${data.fullName} Phone Number is ${data.phone} and Email is ${data.email} `
        );
    };

    return (
        <>
            <div className="container-fluid">
                <h3 className="fs-4 fw-normal my-4">Contact Us</h3>
                <div className="row">
                    <div className=" col-md-6 col-sm-4">
                        <form onSubmit={OnSubmit}>
                            <div className="mb-3">
                                <label for="exampleInputName" className="form-label">Full Name</label>
                                <input type="text" name="fullName" onChange={inputEvent} value={data.fullName} className="form-control" id="exampleInputName" placeholder="Enter Your Full Name"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputNumber" className="form-label">Phone</label>
                                <input type="number" name="phone" onChange={inputEvent} value={data.phone} className="form-control" id="exampleInputNumber" placeholder="Enter Your Phone Number"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" name="email" onChange={inputEvent} value={data.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Enter Your Email Address"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" name="password" onChange={inputEvent} value={data.password} className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className ="form-check-label" for="exampleCheck1">Terms and Conditions</label>
                            </div>
                            <button type="submit" className="btn btn-success fs-5 fw-nornal">Contact Us</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact
