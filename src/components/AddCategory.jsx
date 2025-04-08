import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    const { value } = target;
    setInputValue(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newInputValue = inputValue.trim();

    if (newInputValue.length <= 1) return;

    onNewCategory(newInputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input type='text' placeholder='Buscar gifs' value={inputValue} onChange={onInputChange} />
    </form>
  );
};
