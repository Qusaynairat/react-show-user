// import style from "./obj.module.css";
import { useState } from "react";
function userr() {

    let [users, setusers] = useState([
        {
            id: 1,
            name: "John Doe",
            age: 25,
            email: "hhhhh@gmail.com"
        },
        {
            id: 2,
            name: "Jane Doe",
            age: 24,
            email: "hhhhh@gmail.com"
        },
        {
            id: 3,
            name: "John Smith",
            age: 26,
            email: "hhhhh@gmail.com"
        }
    ]);

    const adduser = () => {
        setusers(
            [
                ...users,
                {
                    id: 4,
                    name: "Qusay",
                    age: 21,
                    email: "QusayNairat@gmail.com"
                }
            ]);
    }


    return (
        <>
            {
                users.map((user) => {
                    return (
                        <div key={user.id}>
                            {/*key is used to uniquely identify each element in the list*/}
                            <h1>{user.name}</h1>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                    )

                })
            }
            <button onClick={adduser}>Add User</button>
        </>
    )
}

export default userr;