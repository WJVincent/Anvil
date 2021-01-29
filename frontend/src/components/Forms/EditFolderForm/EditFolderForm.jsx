import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as UserActions from "../../../store/reducers/userInfo";
import * as CategoryActions from "../../../store/reducers/categories";
import CommandPrompt from "../../CommandPrompt";

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
    <div>
      <CommandPrompt />
      <h1>Edit Folder</h1>
      {folder && (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select
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
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default EditFolderForm;
