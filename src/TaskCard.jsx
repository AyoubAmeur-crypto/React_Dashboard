import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';
import { IoTrashBinOutline } from "react-icons/io5";


function TaskCard({task,setTasks}) {
   const {setNodeRef ,listeners,attributes,transform,transition ,isDragging} = useSortable({
        id: task.id,
        data:{

            type:"Task",
            task
        }
    })

    const style = {
      
      transition :'transform 300ms ease',
      transform: CSS.Transform.toString(transform),
    }

    if(isDragging) {

      return <div className="bg-columnBackgroundColor m-1 p-2 border-2 border-red-500 opacity-80 rounded-md min-h-[80px]" ref={setNodeRef} style={style} ></div>
    }
  const deleteButton = ()=> {


    
    setTasks((prevTask)=> prevTask.filter((tasky)=> tasky.id !== task.id))


  }
  return (
  
         <div ref={setNodeRef} {...listeners} {...attributes} style={style} className='bg-columnBackgroundColor cursor-grab m-1 p-2 ring-1 hover:ring-rose-500 rounded-md min-h-[80px] max-h-[80px]  flex flex-row align-middle justify-between '>
      <p className='overflow-y-auto  break-words w-[95%]  mr-1 tasky'>{task.title}</p><button className='hover:text-rose-600 tasky ml-3' onClick={deleteButton}><IoTrashBinOutline className='h-7 w-5'/></button>

      </div>
   
    
  )
}

export default TaskCard