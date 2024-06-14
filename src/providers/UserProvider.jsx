import React, { useEffect, useState } from 'react';
import { UserContext } from '../Contexts';
import axios from 'axios';
import Loading from '../Loading';

function UserProvider({ children }) {
    const [user, setUser] = useState();
    const [loadingUser, setLoadingUser] = useState(true);

    const token = localStorage.getItem("token");

    useEffect(function () {
        if (token) {
            axios.get("https://myeasykart.codeyogi.io/me", {
                headers: {
                    Authorization: token,
                }
            }).then(function (response) {
                setUser(response.data);
                setLoadingUser(false);
            }).catch(() => {
                localStorage.removeItem("token");
                setLoadingUser(false);
            })
        } else {
            setLoadingUser(false);
        }
    }, [])

    if(loadingUser){
        return <Loading />
    }

    return (
        <UserContext.Provider value={{ user, setUser }} >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
