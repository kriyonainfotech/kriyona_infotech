// import React, { useEffect, useState } from "react";
// import "./chat.css"; // Add sidebar-specific styles here
// import axios from "axios";

// const Sidebar = ({ onSelectUser }) => {
//     const [chatUsers, setChatUsers] = useState([]);

//     useEffect(() => {
//         const fetchChatUsers = async () => {
//             try {
//                 const res = await axios.get('http://localhost:8000/message/GetUser', { withCredentials: true });
//                 if (res.data.success) {
//                     setChatUsers(res.data.users);
//                 }
//             } catch (error) {
//                 console.error('Error fetching chat users:', error);
//             }
//         };

//         fetchChatUsers();
//     }, []);

//     return (
//         <div className="sidebar">
//             <h2>Chats</h2>
//             <ul className="user-list">
//                 {chatUsers.map((user) => (
//                     <li key={user._id} onClick={() => onSelectUser(user)}>
//                         <img src={user.profilePic || "/default-avatar.png"} alt="Avatar" className="avatar" />
//                         <span>{user.name}</span>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Sidebar;
