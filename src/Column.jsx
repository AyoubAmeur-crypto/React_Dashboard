import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import React, { useRef, useState } from 'react'
import { MdDeleteSweep } from "react-icons/md";
import { CSS } from '@dnd-kit/utilities';
import { IoIosAddCircle } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import TaskCard from './TaskCard' 




function Column({col,column,setColumn,title,index,id,tasks,setTasks}) {
    const [updattitle,setUpdateTitle] = useState(false)
    const [modal,setModal] = useState(false)
    let textValue = null
    const {setNodeRef ,listeners,attributes,transform,transition ,isDragging} = useSortable({
        id: col.id,
        data:{

            type:"Column",
            col
        }
    })
     
    const refy = useRef()
    const taskValue = useRef()
   const getNewValue = () => {
     
     textValue = taskValue.current.value

   }
    const AddTask = (id)=> {

        setTasks((prevTasks)=>[...prevTasks,{title:textValue,id:Math.floor(Math.random()*1001),ColumnId:id}])
        setModal(false)
        textValue=""


    }
    const TtileSet = ()=> {

        const titlee = refy.current.value 
        const UpdatedArray = [...column]
        UpdatedArray[index] = {...UpdatedArray[index],title:titlee}
        setColumn(UpdatedArray)


    }
    const style = {
        
        transition: transition || 'transform 300ms ease-in-out',  // Smooth transition

        transform: CSS.Transform.toString(transform)

    }
   
    const delteCol = (col)=> {
         
        const UpdatedArray = column.filter((columy)=> columy.id !== col.id )

        

        setColumn(UpdatedArray)
         
    }
    if(isDragging) {

        return <div   ref={setNodeRef} style={style} className= "bg-mainBackgroundColor w-[320px] h-[400px] max-h-[400px] flex flex-col rounded-md border-2 border-red-500 opacity-40"></div>
    }
  return (
   <div className="">
          <div  ref={setNodeRef} style={style}
    className= "bg-mainBackgroundColor opacity-70 w-[320px] h-[400px] max-h-[400px] flex flex-col rounded-md ">
        <div {...listeners} {...attributes}  className="flex gap-4 bg-columnBackgroundColor p-2 rounded-md rounded-b-none m-1 cursor-grab items-center justify-between" ><div className="" onClick={()=>setUpdateTitle(true)}>{updattitle ? <input placeholder='TITLE' className='text-white bg-mainBackgroundColor p-1 rounded-md ' onChange={TtileSet} ref={refy} onBlur={()=>setUpdateTitle(false)}/> : <p>{title}</p>}</div>
         <button><MdDeleteSweep className='h-[25px] w-[25px] hover:text-red-500' onClick={()=>delteCol(col)}/></button></div>
        <div className="flex flex-grow flex-col p-1 gap-3  overflow-y-auto tasky" ><SortableContext items={tasks.map((task)=> task.id)} >{tasks.filter((tasky)=> tasky.ColumnId === col.id).map((task)=> <TaskCard task={task}  setTasks={setTasks}/>)}</SortableContext></div>
        <div className="bg-columnBackgroundColor rounded-md  m-2 ring-red-500 hover:ring-2"><button className='  cursor-pointer rounded-lg  p-1 flex gap-2' onClick={()=>setModal(true)}> <IoIosAddCircle className='text-red-500 h-7 w-7'/>Add Task</button></div>
   
    </div>
    <div className="modal">
        {modal ? <div className='bg-columnBackgroundColor opacity-80 w-[250px] h-auto modaly border-2 border-red-600 p-2 rounded-md'>
            <div className="flex flex-row align-middle justify-between p-2 border-b-2"><p>Add Task</p><button onClick={()=>setModal(false)} className='bg-mainBackgroundColor rounded-sm cursor-pointer p-1 text-rose-500 '><MdOutlineClose />
            </button></div>
            <div className=" m-2 p-1 flex align-middle justify-center"> <input type="text" placeholder='Task Title' className='  bg-mainBackgroundColor p-1.5 rounded-md w-[230px] ' onChange={getNewValue} ref={taskValue}/></div>
            <button className='bg-mainBackgroundColor p-1.5 cursor-pointer text-sm ring-red-500 hover:ring-1 rounded-md flex align-middle justify-center'onClick={()=>AddTask(id)}>Add Task</button> 
           
        </div> : null}
    </div>
   </div>
    

   
    
    
  )
}

export default Column