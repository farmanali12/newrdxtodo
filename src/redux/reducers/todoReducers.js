import {
    ADD_TODO,
    DELETE_TODO,
    DELETE_ALL_TODO,
    DELETE_CLICK_TODO,
    EDIT_TODO, DOUBLE_CLICK,
    WINDOW_CLICK, CHECK_BOX,
    DELETE_SELECT_ITEMS
} from "../constants/todoconstants";

export const todoReducers = (state = { list: [] }, action) => {
    switch (action.type) {
        //Functionality for AddTodo-------

        case ADD_TODO:
            return {
                ...state,
                list: [...state.list, action.payload]
            };
        //Functionality for deletTodo-------
        case DELETE_TODO:
            return {
                ...state,
                list: state.list.filter((value) => value.id !== action.payload.id)
            };


        //Functionality for deleteAllTodo-------
        case DELETE_ALL_TODO:
            return {
                ...state,
                list: []
            };

        //Functionality for doubleclick-------
        case DOUBLE_CLICK:
            return {
                ...state,
                list: state.list.map((value) => {
                    if (value.id === action.payload.id) {
                        return {
                            ...value,
                            isEditable: true,
                        };
                    }
                    else {
                        return {
                            ...value,
                            isEditable: false,
                        };
                    }
                }),
            };

        //Functionality for editTodo-------
        case EDIT_TODO:
            return {
                ...state,
                list: state.list.map((value) => {
                    const { text, isEditable } = value
                    if (isEditable === true) {
                        return {
                            ...value,
                            text: action.payload.editdata,
                            isEditable: false,

                        }
                    } else {
                        return {
                            ...value,
                            isEditable: true,

                        }
                    }
                }

                )
            };

        //Functionality for windowClick-------
        case WINDOW_CLICK:
            return {
                ...state,
                list: state.list.map((value) => {
                    return {
                        ...value,
                        isEditable: false
                    }
                })
            };

        //Functionality for checkBox-------
        case CHECK_BOX:
            return {
                ...state,
                list: state.list.map((value) => {
                    // const { checked } = value;
                    if (value.id === action.payload.id) {
                        return {
                            ...value,
                            checked: action.payload.checked
                        }
                    }
                    else {
                        return {
                            ...value,
                        }
                    }
                })
            };

        //Functionality for deleteSelectItems-------
        case DELETE_SELECT_ITEMS:
            return {
                ...state,
                list: state.list.filter((value) => value.checked !== true)
            }
        default:
            return state
    }
} 