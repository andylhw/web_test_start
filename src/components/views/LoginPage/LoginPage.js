import React from 'react'

function LoginPage() {

    // const [Email, setEmail] = useState("")
    // const [Password, setPassword] = useState("")
    // const onEmailhandler=(event)=>{
    //     setEmail(event.currentTarget.value)
    // }

    return (


        <div style={{display:'flex', justifyContent:'center',color:'white', alignItems:'center', width:'100%', height: '80vh'}}>
        <form style={{display:'flex', flexDirection:'column'}}>
            <label>Email </label>
            <input type="email" value onChange />
            <label>Password </label>
            <input type="password" value onChange />

            <br />
            <button>Login</button>
        </form>
            
        </div>
    )
}

export default LoginPage
