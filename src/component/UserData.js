import React from "react";
import './UserData.css';


function UserData(props) {
    return (
        <div className='user-card'>
            {
                props.userdata && props.userdata.data && props.userdata.data.map((value, index) => {
                    return (
                        <div className="card" key={index}>
                            <img src={value.avatar} className="user-img" />
                            <div className="user-info">
                                <p><b>Name :</b> {value.first_name}{value.last_name}</p>
                                <p><b>Email :</b> {value.email} </p>
                            </div>
                        </div>
                    )
                }
                )
            }
        </div>
    )

}


export default UserData;
