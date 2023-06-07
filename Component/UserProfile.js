import { useEffect, useState } from 'react';
import { auth } from '../src/pages/api/firebase'; // Assuming you have a separate file exporting the 'auth' object

const UserProfile = () => {
  const [userPicture, setUserPicture] = useState('');

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, retrieve user data
        const userData = {
          picture: user.photoURL,
          // Other user data fields...
        };

        localStorage.setItem('userPicture', userData.picture);

        setUserPicture(userData.picture);
      } else {
        localStorage.removeItem('userPicture');
        setUserPicture('');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <img src={userPicture} alt="Profile" />
    </div>
  );
};

export default UserProfile;
