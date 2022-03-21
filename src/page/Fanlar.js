import React from "react";
import { Context } from "../data/Data";
export default function Fanlar(){
    return(
        <>
           <div className="fanlar">
               <div className="fanlar_container">
                    <Context.Consumer>
                        {fanlar=> 
                            fanlar.map((item, index) => (
                                <div>
                                    <ul>
                                        <li>{index+1} {item.fan}</li>
                                    </ul>
                                </div>
                            ))
                        }
                    </Context.Consumer>
               </div>
           </div>
        </>
    )
}