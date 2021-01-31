import "./Editor.css";

const Editor = () => {
  return (
    <div
      id="editor-wrapper"
      className="text-2xl text-accentOne h-full bg-secondTransparent3 shadow-md"
    >
      <textarea id="editing-area" className="bg-transparent"></textarea>
    </div>
  );
};

export default Editor;
