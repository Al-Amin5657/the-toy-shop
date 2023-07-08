
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaGoogle, } from 'react-icons/fa';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const from = location.state?.from?.pathname || "/";


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('')

        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess('Sign In Successful')
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error));
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
                alert('Google SignIn Successful')
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body"> <h1 className="text-4xl text-center font-bold">Login now!</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New to the toy shop? <Link className='text-orange-600 font-bold' to="/signUp">Sign Up</Link></p>
                        <hr />
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent"><FaGoogle></FaGoogle> Google SignIn</button>
                        <p className='text-red-500'>{error}</p>
                        <p className='text-green-500'>{success}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;