import React, { useState } from 'react'

const Todo = () => {

    const [activity, setActivity] = useState('')
    const [listData, setListData] = useState([])
    const addActivity = () => {
        //   setListData([...listData, activity])
        //   console.log(listData)
        setListData((listData)=> {
            const updatedList =[...listData, activity]
            setActivity('')
            return updatedList
        })
    }
    const removeTodo = (index) => {
const updatedListData = listData.filter((ele, id)=> {
    return index!=id;
    })
    setListData(updatedListData);
    }
  return (
    <>
    <div className="container">
        <div>TODO LIST</div>
        <input type="text" placeholder='Add Task' value={activity} onChange={(e) => setActivity(e.target.value)} />
        <button onClick={addActivity} >Add</button>
        <p className="List-heading">Here is your List </p>
        {listData!=[] && listData.map((data, index)=> {
            return (
                <>
                <p key={index}><div className='listData'>{data}</div>
                <div className="btn"><button onClick={()=>removeTodo(index)} >⌦</button></div> </p>
                </>
            )
        })}
    </div>
    </>
  )
}

export default Todo