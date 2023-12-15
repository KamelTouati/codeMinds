import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Select from 'react-select'


function ResetPassword() {



    const singleOptions  = [
        {value:'Tari',label:'Tari'},
        {value:'Elmir',label:'Elmir'},
    ]

    const singleStyles = {
        control: (styles) => ({
            ...styles,
            paddingTop: '4px',
            paddingBottom: '4px',
            // borderColor:"#00000000",
            // borderRight:"solid 1px #00000055",
            // borderRadius:"0px",
            // paddingRight:"10px",
        }),
        singleValue:(styles)=>({
            ...styles,
            color:"#0146B1dd",
            fontWeight:600,
            fontSize:"20px",
            paddingLeft:"6px",
        })
    }

    const customTheme = (theme)=>{
        return {
            ...theme,
            colors: {
                ...theme.colors,
                primary25: '#E4EEFC',
                primary: '#0146B1',
            },
        }
    }

    const multiStyles = {
        control: (styles) => ({
            ...styles,
            paddingTop: "4px",
            paddingBottom: "4px",


        }),
        multiValue: (styles) => {
            return {
                ...styles,
                backgroundColor: '#E4EEFC',
                borderRadius: '20px',
                paddingLeft: "16px",
                // paddingTop: "4px",
                paddingRight:"6px",
                // paddingBottom: "4px",
                padding:"2px",
                color: '#0146B1',
                fontWeight: 600,
                flex: '0 0 auto',
            }
        },
        multiValueLabel: (styles) => {
            return {
                ...styles,
                color: '#0146B1',
            }
        },
        valueContainer: (styles) => ({
            ...styles,
            overflowX: 'scroll',
            paddingLeft:"12px",
            flexWrap: 'unset',
            "::-webkit-scrollbar":{
                    display:"none"
                }
        }),
        multiValueRemove: (styles) => {
            return {
                ...styles,
                color: '#0146B1',
                cursor: 'pointer',
                ':hover': {
                    color: '#0146B199',
                },
                
            }
        },
    }

    // page of the schedules search

  return (
    <div className="flex flex-col gap-8 rounded-xl shadow-sm border-[1px]">
      <div className="flex flex-row justify-between items-center border-b-[1px]">
      
      
      <h1 className="px-6 py-2">
        Schedules
      </h1>
      
      <button className="px-6 px-2 rounded-xl">
        <span>Generate new schedule</span>
        <IoArrowForwardCircleOutline />
      </button>



      </div>

      <div className="flex flex-row justify-between w-full">
          
          {/* Teacher Select */}
          <div className="w-[30%] mx-4">
              <Select
                  onChange={(e) => setPostOption(e.value)}
                  options={singleOptions}
                  theme={customTheme}
                  styles={singleStyles}
                  // isSearchable
                  autoFocus
                  placeholder="Type"
                  className="w-full"
                  defaultValue={'TALENT'}

              />
          </div>

          {/* Year Select */}
          <div className="w-[50%] mx-4">
              <Select
                  placeholder="Select Categories"
                  onChange={(e) => {
                      setSelectedCategories((prev) =>
                          e.map((option) => {
                              return option.value
                          })
                      )
                  }}
                  noOptionsMessage={() => 'No matches found .'}
                  theme={customTheme}
                  isSearchable
                  isMulti
                  className="w-full hide-scrollbar"
                  options={categoryOptions}
                  styles={categoryStyles}
              />
          </div>

          
      </div>



    </div>
  )
}

export default ResetPassword