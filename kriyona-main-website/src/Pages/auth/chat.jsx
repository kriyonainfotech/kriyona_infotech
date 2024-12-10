// import React, { useEffect, useState } from "react";
// import "./chat.css"; // Add styles in a separate CSS file
// import Sidebar from "./sidebar";
// import io from "socket.io-client";
// import axios from "axios";

// const Chat = () => {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState("");
//   const [user, setUser] = useState({});
//   const [selectedUser, setSelectedUser] = useState(null);

//   const socket = React.useMemo(() => {
//     return io("http://localhost:8000", {
//       transports: ["websocket"],
//       auth: {
//         userId: user._id, // Replace with actual user ID
//       },
//     });
//   }, [user._id]);

//   useEffect(() => {
//     // This useEffect will be triggered every time a new user is selected for chat
//     if (selectedUser) {
//         console.log(selectedUser);
        
//         const markMessagesAsSeen = async () => {
//             try {
               
              
//                 if (messages.length > 0) {
//                     const messageIds = messages.map(msg => msg._id);
//                     console.log(messageIds);
                    
//                     await axios.post(
//                         "http://localhost:8000/message/messageSeen",
//                         { messageIds, receiverId: user._id },
//                         { withCredentials: true }
//                     );
//                     socket.emit("markAsSeen", messageIds, selectedUser._id);
//                 }
//             } catch (error) {
//                 console.error("Error marking messages as seen:", error);
//             }
//         };
        
  
//       markMessagesAsSeen();
//     }
//   }, [selectedUser, user._id, socket]);
  
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await axios.get("http://localhost:8000/auth/getauth", {
//           withCredentials: true,
//         });
//         if (res.data.success) {
         
//           setUser(res.data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching user:", error);
//       }
//     };
//     fetchUser();
//   }, []);

  
//   useEffect(() => {
//     const fetchMessages = async () => {
//       if (!selectedUser) return;

//       try {
//         const res = await axios.post(
//           `http://localhost:8000/message/getUsermessages`,
//           { receiverId: selectedUser._id },
//           { withCredentials: true }
//         );
//         if (res.data.success) {
//            console.log(res.data.messages);
           
            
//           setMessages(res.data.messages);
//         }
//       } catch (error) {
//         console.error("Error fetching messages:", error);
//       }
//     };

//     fetchMessages();
//   }, [selectedUser]);

//   useEffect(() => {
//     const messageSeenListener = (messageId) => {
//         setMessages((prevMessages) =>
//             prevMessages.map((msg) =>
//                 msg._id === messageId ? { ...msg, seen: true } : msg
//             )
//         );
//     };

//     socket.on('messageSeen', messageSeenListener);

//     return () => {
//         socket.off('messageSeen', messageSeenListener);
//     };
// }, [socket]);


//   const handleSendMessage = () => {
//     if (!message.trim() || !selectedUser) return;

//     // Emit the message to the server
//     const newMessage = {
//       sender: user._id,
//       receiver: selectedUser._id,
//       content: message,
//     };

//     socket.emit("sendMessage", newMessage);

//     // Update the local state to display the message immediately
//     setMessages((prevMessages) => [...prevMessages, newMessage]);

//     // Clear the input field
//     setMessage("");
//   };

//   const handleUserSelect = (user) => {
//     console.log(user);
    
//     setSelectedUser(user);
//   };

//   return (
//     <div className="chat-container">
//       <Sidebar onSelectUser={handleUserSelect} />
//       <div className="chat-main">
//         <h1 className="chat-header">
//           {selectedUser ? `Chat with ${selectedUser.name}` : "Select a user"}
//         </h1>
       
//           <div className="chat-messages">
//           {messages.map((msg, index) => (
//     <div key={index} className={`chat-message ${msg.sender === user._id ? "right" : "left"}`}>
//         <strong>{msg.sender === user._id ? "You" : selectedUser.name}:</strong> {msg.content}
        
//         {/* Show tick symbol based on 'seen' status */}
//         {msg.sender === user._id && (
//             <span className="message-status">
//                 {msg.seen ? "✓✓" : "✓"} {/* One tick for sent, two ticks for seen */}
//             </span>
//         )}
//     </div>
// ))}

//           </div>
       
//         {selectedUser && (
//           <div className="chat-input">
//             <input
//               type="text"
//               placeholder="Type your message..."
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//             />
//             <button onClick={handleSendMessage}>Send</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Chat;