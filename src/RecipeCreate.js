import React, { useState } from "react";
// import RecipeData from "./RecipeData";

function RecipeCreate({ createRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const formData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [newRecipe, setNewRecipe] = useState(formData);
  const { name, cuisine, photo, ingredients, preparation } = newRecipe;

  function handleContentChange(event) {
    const { target } = event;
    const value = target.value;
    setNewRecipe({ ...newRecipe, [target.name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(newRecipe);
    setNewRecipe(formData);
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  name="name"
                  id="name"
                  type="text"
                  placeholder="name"
                  onChange={handleContentChange}
                  value={name}
                  required
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input
                  name="cuisine"
                  id="cuisine"
                  type="text"
                  placeholder="cuisine"
                  onChange={handleContentChange}
                  value={cuisine}
                  required
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  name="photo"
                  id="photo"
                  type="url"
                  placeholder="photo"
                  onChange={handleContentChange}
                  value={photo}
                  required
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea
                  name="ingredients"
                  id="ingredients"
                  type="textarea"
                  placeholder="Ingredients"
                  onChange={handleContentChange}
                  value={ingredients}
                  required
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea
                  name="preparation"
                  id="preparation"
                  type="textarea"
                  placeholder="Preparation"
                  onChange={handleContentChange}
                  value={preparation}
                  required
                />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
