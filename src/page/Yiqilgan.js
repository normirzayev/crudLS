import React from "react";
import { Context } from "../data/YiqilganData";
export default function Yiqilgan() {
    return(
        <>
            <Context.Consumer>
                {malumot=>
                    <div>
                        <table>
                            <tr>
                                <th>N%</th>
                                <th>KURS</th>
                                <th>ISM</th>
                                <th>FAMILYA</th>
                                <th>FAN</th>
                            </tr>
                            {malumot.map((item, index) => (
                                <tr>
                                    <th>{index+1}</th>
                                    <td>{item.kurs}</td>
                                    <td>{item.ism}</td>
                                    <td>{item.fam}</td>
                                    <td>{item.fan}</td>
                                </tr>                                
                            ))}
                        </table>
                    </div>
                }
            </Context.Consumer> 
        </>
    )
}