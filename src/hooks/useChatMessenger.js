import { useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import { ThemeContext } from "../ThemeContext";

const socket = io( "http://localhost:3002" );

export const useChatMessenger = ( person ) => {
    const [ messages, setMessages ] = useState( [] );
    const [ newMessage, setNewMessage ] = useState( "" );
    const [ currentUser, setCurrentUser ] = useState( person );
    const [ showPicker, setShowPicker ] = useState( false );

    const currentUserEmail = localStorage.getItem( "email" );

    useEffect( () => {
        const messageListener = ( message ) => {
            console.log( "New message received:", message );
            setMessages( ( prev ) => [ ...prev, message ] );
        };

        if ( currentUserEmail ) {
            socket.on( `newMessage:${ currentUserEmail }`, messageListener );
        }

        return () => {
            if ( currentUserEmail ) {
                socket.off( `newMessage:${ currentUserEmail }`, messageListener );
            }
        };
    }, [ currentUserEmail ] );

    const onEmojiClick = ( emojiObject ) => {
        setNewMessage( ( prevMessage ) => prevMessage + emojiObject.emoji );
        setShowPicker( false );
    };

    const emitRegisterEmail = () => {
        socket.emit( "registerEmail", currentUserEmail );
    }

    const sendMessage = () => {
        if ( newMessage.trim() && person?.email ) {
            const messageData = {
                sender: currentUserEmail,
                receiver: person.email,
                content: newMessage,
                timestamp: new Date(),
            };

            socket.emit( "sendMessage", messageData );
            setMessages( ( prev ) => [ ...prev, messageData ] );
            setNewMessage( "" );
        }
    };

    return {
        messages,
        newMessage,
        setNewMessage,
        showPicker,
        setShowPicker,
        onEmojiClick,
        sendMessage,
        currentUserEmail,
        emitRegisterEmail,
        setMessages
    };
};
