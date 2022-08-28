import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { setDoc, doc } from 'firebase/firestore'


const Register = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        error: null,
        loading: false
    });

    const {name, email, password, error, loading} = data;

    const handleChange = e => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = async e => {
        e.preventDefault();

        if(!name || !password || !email) {
            setData({...data, error: "All fields Are required!"})
        }
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            console.log(result.user);
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        <section>
            <h3>Create An Account</h3>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input_container">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' value={name} onChange={handleChange}/>
                </div>
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
                    <button type="reset">Clear</button>
                    <button type="submit">Register</button>
                </div>
            </form>
        </section>
    </div>
  )
}

export default Register;