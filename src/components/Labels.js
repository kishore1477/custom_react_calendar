import React, { useContext } from "react";
import Contex from "../contex/Contex";

export default function Labels() {
  const { labels, updateLabel } = useContext(Contex);
  console.log("Labels is:", labels)
  return (
    <React.Fragment>
      
      <p className="text-gray-500 font-bold mt-10">Labels</p>
      {labels.map(({ label: lbl, checked }, idx) => {
        console.log("LBL is", lbl)
        return (
<label key={idx} className="items-center mt-3 block">
          <input
            type="checkbox"
            checked={checked}
            onChange={() =>
              updateLabel({ label: lbl, checked: !checked })
            }
            className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
          />
          <span className="ml-2 text-gray-700 capitalize">{lbl==='blue'?<>MCE</>:""}</span>
        </label>
        )
        
})}
    
    </React.Fragment>
  );
}