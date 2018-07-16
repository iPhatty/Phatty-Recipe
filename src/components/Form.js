import React from 'react';

const Form = props => {
  return (
    <form onSubmit={props.getRecipe}>
      <input type="text" name="recipeName" />
      <button>Im hungry!</button>
    </form>
  );
};

export default Form;
