import axios from 'axios';
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

const Verfication = (props) => {
    const {uid, token} = useParams();
    console.log("===> props: ", props);
    console.log(`==> auth: ${uid}, token: ${token}`);
    let verify_account = (e)=>{

        function getCookie(cName) {
            const name = cName + "=";
            const cDecoded = decodeURIComponent(document.cookie); //to be careful
            const cArr = cDecoded.split('; ');
            let res;
            cArr.forEach(val => {
              if (val.indexOf(name) === 0) res = val.substring(name.length);
            })
            return res
          }
        
          let config = {
            'headers': {
              'X-CSRFToken': getCookie('csrftoken')
            }
          };
        let data = {
            'uid': uid,
            'token': token
        }
        axios.post(props.base_url+"/accounts/users/activation/", data,config).then((response)=>{
            console.log("===> response: ", response);
            <Navigate to="/loginandsignup" />
        }).catch((errors)=>{console.log("===> errors: ", errors)});
        
    }
    return (
        <div className='container'>
            <div 
                className='d-flex flex-column justify-content-center align-items-center'
                style={{ marginTop: '200px' }}
            >
                <h1>Verify your Account:</h1>
                <button
                    onClick={verify_account}
                    style={{ marginTop: '50px' }}
                    type='button'
                    className='btn btn-primary'
                >
                    Verify
                </button>
            </div>
        </div>
    );
};

export default Verfication;
