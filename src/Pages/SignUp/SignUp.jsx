import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext)


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, password, photo);

        setError('')

        if (password.length < 6) {
            setError('Password should be at least six characters');
            return;

        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
                setSuccess('Sign Up Successful')
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body"> <h1 className="text-4xl text-center font-bold">Sign Up!</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo-URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo-URL" className="input input-bordered" />
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
                                <input className="btn btn-primary" type="submit" value="Sign up" />
                            </div>
                        </form>
                        <button className='my-4 text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link>
                        </button>
                        <p className='text-red-500'>{error}</p>
                        <p className='text-green-500'>{success}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;