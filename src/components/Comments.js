import React, {Component} from "react";
import {normalizedComments} from "../normalizedComments.js"
import UserComment from "./UserComment.js"

export default class Comments extends Component{

    render(){

        const el = normalizedComments.map((e)=>{
           return <UserComment key={e.id} user = {e.user} text = {e.text} />
        });
        return (
           <div className="allComments">
               {el}
           </div>
        )
    }
}