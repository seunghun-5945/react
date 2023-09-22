import React from "react";

export default function UserInfo (props) {
    return (
        <div>
            <div>
                <p>이름: {props.name}</p>
            </div>
            <div> 
                <p>나이: {props.age}</p>
            </div>
            <div>
                <p>전번: {props.callNum}</p>
            </div>
            <hr/>
        </div>
    )
}