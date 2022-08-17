import React from 'react';
import './styles.css';
const Index = ({todo, setTodo, handleSubmit}) => {

  return (
    <form className='form-container' onSubmit={e => handleSubmit(e)}>
      <div className='form-field'>
        <label className='lbl-name'>Name</label>
        <input
          type='text'
          name='name'
          placeholder='What your plan?'
          value={todo.name}
          onChange={e => setTodo({ ...todo, name: e.target.value })}
        />
      </div>
      <div className='form-field'>
        <label>Description </label>
        <input
          type='text'
          name='description'
          placeholder='How it will goin?'
          value={todo.desc}
          onChange={e => setTodo({ ...todo, desc: e.target.value })}
        />
      </div>
      <button type='submit' className='form-button'>
        Add
      </button>
    </form>
  );
};

export default Index;