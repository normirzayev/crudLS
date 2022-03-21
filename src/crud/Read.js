import React, {useEffect, useState}  from "react";
import { useNavigate } from "react-router-dom";
// import ochir from "../eats/img/delete.svg";
// import edit from "../eats/img/images.svg";
function Read(){
    const add = useNavigate();
    const update = useNavigate();
    const [readData, setReadData] = useState([])
    useEffect(()=>{
       setInterval(() => {
            if(localStorage.getItem('key')){
                setReadData([...JSON.parse(localStorage.getItem('key'))]);
            }
       }, 500);
    },[]);
    
    const deleFun = (item) => {
        let filterData = [];
        readData.map((post)=> {
            return item.id == post.id ? "":  filterData.push(post)
        });
        localStorage.setItem('key', JSON.stringify(filterData))
    }
    const updateFun = (item) => {
        console.log(item);
        localStorage.setItem('update', JSON.stringify(item))
        update("update");
    }
    return(
        <div className="container">
            <h1>Read</h1>
            <button onClick={(e)=> add("create")} id="add">Add</button>
            <table>
                <thead>
                    <tr> 
                        <th>#</th>
                        <th>Name</th>
                        <th>About</th>
                        <th>Price</th>
                        <th>Delte</th>
                        <th>Editor</th>
                    </tr>
                </thead> 
                <tbody>
                    {
                        readData == "" ? <tr> <h1>Malumot topilmadi</h1> </tr> : 
                        readData.map((item, index) => (
                                <tr key={item.id}> 
                                    <th>{index + 1}</th>
                                    <th>{item.name}</th>
                                    <th>{item.about}</th>
                                    <th>{item.price}</th>
                                    <th onClick={(e)=> deleFun(item)}>ochir</th>
                                    <th onClick={(e)=> updateFun(item)}>edit</th>
                                </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Read;