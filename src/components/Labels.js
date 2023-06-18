import React, { useContext } from "react";
import Contex from "../contex/Contex";
import { focusRingColorList, sideBarlabelColorList } from "./Colorpicker";

export default function Labels() {
  const { labels, updateLabel, showEventModal } = useContext(Contex);
  console.log("Labels is:", labels)
  return (
    <React.Fragment>
      <div >
      <p className="text-gray-500 font-bold mt-10">Labels</p>
      {labels.map(({ label: lbl, checked, Createdlabel}, idx) => {
        console.log("LBL is", lbl)
        console.log("Checked is ", checked)
        return (
<label key={idx} className="items-center mt-3 block">
          <input
            type="checkbox"
            checked={checked}
            onChange={() =>
              updateLabel({ label: lbl, checked: !checked ,Createdlabel:Createdlabel})
            }
            // className={ `${checked?'text-green-400':'text-yellow-400'}h-5 w-5 
            //  rounded focus:ring-0 cursor-pointer`}
            className={ `${sideBarlabelColorList[lbl]} h-5 w-5 rounded cursor-pointer ${focusRingColorList[lbl]}`}
          />
          <span className={`ml-2 ${sideBarlabelColorList[lbl]} capitalize`}>{Createdlabel}</span>
        </label>
        )
        
})}
    </div>
    </React.Fragment>
  );
}