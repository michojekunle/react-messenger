import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { updateDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
        error: null,
        loading: false
    });

    const {email, password, error, loading} = data;
    const navigate = useNavigate(); 

    const handleChange = e => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setData({...data, error: null, loading: true});

        if(!password || !email) {
            setData({...data, error: "All fields Are required!"})
        }
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            console.log(result.user);
            updateDoc(doc(db, 'users', result.user.uid), {
                isOnline: true
            });

            setData({
                email: '',
                password: '',
                error: null,
                loading: false
            })
            navigate('/');

        } catch (error) {
            setData({ ...data, error: error.message, loading: false });
        }
    }
  return (
    <div>
        <section>
            <h3>Log In To Your Account</h3>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input_container">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' value={email} onChange={handleChange}/>
                </div>
                <div className="input_container">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' value={password} onChange={handleChange}/>
                </div>
                {error ? <p className='error'>{error}</p>: ''}
                <div className="buttons">
                    <button type="reset">Reset</button>
                    <button type="submit" disabled={loading}>{loading ? 'Logging In...': 'Log In'}</button>
                </div>
            </form>
        </section>
    </div>
  )
}

export default Register;