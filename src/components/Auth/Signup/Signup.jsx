import React, { useState, useEffect} from 'react'
import "./Signup.scss"

const Signup = () => {

    const [formValid, setFormValid] = useState(false)
    const [form, setForm] = useState({
        name: "",
        country: "",
        address: "",
        email: "",
        phoneNumber: ""
    });


    useEffect(()=>{
        if (
            form.name !== "" &&
            form.country !== "" &&
            form.address !== "" &&
            form.email !== "" &&
            form.phoneNumber !== ""
         
        ){
            setFormValid(true)
        } else {
            setFormValid(false)
        }
    }, [form])

   

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        sessionStorage.setItem('userDetails', JSON.stringify({...form}))

        // toast.success(`Welcome to Libraree ${form.name}`)

        setTimeout(() => {
            window.location="/"
        }, 5000);
        
        
    }


  return (
    <div className="signup">
         <div>
            <h1> Sign Up</h1>
                <form onSubmit={submitHandler}  >
                    
                    <input type="text" placeholder=" Name" name="name" onChange={handleChange} />
                    <input type="text" placeholder=" Country" name="country" onChange={handleChange} />
                    <input type="text" required placeholder="Address" name="address" onChange={handleChange} />
                    <input type="email" required placeholder="Contact Email" name="email" onChange={handleChange} />
                    <input type="text" required placeholder="Phone Number" name="phoneNumber" onChange={handleChange} />
                    <div style={{display:"flex", alignItems:"flex-start"}}>
                        <input type="checkbox" style={{width:"25px", margin:"-7px 7px 0 0"}} id="readTerms" />
                        <p >I have read, understood and i agree to the terms and conditions</p>
                    </div>
                    <button 
                        className= {formValid?"auth_signup-active":"auth_signup-submit"}
                        // type="submit"
                        // id="actionBtn"
                        // disabled={!formValid}
                    >
                        Sign Up
                    </button>

                </form>
            </div>
    </div>
  )
}

export default Signup