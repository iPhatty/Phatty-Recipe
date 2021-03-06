import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const Form = props => {
  const style = {
    button: {
      marginLeft: '1rem',
      background: 'linear-gradient(to right,#e35d5b,#e53935)'
    },
    form: {
      margin: '2rem 0'
    }
  };
  return (
    <form onSubmit={props.getRecipe} style={style.form}>
      <Input
        placeholder="Search recipes here..."
        type="text"
        name="recipeName"
        inputProps={{
          'aria-label': 'Recipe Search'
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        style={style.button}
      >
        Im hungry!
      </Button>
    </form>
  );
};

export default Form;
