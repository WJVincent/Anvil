import { Switch, Route } from "react-router-dom";
import { EditFolderForm, NewFolderForm, CreateFileForm } from "../../Forms";
import TextEditor from "../Editor";

const MainBody = () => {
  return (
    <div id="forms-and-notes" className="flex">
      <Switch>
        <Route exact path="/home">
          <div className="w-full font-jetbrains">
            <TextEditor />
          </div>
        </Route>
        <Route path="/home/folder/edit/:id">
          <div className="w-1/2 m-auto pb-10">
            <EditFolderForm />
          </div>
        </Route>
        <Route path="/home/folder/new">
          <div className="w-1/2 m-auto pb-10">
            <NewFolderForm />
          </div>
        </Route>
        <Route path="/home/file/new">
          <CreateFileForm />
        </Route>
      </Switch>
    </div>
  );
};

export default MainBody;
