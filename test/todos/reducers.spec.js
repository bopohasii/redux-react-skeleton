'use strict';

import { expect }  from 'chai';
import types       from '../../develop/actions/todos.type';
import reducer     from '../../develop/reducers/todos.reducer';
import rootReducer from '../../develop/reducers/root.reducer';

const should = require('chai').should();


describe('Root reducer', () => {
    it('init action: should return the initial state', () => {
        expect(
            rootReducer(undefined, {})
        ).to.deep.equal({
            todos: []
        });
    });
});

describe('Reducers:todos', () => {
    it('init action: should return the initial state', () => {
        const expectedTodos = reducer(undefined, {});

        expect(expectedTodos).to.deep.equal([]);
    });

    it('ADD_TODO', () => {
        const expectedTodos = reducer({}, {
            type: types.ADD_TODO,
            todo: 'mochaTest'
        });

        expectedTodos.should.have.length(1);


        const expectedTodo = expectedTodos[0];

        expectedTodo.should.have.property('id').be.a('number');
        expectedTodo.should.have.property('date').be.a('string');
        expect(expectedTodo.value).to.equal('mochaTest');
        expect(expectedTodo.completed).to.equal(false);
    });
});
