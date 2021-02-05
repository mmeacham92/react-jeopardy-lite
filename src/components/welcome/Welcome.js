const Welcome = (props) => {
  let name = props.match?.params.name || props.name;
  return (
    <div className="Welcome">
      <h1>Hello, {name || props.name}!</h1>
    </div>
  );
};

export default Welcome;
