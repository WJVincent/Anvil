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
    <div className="p-8 bg-main shadow-lg">
      <h1 className="text-accentOne text-4xl mb-6">Create Folder</h1>
      <form className="flex flex-col" onSubmit={onSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="font-jetbrains text-xl p-2 m-auto w-full h-12 text-accentOne bg-secondary outline-none placeholder-accentOne"
          placeholder="=> Name"
        />
        <select
          className="font-jetbrains text-xl mt-4 mb-6 text-accentOne m-auto w-full h-12 bg-secondary outline-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories &&
            categories.map((category) => (
              <option value={category.id} key={category.name}>
                {category.name}
              </option>
            ))}
        </select>
        <button
          className="bg-accentThree transition duration-150 hover:ease-in-out transform hover:-translate-y-0.5 text-main text-xl font-bold w-25 h-12 m-auto rounded-md text-center p-2 shadow"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewFolderForm;
