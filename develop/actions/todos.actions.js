import types from './types/todos.types.js';

export function addTodo(params = {}) {
    return {
        type: types.ADD_TODO,
        todo: params.todo,
    };
}

export function clearAll() {
    return {
        type: types.CLEAR_ALL,
    };
}

export function completeTodo(params = {}) {
    return (dispatch) => {
        dispatch({
            type: types.COMPLETE_TODO,
            todoId: params.todoId,
        });
    };
}
