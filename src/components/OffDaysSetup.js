import React ,{useState, useEffect, useMemo, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import Contex from '../contex/Contex';
const MyCheckBoxList = [
    {
      order: 0,
      name: "Monday"
    },
    {
      order: 1,
      name: "Tuesday"
    },
    {
      order: 2,
      name: "Wednesday"
    },
    {
      order: 4,
      name: "Thursday"
    },
    {
      order: 3,
      name: "Friday"
    },
    {
      order: 5,
      name: "Saturday"
    },
    {
      order: 6,
      name: "Sunday"
    }
  ];
  const Checkbox = ({ obj, onChange }) => {
    // console.log("obj is :", obj)
    // console.log("onChange is :", onChange)
   
    return (
      <div className='flex items-baseline'>
        <input
        className='mr-4 mb-0 '
          type="checkbox"
          id={`custom-checkbox-${obj.index}`}
          name={obj.name}
          value={obj.checked}
          onChange={() => onChange({ ...obj, checked: !obj.checked })}
        />
        {obj.name}
      </div>
    );
  };
const OffDaysSetup = () => {
  const navigate = useNavigate();
  const   {setSelectedOffDay} = useContext(Contex)
    // var options = e.target.options;
    // var value = [];
    // for (var i = 0, l = options.length; i < l; i++) {
    //   if (options[i].selected) {
    //     value.push(options[i].value);
    //   }
    // }
    const [data, setData] = useState(
        MyCheckBoxList.sort((a, b) => a.order - b.order)
      );
    
      const isVerified = useMemo(() => {
        return data.every((d) => d.checked);
      }, [data]);
      console.log("Data is :", data)
      console.log("isVerified is :", !isVerified)
      const selectedDay = []
      data.map((itm,i)=>{
        if(itm.checked){
          selectedDay.push(itm.name)
        }
      })
      
    
    console.log("selected day is :", selectedDay)

      const handleSave = () =>{
        console.log("Data is :", data)
        console.log("Selected day inside handle save is :", selectedDay)
        setSelectedOffDay(selectedDay)
        navigate('/origin')
      }
  return (
    <div className='mt-10'>
<hr className='border' />
<h1 className='flex items-center justify-center ' >Please Select Off Days</h1>
<hr className='border' />

    <div className='flex justify-center items-center mt-10'>
<div className="flex  flex-col ">
      {data.map((obj, index) => (
        // <li key={index}>
          <Checkbox
            obj={obj}
            onChange={(item) => {
              setData(data.map((d) => (d.order === item.order ? item : d)));
            }}
          />
        // </li>
      ))}
      <button className='bg-blue-500 rounded-sm cursor-pointer'  onClick={handleSave}>Save</button>
    </div>

    {/* <form action="/action_page.php">
  <label htmlFor="cars">Please select your off Days:</label>
  <select name="cars" id="cars" multiple={true}>
    <option value="volvo">Monday</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
  <br />
  <br />
  <input type="submit" defaultValue="Submit" />
</form> */}

    </div>
    </div>
  )
}

export default OffDaysSetup
