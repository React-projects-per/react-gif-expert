import { useState } from 'react';
import { AddCategory, GitGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['valorant']);

  const onAddCategory = (newCategory) => {
    if (!categories.includes(newCategory)) {
      setCategories([newCategory, ...categories]);
    }
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GitGrid key={category} category={category} />
      ))}
    </>
  );
};
