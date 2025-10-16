import React from "react";

function TaskList({tasks,message}){
    return(
        <div className="card p-4 shadow-sm">
            <h5 className="mb-3">Your Tasks: </h5>
            <ul className="list-group mb-3">
                {tasks.map(tasks,index)=>(
                    <li key={index} className="list-group-item">
                        {t}
                    </li>
                ))}

            </ul>

        </div>
    )
}