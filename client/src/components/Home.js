// import { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";

// function Home( {user, setUser} ) {
//   const [items, setItems] = useState([])

//   const navigate = useNavigate();
//   // console.log(user.first_name)
//   function handleLogout() {
//     fetch("/logout", { method: "DELETE" }).then((r) => {
//       if (r.ok) {
//         setUser(null);
//         navigate("/login");
//       }
//     });
//   }

//   useEffect(() => {
//     fetch("categories")
//     .then(response => response.json())
//     .then((data) => {
//       setItems(data)
//     })
//   }, [])

//   return (
//     <div>
//         {/* <p>{user.first_name}</p> */}
//         <button className="border-2" onClick={handleLogout} >logout</button>
//         <div>
//           {items.map((item)=>(
//             <div key={item.id} className="">
//               <h1 className="text-center text-2xl font-black mb-6">{item.name}</h1>
//               <div className="flex w-full flex-wrap gap-4 justify-center " >
//                 {item.products.map((data) => (
//                   <div key={data.id} className="w-[250px] border-2">
//                     <NavLink to={`/single-product/${data.id}`}>
//                       <img src={data.image} alt="" className="w-full"/>
//                       <p>{data.product_name}</p>
//                       <p>{`Ksh: ${data.price}`}</p>
//                     </NavLink>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//     </div>
//   );
// }

// export default Home;
