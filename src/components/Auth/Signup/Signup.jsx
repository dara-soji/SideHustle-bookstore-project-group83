import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import "./Signup.scss"
import "../Signin/Signin.scss"

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
const [isChecked, setIsChecked] = useState(false)
const [errorMsg, setErrorMsg] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        // const checked = docu
        if(isChecked){

            sessionStorage.setItem('userDetails', JSON.stringify({...form}))
            
            // toast.success(`Welcome to Libraree ${form.name}`)
            
            setTimeout(() => {
                window.location="/"
            }, 5000);
        }else{
            setErrorMsg("You haven't agreed to out terms and conditions")
        }
        
        
    }
// console.log(isChecked)

  return (
    <div className="signup loginPage">
         <div className="container">
        <h2>Sign Up</h2>
        <form className="login_form">

            <div className="email_password_input">
            <input className="login_input" type="text" name="name" onChange={handleChange} required/>
                <label htmlFor="name">Name</label>
            </div>
            <div className="email_password_input">
            <input type="text" className="login_input" name="country" onChange={handleChange} required/>
                <label htmlFor="country">Country</label>
            </div>

            <div className="email_password_input">
            <input className="login_input" type="text" required  name="address" onChange={handleChange} />
                <label htmlFor="Address">Address</label>
            </div>
            <div className="email_password_input">
            <input type="email" className="login_input" name="email" onChange={handleChange} required/>
                <label htmlFor="email">Contact Email</label>
            </div>
            <div className="email_password_input">
            <input type="text" className="login_input" name="phoneNumber" onChange={handleChange} required/>
                <label htmlFor="PhoneNumber">Phone Number</label>
            </div>
            <div className="p-text" style={{display:"flex",justifyContent: "center", alignItems:"center"}}>
                        <input type="checkbox"  id="readTerms"
                    onChange={(e) => setIsChecked(!isChecked)}
                    checked={isChecked}
                        />
                        <p >I have read, understood and i agree to the terms and conditions</p>
                    </div>
            <button onClick={submitHandler} 
                        disabled={!formValid}
            className={formValid?"auth_signup-active login_btn":"auth_signup-submit login_btn"}>
                Sign Up
            </button>
            <p className="success-message-l">Already in Group 83?<Link className="app__link  link__si" to="/signin"> Sign In</Link></p>
            <p className="err-message p-text">{errorMsg}</p>

        </form>
        </div>
        <Link className="link_login" to='/home'>
            <p className="bth">Back to home</p>
        </Link>
       
    </div>
  )
}

export default Signup