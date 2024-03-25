import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => {
    setInputValue(target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();


    if(inputValue.trim().length <= 1) return;
    // console.log(event)
    // setCategories(event.target[0].value)
    onNewCategory(inputValue.trim())
    // setCategories(categories => [ inputValue, ...categories]);
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        // onChange={({target}) => onInputChange(target.value)}
        onChange={onInputChange}
      />
    </form>
  )
}