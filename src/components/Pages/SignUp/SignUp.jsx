import { useContext, useState } from 'react';
import signUp from '../../../assets/images/signUp.avif';
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { UserProvider } from '../../Hook/ContextProvider/UserContext';

const SignUp = () => {
    const { googleLogin, createUserByEmail } = useContext(UserProvider);
    const [show, setShow] = useState(false);


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(email, password, photo, name)

        createUserByEmail(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    };

    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    };
    return (
        <div className='flex w-full'>
            <div className=' w-1/2'>
                <img src={signUp} alt="" />
            </div>
            <div className='w-1/2 bg-green-400'>
                <div className='max-w-xl mx-auto mt-10 '>
                    <form onSubmit={handleSignUp}>
                        <div className='mb-2'>
                            <label>
                                <span className='text-black text-lg font-bold font-serif'>Name</span>
                            </label>
                            <br />
                            <input type="text" placeholder="Enter Your Name" name='name' className="input input-bordered input-accent w-full bg-white text-black text-lg" required />
                        </div>
                        <div className='mb-2'>
                            <label>
                                <span className='text-black text-lg font-bold font-serif'>Email</span>
                            </label>
                            <br />
                            <input type="text" placeholder="Enter Email" name='email' className="input input-bordered input-accent w-full bg-white text-black text-lg" required />
                        </div>
                        <div className='mb-2'>
                            <label>
                                <span className='text-black text-lg font-bold font-serif'>Photo URL</span>
                            </label>
                            <br />
                            <input type="text" placeholder="Enter Your PhotoUrl" name='photo' className="input input-bordered input-accent w-full bg-white text-black text-lg" required />
                        </div>
                        <div>
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
                        </div>
                        <input className='btn btn-info text-white text-xl font-semibold text-center my-10 w-full shadow-xl' type="submit" value="Sign Up " />
                        <p className='text-white text-center text-lg'>Have an account in Kids Paradise ? Please <Link className='text-yellow-700 text-xl font-semibold hover:underline' to="/login">Login</Link></p>
                    </form>
                    <div className="divider text-white">OR</div>
                    <button className="btn w-full btn-outline text-black bg-slate-100 border-0 text-xl hover:bg-white shadow-xl mt-10" onClick={handleGoogle}><FaGoogle className='w-6 h-6 text-blue-500 mr-2' /> Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;