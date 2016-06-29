import types from '../actions/types/todos.types.js';

function todos(state = [], action) {
    switch (action.type) {
        case types.ADD_TODO: {
            return [
                ...state,
                simpleTodo(undefined, action),
            ];
        }

        case types.CLEAR_ALL: {
            return [];
        }

        case types.COMPLETE_TODO: {
            return state.map((todo) => simpleTodo(todo, action));
        }

        default:
            return state;
    }
}


function simpleTodo(state, action) {
    switch (action.type) {
        case types.ADD_TODO: {
            return {
                id: Date.now(),
                value: action.todo,
                date: (new Date()).toLocaleDateString('en-US', { hour: '2-digit', minute: '2-digit' }),
                completed: false,
            };
        }

        case types.COMPLETE_TODO: {
            if (state.id !== action.todoId) return state;

            return {
                ...state,
                completed: !state.completed,
            };
        }

        default:
            return state;
    }
}

export default todos;

