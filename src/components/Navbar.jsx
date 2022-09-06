import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { updateDoc, doc } from 'firebase/firestore';
import { AuthContext } from '../context/auth';



const Navbar = () => {
  const { user } = useContext(AuthContext);
  alert(user);

  const handleSignOut = async () => {
    await updateDoc(doc(db, 'users', auth.currentUser.uid), {isOnline: false});
    await signOut(auth);
  }
  return (
    <nav>
      <h3><Link to='/'>Messenger</Link></h3>
      <div>

      {
        user ? 
        <>
          <Link to='/profile'>Profile</Link>
          <button onClick={handleSignOut} style={{background: "transparent", border: "2px solid #fc0", padding: "6px 20px", borderRadius: "6px",cursor: "pointer", color: "#fff", fontSize: "14px" }}>Log out</button>
        </> :
        <>
          <Link to='/register'>Register</Link>
          <Link to='/login'>Log In</Link> 
        </>
      }

      </div>
    </nav>
  )
}

export default Navbar
