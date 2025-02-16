import  { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Signup = () => {
    const { createUser, setUser } = useContext(AuthContext)
    const handelSignUp = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;

        createUser(email, password)

            .then(result => {
                setUser(result.user)
                const createTime = (result.user.metadata.creationTime);
                const lastSignInTime = result.user.metadata.lastSignInTime;
                const users = {
                    email, name, createTime, lastSignInTime
                }
                // set data to db
                fetch('https://server-omega-ecru-61.vercel.app/users', {
                    method: "POST",
                    headers: {

                        "content-type": "application/json"
                    },
                    body: JSON.stringify(users)
                })

            }).catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">

            <div className="card p-6 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-5xl ml-4 font-bold">Sign Up now!</h1>
                <form onSubmit={handelSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-primary">Sing Up</button>
                    </div>
                </form>
                <p>Already have an Account ? Please <Link className='text-red-500' to='/signin'>Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;