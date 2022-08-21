import React from 'react';



const Register = () => {
  return (
    <div>
        <section>
            <h3>Create An Account</h3>
            <form className="form">
                <div className="input_container">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' />
                </div>
                <div className="input_container">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' />
                </div>
                <div className="input_container">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' />
                </div>
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