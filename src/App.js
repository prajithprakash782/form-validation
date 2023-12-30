import './App.css';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';

function App() {
  const [inputs, setInput] = useState({
    username: '',
    email: '',
    password: '',
    confpass: ''


  })
  const [user, setUser] = useState(true)
  const [email, setEmail] = useState(true)
  const [pass, setPass] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!inputs.username || !inputs.email || !inputs.password || !inputs.confpass) {
      alert('Please fill the form completely')

    }


    else {
      if (inputs.password != inputs.confpass) {
        alert('Password does not match')
      }
      else {
        alert(`
    SIGNED UP SUCCESSFULLY!   
    Username: ${inputs.username}
    Email: ${inputs.email}
    Password ${inputs.password}
    Confirm password: ${inputs.confpass}`)
      }

    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput({ ...inputs, [name]: value })

    if (name == 'username') {
      if (!!value.match(/^[a-zA-Z0-9].{2,16}$/)) {
        setUser(true)
      }
      else {

        setUser(false)
      }


    }
    else if (name == 'email') {
      if (!!value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        setEmail(true)
      }
      else {

        setEmail(false)
      }

    }

    else if (name == 'password') {
      if (!!value.match(/^(?=^.{8,16}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)) {
        setPass(true)
      }
      else {
        setPass(false)
      }
    }
  }

  const show =()=>{
    setShowPassword(!showPassword);

  }
  return (
    <div style={{ height: '100vh',backgroundImage:'url(https://img.freepik.com/premium-photo/notepad-pencil-calculator-note-sheet-office-desk_361322-171.jpg)',backgroundPosition:'center',backgroundSize:'cover' }} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      <div className='bg-light p-5 rounded' style={{ width: '500px' }}>

        <h1 className='text-center'>Registration Form</h1>
        <form onSubmit={(e) => handleSubmit(e)} className='mt-4 text-center'>
          <div className='mb-3'>
            <TextField className='w-100' name={'username'} value={inputs.username} onChange={(e) => handleChange(e)} id="standard-basic" label="Username" variant="standard" />
            {!user &&
              <div><p className='text-danger text-start mt-2'>*Username should have 3-16 characters </p></div>
            }
          </div>

          <div className='mb-3'>
            <TextField className='w-100' name={'email'} value={inputs.email} onChange={(e) => handleChange(e)} id="standard-basic" label="Email" variant="standard" />
            {!email &&
              <div><p className='text-danger text-start mt-2'>*Enter a valid email </p></div>
            }
          </div>

          <div className='mb-3 field'>
            <TextField  type={showPassword ? 'text' : 'password'} className='w-100 test' name={'password'} value={inputs.password} onChange={(e) => handleChange(e)} id="standard-basic" label="Password" variant="standard" />
            <button type='button' onClick={show} className='btn'><i class="fa-solid fa-eye"></i></button>
            {!pass &&
              <div><p className='text-danger text-start mt-2'>*Password must have minimum 8 characters and include atleast 1 uppercase, 1 digit and 1 special character </p></div>
            }

          </div>

          <div className='mb-3 field'>
            <TextField type={showPassword ? 'text' : 'password'} className='w-100' name={'confpass'} value={inputs.confpass} onChange={(e) => handleChange(e)} id="standard-basic" label="Confirm Password" variant="standard" />
            <button type='button' onClick={show} className='btn'><i class="fa-solid fa-eye"></i></button>


          </div>
          <Button type='submit' className='p-3' variant="contained" color="success">
            Sign Up
          </Button>


        </form>


      </div>

    </div>
  );
}

export default App;
