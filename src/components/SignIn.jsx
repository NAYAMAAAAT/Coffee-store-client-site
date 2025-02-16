import  { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Signin = () => {
    const { LoginUser } = useContext(AuthContext)

    const handelSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        LoginUser(email, password)
            .then(result => {

                const lastSignInTime = result.user.metadata.lastSignInTime;
                console.log(lastSignInTime);
                const updateInfo = {
                    email, lastSignInTime
                }
                fetch('https://server-omega-ecru-61.vercel.app/users', {
                    method: 'PATCH',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(updateInfo)

                })
            }).catch(error => {
                console.log(error.message);
            })


    }
    return (
        <div className="hero bg-base-200 min-h-screen">

            <div className="card p-6 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-5xl ml-4 font-bold">Login now!</h1>
                <form onSubmit={handelSignIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p>Dont have an account ? Please <Link className='text-red-500' to='/signup'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Signin;