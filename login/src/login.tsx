import  React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as singleSpa from 'single-spa';


function PageLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const handleSubmit = (event) => {
      event.preventDefault()

      setEmailError(false)
      setPasswordError(false)

      if (email == '') {
          setEmailError(true)
      }
      if (password == '') {
          setPasswordError(true)
      }

      if (email && password) {
          
          singleSpa.navigateToUrl('/initial-page')
      }
  }

  return (
    <div style={{position: 'absolute',
    background: 'white',
    zIndex:9999,
    height:'100vh',
    width:'100%',
    top:0,
    left:0
    }}>
         <form autoComplete="off" onSubmit={handleSubmit} style={{padding:100}}>
            <h2>Login</h2>
                <TextField 
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    color="primary"
                    type="email"
                    sx={{mb: 3}}
                    fullWidth
                    value={email}
                    error={emailError}
                 />
                 <TextField 
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="primary"
                    type="password"
                    value={password}
                    error={passwordError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <Button variant="outlined" color="primary" type="submit">LOGIN</Button>
             
        </form>
    </div>
  );
}
export default PageLogin;
