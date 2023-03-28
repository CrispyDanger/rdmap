import React, { Fragment } from 'react'
import {DragDropContext, Droppable} from 'react-beautiful-dnd'


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
        <Droppable>
        <tbody>
      <tr>
      <th className=' bg-red-500 rounded-md items-center h-24 border'>
        <Fragment>Test</Fragment>
      </th>
      <th className='bg-slate-600 rounded-md border'>rd</th>
      <th className='bg-amber-500 rounded-md border'>fsdfs</th>
      </tr>
      <tr>
        <th className='bg-amber-400 rounded-md h-24 border'>Rpr</th>
      </tr>
      </tbody>
      </Droppable>
    </table>
    </div>
    </DragDropContext>
  )
}

export default TaskContainer
