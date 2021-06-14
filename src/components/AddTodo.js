import React, {useState} from 'react';

export const AddTodo = ({addTodo}) => {
     const [title, setTitle] = useState("");
     const [desc, setDesc] = useState("");

        const submit = (e)=>{
            e.preventDefault();
            if(!title || !desc){
                alert("Title or Description cannot be blank");
            }
            addTodo(title, desc);
        }
    return (
        <div className="container my-3">
            <h3>Add A Todo</h3>
            <form onSubmit= {submit}>
                <div className="mb-3">
                    <label for="exampleInput" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="text"/>
                        
  </div>
                    <div classNameName="mb-3">
                        <label for="Desc" classNameName="form-label">Todo Description</label>
                        <input type="text" value={desc}  onChange={(e)=>setDesc(e.target.value)} className="form-control" id="Desc"/>
  </div>
                       
                            <button type="Submit" className="btn btn-success my-3">Add Todo</button>
</form>
                    </div>
    )
}
