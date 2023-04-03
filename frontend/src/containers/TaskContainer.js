// import React, { useState, useEffect, useParams } from "react";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import {v4 as uuid} from 'uuid';
// import axios from 'axios';

// function GetSlug() {
//   const params = useParams();
//   console.log(params.slug)
// }



// const client = axios.create({
//   baseURL: `http://localhost:8000/projects/:slug/board/tasks`,
//   headers:{
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${localStorage.getItem('access')}`,
//     'Accept': 'application/json'
//   }
// });



// // const itemsFromBackend = [
// //   { id: uuid(), content: "First task" },
// //   { id: uuid(), content: "Second task" },
// //   { id: uuid(), content: "Third task" },
// //   { id: uuid(), content: "Fourth task" },
// //   { id: uuid(), content: "Fifth task" }
// // ];


// const itemsFromBackend = () => {
//   client.get().then(response => {
//     const items = response.data
//     console.log(items)
//     return items
//   })
// }




// const columnsFromBackend = {
//   [uuid()]: {
//     name: "Not Assigned",
//     items: itemsFromBackend()
//   },
//   [uuid()]: {
//     name: "To do",
//     items: []
//   },
//   [uuid()]: {
//     name: "In Progress",
//     items: []
//   },
//   [uuid()]: {
//     name: "Done",
//     items: []
//   }
// };


// const onDragEnd = (result, columns, setColumns) => {
//   if (!result.destination) return;
//   const { source, destination } = result;

//   if (source.droppableId !== destination.droppableId) {
//     const sourceColumn = columns[source.droppableId];
//     const destColumn = columns[destination.droppableId];
//     const sourceItems = [...sourceColumn.items];
//     const destItems = [...destColumn.items];
//     const [removed] = sourceItems.splice(source.index, 1);
//     destItems.splice(destination.index, 0, removed);
//     setColumns({
//       ...columns,
//       [source.droppableId]: {
//         ...sourceColumn,
//         items: sourceItems
//       },
//       [destination.droppableId]: {
//         ...destColumn,
//         items: destItems
//       }
//     });
//   } else {
//     const column = columns[source.droppableId];
//     const copiedItems = [...column.items];
//     const [removed] = copiedItems.splice(source.index, 1);
//     copiedItems.splice(destination.index, 0, removed);
//     setColumns({
//       ...columns,
//       [source.droppableId]: {
//         ...column,
//         items: copiedItems
//       }
//     });
//   }
// };

// function TaskContainer() {
//   const [columns, setColumns] = useState(columnsFromBackend);



//   return (
//     <div className="flex justify-center bg-slate-100 mx-4 rounded-lg shadow-md">
//       <DragDropContext
//         onDragEnd={result => onDragEnd(result, columns, setColumns)}
//       >
//         {Object.entries(columns).map(([columnId, column], index) => {
//           return (
//             <div
//               // style={{
//               //   display: "flex",
//               //   flexDirection: "column",
//               //   alignItems: "center"
//               // }}
//               className="flex"
//               key={columnId}
//             >
//               <h2>{column.name}</h2>
//               <div style={{ margin: 8 }}>
//                 <Droppable droppableId={columnId} key={columnId}>
//                   {(provided, snapshot) => {
//                     return (
//                       <div
//                         {...provided.droppableProps}
//                         ref={provided.innerRef}
//                         className={`rounded-lg,border-black, border-4 border-dashed ${snapshot.isDraggingOver ? "bg-blue-300" : ""}`}
//                         style={{
//                           padding: 4,
//                           width: 250,
//                           minHeight: 500
//                         }}
//                       >
//                         {column.items.map((item, index) => {
//                           return (
//                             <Draggable
//                               key={item.id}
//                               draggableId={item.id}
//                               index={index}
//                             >
//                               {(provided, snapshot) => {
//                                 return (
//                                   <div
//                                     ref={provided.innerRef}
//                                     {...provided.draggableProps}
//                                     {...provided.dragHandleProps}
//                                     className="rounded-lg text-center"
//                                     style={{
//                                       userSelect: "none",
//                                       padding: 16,
//                                       margin: "0 0 8px 0",
//                                       minHeight: "50px",
//                                       backgroundColor: snapshot.isDragging
//                                         ? "#263B4A"
//                                         : "#456C86",
//                                       color: "white",
//                                       ...provided.draggableProps.style
//                                     }}
//                                   >
//                                     {item.content}
//                                   </div>
//                                 );
//                               }}
//                             </Draggable>
//                           );
//                         })}
//                         {provided.placeholder}
//                       </div>
//                     );
//                   }}
//                 </Droppable>
//               </div>
//             </div>
//           );
//         })}
//       </DragDropContext>
//     </div>
//   );
// }

// export default TaskContainer;
