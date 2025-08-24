import React, { useState } from 'react'

const Formvalidation = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();

        const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if (name==='' || email===''|| password ===''){
        setError("all fields are required")
    }else if(!/\S+@\S+\.\S+/.test(email)){
        setError("invalid email");
    }
    else if (!strongPassword.test(password)) {
        setError("Password must be at least 8 characters, include uppercase, lowercase, number, and special character");
    }else{
        setError("");
        alert("form submitted successfully");
    }
    }
  return (
    <div><div>
        <h1>LOGIN PAGE</h1>
        <form onSubmit={handleSubmit}>
        <div>

            <label htmlFor="">User Name:</label>
            <input type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Email:</label>
            <input type="text"
            value={email}
            onChange={(e)=>setEmail(e.target.value)} />

        </div>
        <div>
            <label htmlFor="">Password:</label>
            <input type="text"
            value={password}
            onChange={(e)=>setPassword(e.target.value)} />

        </div>
        <button type='submit'>LOGIN</button>
        {error && <p style={{color:"red"}}>{error}</p>}
        </form>
    </div>
    </div>
  )
}

export default Formvalidation;