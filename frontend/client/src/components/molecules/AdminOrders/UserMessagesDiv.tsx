import React, { useEffect, useState } from "react";


interface UserMessage {
    id: number,
    health_problems: string,
    allergies: string,
    eating: string,
    target: string,
}

type UserMessagesDivProps = {
    user_message_id: number | undefined
}

const UserMessagesDiv = ({user_message_id}: UserMessagesDivProps) => {

    const [userMessage, setUserMessage] = useState<UserMessage>();

    const fetchMessage = async () => {
        const response = await fetch(`http://localhost:8000/api/user_messages/get?message_id=${user_message_id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            const content = await response.json();
            setUserMessage(content);
        }
        else { console.log(response.statusText, response.status); }
    }

    useEffect(()=>{
        fetchMessage();
    }, [user_message_id])

    return (
        <div className="user-messages-div-wrapper">
            <span className="target-span-title">Cel do osiągnięcia: <span className="target-span-content">{userMessage?.target}</span></span>

            <span className="user-messages-titles-span">Problemy zdrowotne:</span>
            <p>{userMessage?.health_problems}</p>

            <span className="user-messages-titles-span">Alergie:</span>
            <p>{userMessage?.allergies}</p>

            <span className="user-messages-titles-span">Co lubi jeść:</span>
            <p>{userMessage?.eating}</p>
        </div>
    );
}

export default UserMessagesDiv;