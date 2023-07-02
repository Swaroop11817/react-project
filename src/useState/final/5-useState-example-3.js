import React, {useState} from 'react'

function Index() {
  
  /* const tempList = [
      {
        text:"hello",
        id:"hhgydyshdfh"
      },
      {
        text:"hello world",
        id:"hhgydyshdnjsnssdfh"
      }
  ]
 */
  const [list,setList] = useState([]);
  const [message,setMessage] = useState({
      text:"",
      id:""
  });
  const [editingItem,setEditingItem] = useState({
    id:"",
    isEditingItem:false
});

  const changeMessage = (e) => {
    setMessage({
        ...message,
        text:e.target.value
    })
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      let newTodo = {
          text: message.text,
          id:new Date().getTime().toString()        
      };
      console.log(newTodo);
      setList([...list,newTodo]);
      setMessage(
          {
              text:"",
              id:""
          }
      )
  }

  const handleDelete = (id) => {
      let newTodos = list.filter((eachItem) => {
          return eachItem.id !== id;
      });
      console.log(newTodos);
      setList(newTodos);
  }

  const changeEditState = (id) => {
      console.log(id);
      setEditingItem({
          ...editingItem,
          id:id,
          isEditingItem:true
      });
      let editableItem = list.find((eachItem) => eachItem.id === id);
      setMessage({
          ...message,
          text:editableItem.text,
          id:editableItem.id
      })
      console.log(editableItem);
  }

  const handleEdit = (e) => {
      e.preventDefault();
      console.log("Previous  Todos", list);
      let newTodos = list.map((eachItem) => {
          if(eachItem.id === editingItem.id){
              return{
                  text:message.text,
                  id:editingItem.id
              }
          }
          else{
              return eachItem;
          }
      });
      console.log("Current Todos", newTodos);
      setList(newTodos);
      setMessage({
          text:"",
          id:""
      });
      setEditingItem({
          id:"",
          isEditingItem:false
      })
  }

  console.log(list.length);
  /* if(list.length === 0){
      return <h1>There are no items in the list</h1>
  } */

  return (
    <div>
      <form>
       <input type="text" 
              name="message" 
              id= "message" 
              placeholder="enter some text" 
              value={message.text}
              onChange={(e) => changeMessage(e)}
              />
              {
                  editingItem.isEditingItem? (<button onClick={(e) => handleEdit(e)} type="submit">edit</button>)  : (<button onClick={(e) => handleSubmit(e)} type="submit">add</button>)   
              }    
      </form>
      <hr/>
      {list.length === 0 && <h4>There are no items in the list</h4>}
      <ul>
          {
              list.map((eachItem) => {
                const {text,id} = eachItem;
                  return <li key={id}>
                       <span>{text}</span>
                       <button onClick={() => changeEditState(id)}>edit</button>
                       <button onClick={() => handleDelete(id)}>delete</button>
                  </li>
              })
          }
      </ul>
    </div>
  )
}

export default Index