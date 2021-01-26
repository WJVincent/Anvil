import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as CategoryActions from "../../../store/reducers/categories";
import * as UserActions from "../../../store/reducers/userInfo";

const NewFolderForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [category, setCategory] = useState(1);

  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(CategoryActions.getCategories());
  }, [dispatch]);

  const categories = useSelector((state) => state.categories.categories);

  const onSubmit = (e) => {
    e.preventDefault();

    const newFolderData = {
      name: name,
      userId: sessionUser.id,
      categoryId: category,
    };

    dispatch(UserActions.createUserFolder(newFolderData));
    history.push("/home");
  };

  return (
    <div>
      <h1>New Folder Form</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name..."
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories &&
            categories.map((category) => (
              <option value={category.id} key={category.name}>
                {category.name}
              </option>
            ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewFolderForm;
