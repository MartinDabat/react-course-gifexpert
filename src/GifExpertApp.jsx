import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch']);
  // const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

  const onAddCategory = (value) => {
    if(categories.find(category => category.toLowerCase() == value.toLowerCase())) {
      return
    }
    setCategories([ value, ...categories])
  };

  return (
    <>
      {/* titulo  */}
      <h1>GifExpertApp</h1>
      {/* input */}
      <AddCategory
        onNewCategory={onAddCategory}
      />
      {/* Listado de Gif */}
      { categories.map(category => 
          <GifGrid 
            category={category}
            key= {category}
          />
          )
      }
    </>
  )
};

export default GifExpertApp;