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
      {labels.map(({ label: lbl, checked, Createdlabel,user}, idx) => {
        console.log("user is in label :", user)
        const userIs = user &&  user.toString()
        console.log("loggedAdminName is in label :", loggedAdminName)
if(userIs === loggedUserName || userIs === loggedAdminName ){
  return (
    <label key={idx} className="items-center mt-3 block">
              <input
                type="checkbox"
                checked={checked}
                onChange={() =>
                  updateLabel({ label: lbl, checked: !checked ,Createdlabel:Createdlabel, user:user})
                }
                // className={ `${checked?'text-green-400':'text-yellow-400'}h-5 w-5 
                //  rounded focus:ring-0 cursor-pointer`}
                className={ `${sideBarlabelColorList[lbl]} h-5 w-5 rounded cursor-pointer ${focusRingColorList[lbl]}`}
              />
              <span className={`ml-2 ${sideBarlabelColorList[lbl]} capitalize`}>{Createdlabel}</span>
              {/* <span className={`ml-2 ${sideBarlabelColorList[lbl]} capitalize`}>{user}</span> */}
            </label>
            )
            

}
        console.log("LBL is", lbl)
        console.log("Checked is ", checked)
      
     
})}
    </div>
    </React.Fragment>
  );
}