import "./Editor.css";

const Editor = () => {
  return (
    <div
      id="editor-wrapper"
      className="text-2xl text-accentOne h-full bg-secondTransparent3 shadow-md"
    >
      <textarea
        id="editing-area"
        className="bg-transparent p-5"
        placeholder="Learn the Code => Write the Code => Be the Code &#10;But actually, you can write things here ..."
      ></textarea>
    </div>
  );
};

export default Editor;
