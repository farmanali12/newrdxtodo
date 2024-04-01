
import React, { useState, useRef, useEffect } from 'react';
import "./Todo.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    AddTodo,
    checkBox,
    deleteAlllist,
    deleteTodo,
    deleteselectitems,
    doubleclick,
    editTodo,
    windoweventfire
} from '../../redux/actions/todoaction';

function Todo() {
    const { list } = useSelector((state) => state.Todo);
    const dispatch = useDispatch();
    const [newTodo, setnewTodo] = useState("");
    const [editdata, seteditdata] = useState("")

    useEffect(() => {
        //Function for Window event-----

        const handleClickOutside = (event) => {
            if (!event.target.tagName.toLowerCase().includes('input')) {
                dispatch(windoweventfire());
            }

        };
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);


    const handlechange = (e) => {
        setnewTodo(e.target.value);
    };

    // Function for Edit----
    const handdoubleClick = (id) => {
        dispatch(doubleclick(id))
    };

    //Add Todo------
    const handleAddTodo = (e) => {
        const { checked } = e.target
        e.preventDefault();

        dispatch(AddTodo(newTodo, checked));
        setnewTodo("");
    };

    //Function for Checkbox-----
    const handlechange2 = (e) => {
        e.stopPropagation();
        seteditdata(e.target.value)
    }

    // add functionality for checkbox----
    const handlecheckbox1 = (id, e) => {
        const { checked } = e.target
        dispatch(checkBox(id, checked))
    }

    const handlesubmit = (e) => {
        e.preventDefault()
    }

    // save data in localstorage------

    const texts = list.map((item) => item.text);

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(texts));
    }, [texts]);

    return (
        <div className='container'>
        <h1>Todo</h1>
            <form onSubmit={handlesubmit}>
                <div className='formchild1'>
                    <div className='addtext'>
                        <input type='text' value={newTodo} onChange={handlechange} />
                        <button className='addtodo' onClick={handleAddTodo}>add</button>
                    </div>

                    {list.map((value) => (

                        <div key={value.id} className='text'>
                            {
                                value.isEditable == false ?
                                    (
                                        <>
                                            <label onDoubleClick={() => handdoubleClick(value.id)}>
                                                <input
                                                    type='checkbox'
                                                    key={value.id}
                                                    onClick={(e) => e.stopPropagation()}
                                                    onDoubleClick={(e) => {
                                                        e.preventDefault();
                                                        handdoubleClick(value.id);
                                                    }}
                                                    onChange={(e) => handlecheckbox1(value.id, e)}
                                                    checked={value.checked}
                                                />
                                                {value.text}
                                            </label>

                                            <button onClick={() => dispatch(deleteTodo(value.id))}>delete</button>
                                        </>
                                    )
                                    : (
                                        <div>
                                            <input type='text' value={editdata} onChange={handlechange2}></input>
                                            <button onClick={() => (dispatch(editTodo(editdata)))}>add</button>
                                        </div>
                                    )
                            }

                        </div>
                    ))}
                </div>
                <div className='deletebtn'>
                    <button onClick={() => dispatch(deleteAlllist())}>deleteAll</button>
                </div>

                <div className='deletesltbtn'>
                    <button onClick={() => dispatch(deleteselectitems())}>deletedselecteditem</button>
                </div>
            </form>
        </div>
    );
}

export default Todo;
