import React from "react";
const Avatar=({imageurl})=>{
    return<div>
<img src="{imageurl}"/>   
    </div> 
}
Avatar.defaultProps={
    imageurl:'https://via.placeholder.com/150'
}
export default Avatar;