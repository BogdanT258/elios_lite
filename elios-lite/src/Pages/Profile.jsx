import React, { useEffect, useState } from 'react';
import DefaultLayout from '../Components/DefaultLayout';
import ProfileInfo from '../Components/ProfileInfo';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { firedb } from '../firebaseConfig';
import { useDispatch } from 'react-redux';

function Profile() {
    const [userData, setUserData] = useState(null);
    const dispatch = useDispatch();

    const getData = async () => {
        dispatch({ type: "showLoading" });

        // Retrieve user data from localStorage
        const localStorageUserData = JSON.parse(localStorage.getItem("userData"));
        console.log("YOO",localStorageUserData);
        if (!localStorageUserData || !localStorageUserData.email) {
            console.log("User data not found in localStorage or missing email.");
            return;
        }
        const localStorageUserEmail = localStorageUserData.email;

        // Query Firestore to find user with matching email
        const q = query(collection(firedb, "users"), where("email", "==", localStorageUserEmail));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                setUserData({ ...doc.data(), id: doc.id });
            });
        } else {
            console.log("No matching user found in Firestore for the logged-in user's email.");
        }
        dispatch({ type: "hideLoading" });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <DefaultLayout>
            {userData && <ProfileInfo key={userData.id} data={userData} />}
        </DefaultLayout>
    );
}

export default Profile;
