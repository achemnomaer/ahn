const Container = (props) => {
  return (
    <div
      className={`px-4 mx-auto max-w-4xl  sm:px-6 xl:max-w-6xl xl:px-0  ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default Container;
