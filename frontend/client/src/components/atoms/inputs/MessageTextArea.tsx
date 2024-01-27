import React, { useState } from "react";

type MessageTextAreaTypes = {
    className: string;
    onChange: (newValue: string) => void;
}


const MessageTextArea = ({className, onChange}: MessageTextAreaTypes) => {

    const [message, setMessage] = useState('');

    const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        event.currentTarget.placeholder = '';
      };
        
      const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        event.currentTarget.placeholder = 'Treść wiadomości ...';
      };

      const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
          const newMessage = event.target.value;
          setMessage(newMessage);
          onChange(newMessage);
      }
    return(
        <textarea
            name="message"
            className={className}
            rows={10}
            cols={30}
            required
            placeholder="Treść wiadomości ..."
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            style={{ resize: 'vertical' }}
        />
    );
}

export default MessageTextArea;