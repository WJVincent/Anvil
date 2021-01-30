import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as UserActions from "../../../store/reducers/userInfo";
import * as CategoryActions from "../../../store/reducers/categories";

const EditFolderForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = useParams();

  const folderId = Number(id);
  const sessionUserId = useSelector((state) => state.session.user.id);
  const folder = useSelector((state) =>
    state.userInfo.content.Folders.find((ele) => ele.id === folderId)
  );

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    dispatch(CategoryActions.getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (folder) {
      setName(folder.name);
      setCategory(folder.categoryId);
    }
  }, [folder]);

  const onSubmit = (e) => {
    e.preventDefault();

    const editFormData = {
      name: name,
      categoryId: category,
      userId: sessionUserId,
      folderId: folderId,
    };

    dispatch(UserActions.editUserFolder(editFormData));
    history.push("/home");
  };

  const categories = useSelector((state) => state.categories.categories);

  return (
    <div className="p-8 bg-main shadow-lg">
      <h1 className="text-accentOne text-4xl mb-6">
        Edit <span className="text-accentThree">"{name}"</span> Folder
      </h1>
      {folder && (
        <form onSubmit={onSubmit} className="flex flex-col">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="font-jetbrains text-xl p-2 m-auto w-full h-12 text-accentOne bg-secondary outline-none"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="font-jetbrains text-xl mt-4 mb-6 text-accentOne m-auto w-full h-12 bg-secondary outline-none"
          >
            {categories &&
              categories.map((category) => (
                <option
                  className="select-options"
                  value={category.id}
                  key={category.name}
                >
                  {category.name}
                </option>
              ))}
          </select>
          <button
            type="submit"
            className="bg-accentThree transition duration-150 hover:ease-in-out transform hover:-translate-y-0.5 text-main text-xl font-bold w-25 h-12 m-auto rounded-md text-center p-2 shadow"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default EditFolderForm;
