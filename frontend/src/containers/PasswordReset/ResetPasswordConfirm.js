import React from 'react';


const ResetPasswordConfirm = (props) => {

    // const [formData, setFormData] = useState({
    //     new_password: '',
    //     re_new_password: ''
    // });

    // const { new_password, re_new_password } = formData;

    // const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    // const onSubmit = e => {
    //     e.preventDefault();
    // };

    // const {uid, token} = useParams();
    // console.log("===> props: ", props);
    // console.log(`==> auth: ${uid}, token: ${token}`);
    
    // let formData = (e)=>{
    //     let data = {
    //         'uid': uid,
    //         'token': token,
    //         'new_password': new_password,
    //         're_new_password': re_new_password,
    //     }
    //     axios.post(props.base_url+"/accounts/users/reset_password_confirm/", data).then((response)=>{
    //         console.log("===> response: ", response);
    //         <Navigate to="/loginandsignup" />
    //     }).catch((errors)=>{console.log("===> errors: ", errors)});
        
    // }
    return (
        <div className='container mt-5'>
            <form >
            <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='New Password'
                        name='new_password'
                        // value={value.new_password}
                        // onChange={(e) => setvalue(e.target.value)}
                        minLength='6'
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Confirm New Password'
                        name='re_new_password'
                        // value={value.re_new_password}
                        // onChange={(e) => setvalue(e.target.value)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Reset Password</button>
            </form>
        </div>
    );
};

export default ResetPasswordConfirm;