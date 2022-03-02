import axios from 'axios';
import React, { useState } from 'react';

const ResetPassword = (props) => {
    const [state, setState] = useState({email: ''});
    console.log("state: ", state);
    // function getCookie(cName) {
    //     const name = cName + "=";
    //     const cDecoded = decodeURIComponent(document.cookie); //to be careful
    //     const cArr = cDecoded.split('; ');
    //     let res;
    //     cArr.forEach(val => {
    //       if (val.indexOf(name) === 0) res = val.substring(name.length);
    //     })
    //     return res
    //   }
    
    //   let config = {
    //     'headers': {
    //       'X-CSRFToken': getCookie('csrftoken')
    //     }
    //   };

    const sendHandler = (email)=>{
        console.log("here I am");
        axios.post(props.base_url+"/accounts/users/reset_password/", {email: email}).then((response)=>{
            console.log("==> ", response);
        });
    }
    
    return (
        <div className='container mt-9'>
            <h1>Request Password Reset:</h1>
            <form >
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={state.email}
                        onChange={(e)=>{setState({email: e.target.value})}}
                        required
                    />
                </div>
                <button 
                    className='btn btn-primary' 
                    type='button' 
                    onClick={ 
                        (e)=>{
                            e.preventDefault();
                            sendHandler(state.email);
                        }
                    }
                >Reset Password</button>
            </form>
        </div>
    );
};

export default ResetPassword;