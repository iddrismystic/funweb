import React from 'react';
import Logo from './Logo';
import {useState} from "react"
import { useRouter } from 'next/dist/client/router';
function Sidebar() {
   const Router = useRouter()
   let links = [
    {
        text:"Home",
        path:""
    } ,
        {
            text:"Getting Started",
            path:"gettingstarted"
        } ,
        {
            text:"Colors",
            path:"colors"
        } ,
        {
            text:"Typography",
            path:"typography"
        } ,
        {
            text:"Helpers",
            path:"helpers"
        },
        {
            text:"Icons",
            path:"icons"
        } ,
        {
            text:"Container",
            path:"container"
        } ,
        {
            text:"Grid",
            path:"Grid"
        } ,
        {
            text:"Buttons",
            path:"buttons"
        } ,
        {
            text:"Card",
            path:"card"
        },
        {
            text:"Slide Panel",
            path:"slidepanel"
        } ,
        {
            text:"Inputs",
            path:"Input"
        } ,
        {
            text:"Table",
            path:"Table"
        } ,
        {
            text:"List",
            path:"List"
        } ,
        {
            text:"Modal",
            path:"Modal"
        } ,
        {
            text:"Dropdown",
            path:"Dropdown"
        },
        {
            text:"Navigation bar",
            path:"Navigation"
        },
        {
            text:"Slider",
            path:"Slider"
        },
        {
            text:"About",
            path:"About"
        } 
    ]

    //handlesidebar
    const [width, setwidth] = useState("200px");
    const [display, setdisplay] = useState('block');
    const Handlesidebar = ()=>{
     if(width === "200px"){
         setwidth("0px")
    }else{
         setwidth("200px")
    }
    }
    const [search, setsearch] = useState('');
    return (
        <div className="text-small">

              <div className="open-sidebar">
            <span className="material-icons icon size-2 pointer" onClick={Handlesidebar} >
               menu
            </span>
              </div>
              <div className="SideBar" style={{width : `${width}`}}>
              <div className="section">
                      <input className="input search width-100-p padding-top-10 padding-bottom-10 text-center" onChange={(e)=>setsearch(e.target.value)} placeholder="Search..." />
                  </div>

                <div className="sidecontent">
                  
                <div className="section">

{
   links.filter(text=>{
   if(search === ''){
       return links;
   }else if (
   text.text.toLowerCase().trim().includes(search.toLowerCase().trim())
   ){
       return links
   }
   }).map(link=>(
  <div className="padding-top-10" key={link.text.trim()}>
      <div className="padding button text-lighter sidebar-link" onClick={()=>Router.push(`/${link.path}`)}>
      {link.text}
      <span className="sidebar-icon">
      <i className="fas fas fa-angle-double-right text-indigo"></i>
      </span>

      </div>

  </div>
    ))
}

</div>
                </div>
   
              </div>
        </div>
    );
}

export default Sidebar;