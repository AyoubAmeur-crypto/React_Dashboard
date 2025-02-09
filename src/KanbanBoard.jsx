import { IoIosAddCircleOutline } from "react-icons/io";
import { useState } from "react";
import Column from "./Column";
import { closestCenter, DndContext, DragOverlay, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import './Kanban.css'

import TaskCard from "./TaskCard";

function KanbanBoard() {

    const [column,setColumn] = useState([])
    const [activeColumn,setActiveColumn] = useState(null)
    const [tasks,setTasks] = useState([])
    const [activTask,setActiveTask]=useState(null)
    const sensors = useSensors(

        useSensor(PointerSensor,{
            activationConstraint :{

                distance :3, //3px to move the card and all the btns should work
            }
        })
    )
    const handleDragStart = (event)=> {
    
        if(event.active.data.current.type === "Column") {

            setActiveColumn(event.active.data.current.col)
            
        }
        if(event.active.data.current.type === "Task") {

            setActiveTask(event.active.data.current.task)
            
        }

    }

  

    const handleDragEnd = (event) => {

        setActiveColumn(null)
        setActiveTask(null)
        const {active,over} = event

        if(!over) return;

        const ActiveColumn = column?.findIndex((col)=> col.id === active.id)
        const OverColumn = column?.findIndex((col)=> col.id === over.id)

       if(ActiveColumn === OverColumn) return


        const UpdatedArray = arrayMove(column,ActiveColumn,OverColumn)

        setColumn(UpdatedArray)



    }
    const DragOver = (event) => {
        const { active, over } = event;
    
        if (!over) return; // Ensure there's a valid drop target
    
        const activeId = active.id;
        const overId = over.id;
    
        // Find the index of active and over tasks
        const activeTaskIndex = tasks.findIndex((task) => task.id === activeId);
        const overTaskIndex = tasks.findIndex((task) => task.id === overId);
    
        // Exit if indexes are invalid
        if (activeTaskIndex===overTaskIndex) return;
    
        const isActiveTask = active.data.current?.type === "Task";
        const isOverTask = over.data.current?.type === "Task";

        if(!isActiveTask) return;
        // set the same column id if we move the task to a different column
        if(isActiveTask === isOverTask) {
        const updatedTasks = [...tasks];

       // set the same column id if we move the task to a different column
        updatedTasks[activeTaskIndex] = {
            ...updatedTasks[activeTaskIndex],
            ColumnId: updatedTasks[overTaskIndex].ColumnId,
        };

        const reorderedTasks = arrayMove(updatedTasks, activeTaskIndex, overTaskIndex);
        setTasks(reorderedTasks);
    }
    const isOverColumn = over.data.current?.type === "Column"
     if(isActiveTask && isOverColumn){
        const updatedTasks = [...tasks];
        updatedTasks[activeTaskIndex] = {
            ...updatedTasks[activeTaskIndex],
            ColumnId: over.id,
        };

        setTasks(updatedTasks)
     }

    };
    


    const AddColumn = ()=> {
       
        setColumn((prevColumn)=>  [...prevColumn,{title:"Column "+(prevColumn.length+1) ,id:Math.floor(Math.random()*1001)}])

        console.log(column);
        

    }
  return (
    <div className="containerTasky"> 
    <div className="flex flex-row items-center justify-center mt-6"><button className="bg-mainBackgroundColor  cursor-pointer rounded-lg h-[60px] w-[350px] min-w-[350px] p-4 ring-red-500 hover:ring-2 flex gap-2">
    <IoIosAddCircleOutline className="text-white h-[30px] w-[30px]" onClick={AddColumn}/>Add Column</button></div> 
    <div className="flex min-h-screen  mt-4  overflow-y-auto scroll-container">
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} sensors={sensors} onDragOver={DragOver}  >
        <div className="flex gap-4">
            <SortableContext items={column.map((item)=> item.id)} >
            {column.map((col,index)=> <Column col={col} column={column} setColumn={setColumn} key={col.id} title={col.title} index={index} id={col.id} tasks={tasks.filter((task)=> task?.ColumnId === col.id)} setTasks={setTasks}/>)}</SortableContext></div>
        
    
    {createPortal ( <DragOverlay >{activeColumn && <Column  col={activeColumn} 
    column={column}  
    setColumn={setColumn}  
    title={activeColumn.title}  
    index={column.findIndex(c => c.id === activeColumn.id)}  
    id={activeColumn.id}
    tasks={tasks.filter((task)=> task?.ColumnId === activeColumn.id)} setTasks={setTasks} />}
       {activTask && <TaskCard  task={activTask}  setTasks={setTasks}/> }
        </DragOverlay> ,document.body )} </DndContext>
    </div></div>
  
        
  )
}

export default KanbanBoard