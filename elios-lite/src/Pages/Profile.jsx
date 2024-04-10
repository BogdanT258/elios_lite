import React, { useEffect, useState } from 'react'
import DefaultLayout from '../Components/DefaultLayout';
import ProfileInfo from '../Components/ProfileInfo';
import { collection, getDocs } from 'firebase/firestore';
import { firedb } from '../firebaseConfig';
import { useDispatch } from 'react-redux';

function Profile() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    const getData = async () => {
        dispatch({ type: "showLoading" });
        try {
            const querySnapshot = await getDocs(collection(firedb, "posts"));
            const temp = [];
            querySnapshot.forEach((doc) => {
                temp.push({ ...doc.data(), id: doc.id });
            });
            setData(temp);
            dispatch({ type: "hideLoading" });
            console.log(temp);
        } catch (error) {
            console.error("Error fetching data: ", error);
            dispatch({ type: "hideLoading" });
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <DefaultLayout>
            {data.map((post) => (
                <ProfileInfo key={post.id} data={post} />
            ))}
        </DefaultLayout>
    );
}

export default Profile
