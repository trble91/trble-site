import React from "react";

function Dashboard() {

  const widgetsData = [
    { title: "Widget 1", content: "This is the content of Widget 1" },
    { title: "Widget 2", content: "This is the content of Widget 2" },
    { title: "Widget 3", content: "This is the content of Widget 3" },
  ]

  return (
    <>
    <div className='container'>Welcome to Your Dashboard
    <div className="grid grid-cols-3 gap-4">
        {widgetsData.map((widget, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{widget.title}</h2>
            <p>{widget.content}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Dashboard
