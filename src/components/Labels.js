import React, { useContext } from "react";
import Contex from "../contex/Contex";
import { focusRingColorList, sideBarlabelColorList } from "./Colorpicker";
import { Link } from "react-router-dom";

export default function Labels() {
  const { labels, updateLabel, showEventModal, filteredEvents } = useContext(Contex);
  console.log("Labels is:", labels)
  const admin = localStorage.getItem('admin')
  const loggedAdmin = admin && JSON.parse(localStorage.getItem('admin'))
  const loggedAdminName = loggedAdmin && loggedAdmin.name
  const user = localStorage.getItem('loggedUser')
  const loggedUser = user && JSON.parse(localStorage.getItem('loggedUser'))
  const loggedUserName = loggedUser && loggedUser.name
  return (
    <React.Fragment>
      <div >

        { loggedUser &&  loggedUser.name === 'Arisha' && <button className="bg-indigo-200 px-3 py-1 rounded-sm"> <Link to = '/main'>  Show Team Member </Link> </button>}
      <p className="text-gray-500 font-bold mt-10">Labels</p>
      {labels.map((evt, idx) => {
        // { label: lbl, checked, Createdlabel,user}
        // console.log("user is in label :", evt.user)
        // const userIs = user &&  user.toString()
        // console.log("userIs : ", typeof(userIs))
        // console.log(" type is userIs : ", typeof(userIs))

        // console.log("loggedAdminName is in label :", loggedAdminName)
        // console.log("loggedUserName is in label :", loggedUserName)
        // console.log("loggedAdminName is in label :", typeof(loggedAdminName))
        // console.log("type is loggedUserName is in label :", typeof(loggedUserName))
        // const loggedUserLabel = []

        // user.forEach(element => {
        //   if(element === loggedUserName || element === loggedAdminName ){
        //     loggedUserLabel.push(element)
        //   }
        // });

        //   console.log("loggedUserLabel :", loggedUserLabel)
        // console.log("loggedUserLabel.toString() is in label :", loggedUserLabel && loggedUserLabel.toString())

          if(evt.user[0]  === loggedUserName || evt.user[0]   === loggedAdminName ){
// console.log("Createdlabel", Createdlabel)
       console.log("Evt inside if in labels is : ", evt)
            return (
              <label key={idx} className="items-center mt-3 block">
                        <input
                          type="checkbox"
                          checked={evt.checked}
                          onChange={() =>
                            updateLabel({ label: evt.label, checked: !evt.checked ,Createdlabel:evt.Createdlabel, user:evt.user})
                          }
                          // className={ `${checked?'text-green-400':'text-yellow-400'}h-5 w-5 
                          //  rounded focus:ring-0 cursor-pointer`}
                          className={ `${sideBarlabelColorList[evt.label]} h-5 w-5 rounded cursor-pointer ${focusRingColorList[evt.label]}`}
                        />
                        <span className={`ml-2 ${sideBarlabelColorList[evt.label]} capitalize`}>{evt.Createdlabel[0]}</span>
                        {/* <span className={`ml-2 ${sideBarlabelColorList[lbl]} capitalize`}>{user}</span> */}
                      </label>
                      )
                    }       
          
      

        // console.log("LBL is", lbl)
        // console.log("Checked is ", checked)
      
     
})}
    </div>
    </React.Fragment>
  );
}