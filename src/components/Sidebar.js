import React from 'react';
import Logo from './Logo';
import {useState} from "react"
import { useHistory } from 'react-router-dom';
function Sidebar() {
    const redirect = useHistory()
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
            path:"inputs"
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
            text:"Modal",
            path:"modal"
        } ,
        {
            text:"Dropdown",
            path:"dropdown"
        },
        {
            text:"Navigation bar",
            path:"navigationbar"
        },
        {
            text:"Slider",
            path:"slider"
        } 
    ]

    //handlesidebar
    const [sideopacity, setsideopacity] = useState(1);
    const [display, setdisplay] = useState('block');
    const Handlesidebar = ()=>{
     if(sideopacity === 1){
         setsideopacity(0)
         setdisplay('none')

    }else{
         setsideopacity(1)
         setdisplay('block')
    }
    }
    const [search, setsearch] = useState('');
    return (
        <div className="">

              <div className="open-sidebar">
            <span class="material-icons icon size-2 pointer" onClick={Handlesidebar} >
               menu
            </span>
              </div>
              <div className="SideBar" style={{opacity : `${sideopacity}`, display:`${display}`}}>
                  <div className="padding">
                          <center>
                          <Logo />
                          </center>
                  </div>

                  <div className="hr margin-top-10"></div>

                  <div>
                      <input className="input search width-100-p padding-top-20 padding-bottom-20 lighter" onChange={(e)=>setsearch(e.target.value)} placeholder="Search...?" />
                  </div>
                  
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
                        <div className="padding-top-10">
                            <ul className="list stripped">
                                <li>
                                <div className="padding button text-lighter" onClick={()=>redirect.push(`/${link.path}`)}>{link.text}</div>
                                </li>
                            </ul>

                        </div>
                          ))
                      }
               
                  </div>
              </div>
        </div>
    );
}

export default Sidebar;