import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
function Update (){
    const back = useNavigate();
    const [data, setData] = useState({});
    const [alldata, setAllData] = useState([]);
    useEffect(()=> {
        setData(JSON.parse(localStorage.getItem('update')))
        setAllData(JSON.parse(localStorage.getItem('key')))
    }, [])
    const [erdata, setErData] = useState({
        erName: "",
        erAbout: "",
        erPrice: ""
    })
    const dataSend = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const sumbitdata = (e) => {
        e.preventDefault();     
        if(data.name == ""){
            setErData({...erdata, erName:"Name Xato!"})
        }else
        if(data.about == ""){
            setErData({...erdata, erAbout: "Malumot Xato!"})
        }else
        if(data.price == ""){
            setErData({...erdata, erPrice: "Narx Xato!"})
        }
        else{
            let filterUpdate = [];
           alldata.map((item) => {
               item.id == data.id ? filterUpdate.push(data) : filterUpdate.push(item)  
           })
           localStorage.setItem('key', JSON.stringify(filterUpdate));
           back('/');
        }
    }
    return(
        <div className="container">
            <form onSubmit={sumbitdata}>
                <h1>Create</h1>
                <button id="back" onClick={(e)=> back('/')}>Back</button>
                <div>
                    <p>Name</p>
                    <input name="name" type="text" defaultValue={data.name} placeholder={data.name} onChange={dataSend}/>
                </div>
                <div>
                    <p>About</p>
                    <input type="text" name="about" defaultValue={data.about} placeholder={data.about} onChange={dataSend}/>
                </div>
                <div>
                    <p>Price</p>
                    <input type="text" name="price" defaultValue={data.price} placeholder={data.price} onChange={dataSend}/>
                </div>
                <button id="send">Send</button>
            </form>
        </div>
    )
}

export default Update;