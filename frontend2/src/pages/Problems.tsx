import React from 'react'

type Props = {}

const Problems = (props: Props) => {
    const list = [
        {id:1,title:'Electricity problem',by:'hadil labed'},
        {id:2,title:'Electricity problem',by:'hadil labed'},
        {id:3,title:'Electricity problem',by:'hadil labed'},
    ]
  return (
    <div className="flex flex-col gap-4 w-full m-4">
        <div>
            <h1 className="text-3xl font-semibold py-10 px-24">Problems</h1>
        </div>
        <div className="w-full m-4 lg:m-8">
            {list.map((problem,index)=>(
                <label htmlFor={`problem${problem.id}`} className={`flex flex-row ${index%2?" bg-[#FBFCFF] ":" bg-white "} w-[80%] justify-between items-center p-4 px-8 my-1 rounded-lg `}>
                    <div className="flex flex-row gap-12 items-center">
                    <span className="text-lg font-semibold">{problem.id}.</span>
                    <div className="flex flex-col">
                        <span className="text-xl font-semibold">{problem.title}</span>
                        <span className="text-lg font-light text-gray-600">Reported By:{problem.by}</span>
                    </div>
                    </div>
                    <input className="justify-self-end" type="checkbox" id={`problem${problem.id}`} />
                    
                </label>
            ))}
        </div>
        
    </div>
  )
}

export default Problems