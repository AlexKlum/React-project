// import React , { useState, useEffect } from "react";
// import { NavLink } from 'react-router-dom';
// import ReactDOM from 'react-dom/client';
// import { useParams } from 'react-router-dom';
// import { Rating } from 'react-simple-star-rating';






//    import Data from "./Data";

// const filterItem = (curcat) => {
//    const newItem = Data.filter((newVal) => {
//       return newVal.category === curcat; 
//       // comparing category for displaying data
//    });
//    setItem(newItem);



 
    
//    const Buttons = ({ filterItem, setItem, menuItems }) => {
//      return (
//        <>
//          <div className="d-flex justify-content-center">
//            {menuItems.map((Val, id) => {
//              return (
//                <button
//                  className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
//                  onClick={() => filterItem(Val)}
//                  key={id}
//                >
//                  {Val}
//                </button>
//              );
//            })}
//            <button
//              className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
//              onClick={() => setItem(Data)}
//            >
//              All
//            </button> 
//           </div>
//        </>
//      );
//    };
    
//    export default Buttons;


//    const [isSelected, setIsSelected] = useState({});

//    useEffect(() => {
//     const isSelected = {};
   
//     const categoryNames = recipes.map({category} => category.name);
//     categoryNames.forEach(categoryName => isSelected[categoryName] = false)
   
//     setIsSelected(isSelected);
//    }, [])

//    <button key={index} onClick={() => setIsSelected({...isSelected,
//     [category.name] : !isSelected[category.name]})}>
//    {category.name}
//  </button>
 
//    {
//     recipes.filter({categories} => isSelected[categories.name])
//       .map({categorie} => {
//        // render here
//       })
//    }





   
//    const testMenu = () => {
//       return <p>testMenu</p>
      
//    }
   
//    export default testMenu;
//  };


