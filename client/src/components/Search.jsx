import React from 'react'
import {BsSearch} from 'react-icons/bs'

const Data = [
    { id: 1, name: "Near Akurdi Railway station" },
    { id: 2, name: "Near PCCOE" },
    { id: 3, name: "Near Nigdi" },
    { id: 4, name: "Near Ravet " },
    { id: 5, name: "Near DYP" },
    { id: 6, name: "Near isckon" },
    { id: 7, name: "Near Gurudwara" },
    { id: 8, name: "Near Chinchwad station" },
    { id: 9, name: "Near kundan park" },
    { id: 10, name: "Near Pachora" },
    { id: 11, name: "Near DYPIEMR" },
   
  ];
  
  const getFilteredItems = (inputText) => {
    if (!inputText) {
      return [{ id: 0, name: "" }];
    }
    let text = inputText.toLowerCase();
    return Data.filter((event) => event.name.toLowerCase().includes(text));
  };


const Search = () => {

    const [inputText, setInputText] = React.useState("");
    const filteredItems = getFilteredItems(inputText);

  return (
    <div className=" w-[40%] absolute z-[120] h-[5%] m-6 left-[15%]">
            <div className="flex justify-center align-middle w-full h-full">
              <input
                className="h-full w-full rounded-l bg-white700 pl-2"
                type="text"
                onChange={(e) => setInputText(e.target.value)}
                value={inputText}
                placeholder=" Search by location"
              />
              <button className="" type="submit">
                <BsSearch className="text-white bg-black h-full w-full p-1 rounded-r"/>
              </button>
            </div>
            <ul className={inputText?"absolute text-white w-[28%] bg-gray-700":"hidden"}>
              {filteredItems.map((value) => (
                <p className="p-2 border-b"
                  onClick={(e) => {
                    setInputText(value.name);
                  }}
                  key={value.id}
                >
                  {value.name}
                </p>
              ))}
            </ul>
          </div>
  )
}

export default Search
