import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
function Create (){
    const back = useNavigate();
    let vaqt = new Date();
    const [data, setData] = useState({ 
        id:btoa(vaqt.getMilliseconds() * Math.random() * 1000),
        name: "", 
        about: "",
        price: "",
    });
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
            alert("to'ldirmadingiz");
        }
        else{
            if(localStorage.getItem("key")){
                let dataLS = [...JSON.parse(localStorage.getItem('key'))]
                dataLS.push(data);
                localStorage.setItem("key", JSON.stringify(dataLS))
                back("/");
                setData({...data, id:btoa(vaqt.getMilliseconds() * Math.random() * 1000)})
            }
            else{
                localStorage.setItem("key", JSON.stringify([data]))
                back("/");
                setData({...data, id:btoa(vaqt.getMilliseconds() * Math.random() * 1000)})
            }
        }
    }
    return(
        <div className="container">
            <span className="load"></span>
            <form onSubmit={sumbitdata}>
                <h1>Create</h1>
                <button id="back" onClick={(e)=> back('/')}>Back</button>
                <div>
                    <p>Name</p>
                    <input name="name" type="text" onChange={dataSend}/>
                </div>
                <div>
                    <p>About</p>
                    <input type="text" name="about" onChange={dataSend}/>
                </div>
                <div>
                    <p>Price</p>
                    <input type="text" name="price" onChange={dataSend}/>
                </div>
                <button id="send"> Send</button>
            </form>
        </div>
    )
}

export default Create;