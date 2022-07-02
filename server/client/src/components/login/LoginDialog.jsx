
import {Dialog, Box, TextField, Typography, Button,styled} from '@mui/material';
import { useState , useContext} from 'react';
import { authenticateSignup, authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component=styled(Box)`
height: 50vh;
width:50vh;
display: flex;
flex-direction: column;
padding:25px 25px;

&> div,&>Button, &>p{
    margin-top:20px;
}
`;

const Error=styled(Typography)`
font-size:13px;
color:#5aa13a;
line-height:0;
margin-top:10px;
font-weight:600;
`

const Newcomponent=styled(Box)`
height: 80vh;
width:50vh;
display: flex;
flex-direction: column;
padding:25px 25px;

&> div,&>Button, &>p{
    margin-top:20px;
}
`;


const LoginButton=styled(Button)`
text-transform:none;
color: black;
background-color: #5aa13a;
height:80px
width:100px;
margin:20px 140px;
border-radius: 4px;
&:hover {
    background-color: #477e2e;
  }
`;

const Conditions=styled(Typography)`
font-size: 14px;
color: rgb(100, 99, 99);

`;

const Newacc=styled(Typography)`
text-align: center;
font-size: 15px;
margin:auto;
font-weight: 500;
cursor: pointer;
&:hover{
    text-decoration: underline;
}
`;

const accountInitialValue={
    login:{
        view:'login'
    },
    signup:{
        view:'signup'
    }
}

const signupInitialValues={
    firstname:'',
    lastname:'',
    username:'',
    mobile:'',
    email:'',
    password:''


}

const loginInitialValues={
    username:'',
    password:''
}

const LoginDialog= ({open, setOpen})=>{

    const [account,toggleaccount]=useState(accountInitialValue.login);

    const [signup,setSignup]=useState(signupInitialValues);

    const [login,setLogin]=useState(loginInitialValues);

    const [error,setError]=useState(false);

    const {setAccount}=useContext(DataContext);

    const handleClose=()=>{
        setOpen(false);
        toggleaccount(accountInitialValue.login);
        setError(false);
    }

    const togglesignup=()=>{
        toggleaccount(accountInitialValue.signup)
    }

    const onInputChange=(e)=>{
        setSignup({...signup,[e.target.name]:e.target.value});
    }

    const signupUser=async ()=>{
        let response=await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.firstname);
    }

    const onValueChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value})
    }

    const loginUser=async ()=>{
        let response=await authenticateLogin(login);
        console.log(response);
        if(response.status===200){
            handleClose();
            setAccount(response.data.data.firstname);
        }
        else{
            setError(true);
        }

    }

    return [
        <Dialog open={open} onClose={handleClose}>
            {account.view==='login' ?
                <Component>
                        <TextField label="Enter Username" onChange={(e)=> onValueChange(e)} name='username' variant="outlined"/>
                        <TextField label="Enter Password"onChange={(e)=> onValueChange(e)} name='password' variant="outlined"/>
                        {error && <Error> Username/Password is Invalid</Error>}
                        <Conditions>By continuing, you agree to Shopping Ninjas's Conditions of Use and Privacy Notice.</Conditions>
                        <LoginButton onClick={()=> loginUser()} >Continue</LoginButton>
                        <Newacc onClick={()=> togglesignup()}>New to Shopping Ninjas? Create your account</Newacc>
                </Component>
            :
                <Newcomponent>
                        <TextField label="Enter First Name" variant="outlined" onChange={(e)=> onInputChange(e)} name='firstname' />
                        <TextField label="Enter Last Name" onChange={(e)=> onInputChange(e)} name='lastname' variant="outlined" />
                        <TextField label="Enter User Name" onChange={(e)=> onInputChange(e)} name='username' variant="outlined" />
                        <TextField label="Enter Mobile Number" onChange={(e)=> onInputChange(e)} name='mobile' variant="outlined"/>
                        <TextField label="Enter Email" onChange={(e)=> onInputChange(e)} name='email' variant="outlined"/>
                        <TextField label="Enter Password" onChange={(e)=> onInputChange(e)} name='password' variant="outlined"/>
                        <Conditions>By continuing, you agree to Shopping Ninjas's Conditions of Use and Privacy Notice.</Conditions>
                        <LoginButton  onClick={()=>signupUser()}>Continue</LoginButton>
                </Newcomponent>
            }   
        </Dialog>
    ]
}

export default LoginDialog