import React, { Fragment } from 'react'
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'


const tasks = [
  {
    id: "task1",
    name: "Test",
    color: "bg-red-500"
  },
  {
    id: "task2",
    name: "Test2",
    color: "bg-slate-600"
  },
  {
    id: "task3",
    name: "Test3",
    color: "bg-amber-500"
  },
  {
    id: "task4",
    name: "Test4",
    color: "bg-amber-400"
  },
]




//TODO FIX DRAG AND DROP
const TaskContainer = () => {
  return (
    <DragDropContext>
  <div className='relative flex min-h-screen flex-col justify-top px-3 rounded-md'>
    <table className='bg-slate-50 border-gray border-1 border-slate-600 border-spacing-6   shadow-xl border-separate'>
      <thead>
        <tr>
            <th>Not Assigned</th>
            <th>In Progress</th>
            <th>Complete</th>
        </tr>
      </thead>
        <tbody>
      <Droppable droppableId='tasks'>
        {(provided) => (
      <tr {...provided.droppableProps} ref={provided.innerRef}>
        {provided.placeholder}
      {tasks.map(({id, name, color}, index) => {
        return (
          <Draggable key={id} draggableId={id} index={index}>
            {(provided) => (
          <th className={`${color} rounded-md items-center h-24 border`} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <div>{name}</div>
          </th>
            )}
          </Draggable>
          );
        })}
        </tr>
        )}
        </Droppable>
        </tbody>
        </table>
        </div>
        </DragDropContext>
    )
}
export default TaskContainer
