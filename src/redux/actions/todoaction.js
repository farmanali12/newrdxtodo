import {
    ADD_TODO,
    DELETE_TODO,
    DELETE_ALL_TODO,
    DELETE_CLICK_TODO,
    EDIT_TODO,
    DOUBLE_CLICK,
    WINDOW_CLICK,
    CHECK_BOX,
    DELETE_SELECT_ITEMS
} from "../constants/todoconstants";

//Action for AddTodo---
export const AddTodo = (text, checked) => (
    {
        type: ADD_TODO,
        payload: {
            text,
            id: Math.random().toString(36).substring(2),
            isEditable: false,
            // checked:checked
        }
    }
);

//Action for deleteTodo-----
export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: {
        id
    }
});

//Action for deleteAllist
export const deleteAlllist = () => ({
    type: DELETE_ALL_TODO,
})

//Action for editTodo
export const editTodo = (editdata) => ({
    type: EDIT_TODO,
    payload: {
        editdata
    }
})

//Action for doubleclick------
export const doubleclick = (id, isEditable) => ({
    type: DOUBLE_CLICK,
    payload: {
        id
    }
})

//Action for windoweventfire-----
export const windoweventfire = () => ({
    type: WINDOW_CLICK,

})

//Action for checkBox-----
export const checkBox = (id, checked) => ({
    type: CHECK_BOX,
    payload: {
        id,
        checked
    }
})

//Action for deleteselectitems
export const deleteselectitems = () => ({
    type: DELETE_SELECT_ITEMS
})