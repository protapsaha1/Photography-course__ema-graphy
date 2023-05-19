import { useContext, useRef, useState } from 'react';
import login from '../../../assets/images/login.avif';
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { UserProvider } from '../../Hook/ContextProvider/UserContext';
import Swal from 'sweetalert2';
const Login = () => {
    const { googleLogin, loginUserByEmail, resetPassword } = useContext(UserProvider);
    const [show, setShow] = useState(false);
    const emailRef = useRef();



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUserByEmail(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Login successful',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.log(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Somethings went to wrong...',
                    text: 'Check your email or password'
                })
            })


    };

    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    icon: 'success',
                    title: 'Login successful!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.log(error.message);
            })
    };

    const handlePasswordReset = () => {
        const email = emailRef.current.value;
        if (!email) {
            Swal.fire({
                icon: 'error',
                title: 'Somethings went to wrong...',
                text: 'Please fill your email field'
            })
            return;
        }
        resetPassword(email)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'successfully reset password',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => { console.log(error.message) })
    }

    return (
        <div className='flex w-full'>
            <div className=' w-1/2'>
                <img src={login} alt="" />
            </div>
            <div className='w-1/2 bg-green-400'>
                <div className='max-w-xl mx-auto mt-10 '>
                    <form onSubmit={handleLogin}>
                        <div className='mb-2'>
                            <label>
                                <span className='text-black text-lg font-bold font-serif'>Email</span>
                            </label>
                            <br />
                            <input type="text" placeholder="Enter Email" name='email' ref={emailRef} className="input input-bordered input-accent w-full bg-white text-black text-lg" required />
                        </div>
                        <div className='mb-2'>
                            <label>
                                <span className='text-black text-lg font-bold font-serif'>Password</span>
                            </label>
                            <br />
                            <label className="input-group">
                                <input type={show ? "text" : "password"} placeholder="Enter Password" name='password' className="input input-bordered w-full bg-white text-black text-lg" required />
                                <span onClick={() => setShow(!show)}>
                                    {
                                        show ? < FaEye className='w-6 h-6' /> : <FaEyeSlash className='w-6 h-6' />
                                    }
                                </span>
                            </label>
                            <p className='text-lg text-yellow-600 hover:underline' onClick={handlePasswordReset}>Forget Password</p>
                        </div>
                        <input className='btn btn-info text-white text-xl font-semibold text-center my-10 w-full shadow-xl' type="submit" value="Login" />
                        <p className='text-white text-center text-lg'>New to Kids Paradise ? Please <Link className='text-yellow-700 text-xl font-semibold hover:underline' to="/sign-up">Sign Up</Link></p>
                    </form>
                    <div className="divider text-white">OR</div>
                    <button className="btn w-full btn-outline text-black bg-slate-100 border-0 text-xl hover:bg-white shadow-xl mt-14" onClick={handleGoogle}><FaGoogle className='w-6 h-6 text-blue-500 mr-2' /> Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;