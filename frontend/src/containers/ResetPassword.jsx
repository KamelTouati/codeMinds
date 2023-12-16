import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Select from 'react-select'
import {Link} from 'react-router-dom'

const ScheduleCard = ({schedule,idx})=>{


  return (
    <Link className={`flex flex-row gap-4 ${idx%2?" bg-[#E6FEF]/10 ":" bg-[#F2F6FF] "} py-2 px-4 my-4 border-[1px] border-gray-200 hover:shadow-md w-[95%] mx-8`}>
      
      {/* LHS */}
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold">{schedule.title}</h1>
        <span className="text-lg text-gray-500 ">created at {schedule.date}</span>
        <h2 className="text-lg text-gray-600 font-semibold">By : {schedule.creator}</h2>
      </div>

      {/* RHS */}
      <div className="text-xl ">
      A schedule for the <span>{schedule.year}</span> group <span>{schedule.group}</span> students which covers the modules :
      {schedule.modules.map(module=>(module + ','))} 
      </div>

    </Link>
  )
}

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
    
    const schedules = [
      {id:"bokaskodkaspd",title:"2cs First Semester",date:"12 december 2023",creator:"Secretaire Nokdsa",modules:['Data Science','AI','Software Engineering','Database Engineering'],year:'2cs',group:'G1'},
      {id:"bokaskodkaspd",title:"2cs second Semester",date:"12 december 2023",creator:"Secretaire Nokdsa",modules:['Data Science','AI','Software Engineering','Database Engineering'],year:'2cs',group:'G1'},
      {id:"bokaskodkaspd",title:"1cs First Semester",date:"12 december 2023",creator:"Secretaire Nokdsa",modules:['Data Science','AI','Software Engineering','Database Engineering'],year:'1cs',group:'G1'},
    ]


  return (
    <div className="flex flex-col gap-8 rounded-xl shadow-sm border-[1px] m-1 p-4">
      <div className="flex flex-row justify-between items-center border-b-[1px]">
      
      
      <h1 className="px-6 py-2 text-2xl lg:text-3xl font-semibold">
        Schedules
      </h1>
      
      <button className="px-6 py-2 rounded-xl">
        <span>Generate new schedule</span>
        <IoArrowForwardCircleOutline />
      </button>



      </div>

      <div className="flex flex-row justify-between w-full">
          
          {/* Teacher Select */}
          <div className="w-[30%] mx-8 flex flex-row gap-3 items-center text-lg ">
          <span className="font-semibold">Teachers: </span>
            <div className="w-[70%]">
                <Select
                    onChange={(e) => null}
                    options={singleOptions}
                    theme={customTheme}
                    styles={singleStyles}
                    // isSearchable
                    // autoFocus
                    placeholder="All"
                    className="w-full"
                    defaultValue={'TALENT'}

                />
            </div>
          </div>

          {/* Year Select */}
          <div className="w-[35%] mx-8 flex flex-row items-center gap-3 text-lg">
          <span className="font-semibold">Study Year:</span>
          <div className="w-[55%] mx-8">
              <Select
                  placeholder="Any"
                  onChange={()=>(null)}
                  noOptionsMessage={() => 'No matches found .'}
                  theme={customTheme}
                  isSearchable
                  isMulti
                  className="w-full hide-scrollbar"
                  options={singleOptions}
                  styles={multiStyles}
              />
          </div>
          </div>
          {/* Sort By */}
          <div className="w-[30%] mx-8 flex flex-row gap-3 items-center text-lg ">
          <span className="font-semibold">Sort By: </span>
            <div className="w-[70%]">
                <Select
                    onChange={(e) => null}
                    options={singleOptions}
                    theme={customTheme}
                    styles={singleStyles}
                    // isSearchable
                    // autoFocus
                    className="w-full"
                    defaultValue={{value:"NEWEST",label:"Newest"}}

                />
            </div>
          </div>

          
      </div>

      <h1 className=" mx-8 text-xl font-semibold">
        Created Schedules
      </h1>
      <div className="flex flex-col ">
          {
            schedules.map((schedule,index)=>(
              <ScheduleCard schedule={schedule} idx={index} key={schedule.title}/>
            ))
          }
      </div>



    </div>
  )
}


// export default ResetPasswordexport default ResetPassword;
export default ResetPassword;