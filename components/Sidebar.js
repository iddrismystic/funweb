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
        text:"Themes",
        path:"themes"
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
            text:"Show And Hide",
            path:"show-hide"
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
            path:"grid"
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
            path:"input"
        } ,
        {
            text:"Table",
            path:"table"
        } ,
        {
            text:"List",
            path:"list"
        } ,
        {
            text:"Alerts",
            path:"alerts"
        } ,
        {
            text:"Modal",
            path:"modal"
        } ,
        {
            text:"Dropdown",
            path:"dropdown"
        },
        {
            text:"Progress Bar",
            path:"progress"
        },
        {
            text:"Tooltip",
            path:"tooltip"
        },
        {
            text:"Navigation bar",
            path:"navigation"
        },
        {
            text:"Slider",
            path:"slider"
        },
        {
            text:"About",
            path:"about"
        } 
    ]

    //handlesidebar
    const [width, setwidth] = useState("0px");
    const [display, setdisplay] = useState('none');
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
              <div className="SideBar">
              <div className="section padding ">
                      <input className="input search width-100-p padding-top-10 padding-bottom-10 text-center" onChange={(e)=>setsearch(e.target.value)} placeholder="Search..." />
             </div>

                <div className="sidecontent">
                  
                <div className="section padding">

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
      <div className="padding button text-lighter sidebar-link" onClick={()=>{
      window.location.assign(`/${link.path}`)
      }}>
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
              <div className="SideBar fixed" style={{width : `${width}`}}>
              <div className="section padding ">
                      <input className="input search width-100-p padding-top-10 padding-bottom-10 text-center" onChange={(e)=>setsearch(e.target.value)} placeholder="Search..." />
             </div>

                <div className="sidecontent">
                  
                <div className="section padding">

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
      <div className="padding button text-lighter sidebar-link" onClick={()=>{
      Router.push(`/${link.path}`)
      }}>
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