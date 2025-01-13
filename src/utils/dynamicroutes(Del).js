// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Item from "antd/es/list/Item";

// const DynamicRoutes = () => {
//   const [menu, setMenu] = useState([]);
//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         const response = await axios.get("http://127.0.0.1:5000/api/routes");
//         setMenu(response.data);
//       } catch (error) {
//         console.error("failed to fetch route:", error);
//       }
//     };
//     fetchMenu();
//   }, []);

//   return (
//     <div>
//       <h1>Dynamic Routes</h1>
//       <ul>
//         {menu.map((item) => (
//           <li key={item.id}>
//             <a href={item.path}>{item.name}</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DynamicRoutes;
