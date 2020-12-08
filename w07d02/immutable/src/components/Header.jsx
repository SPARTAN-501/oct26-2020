const Header = (props) => {
  // const arr = useState('Pat\'s Pizza Place');
  // const heading = arr[0];
  // const setHeading = arr[1];
  console.log(props);

  return (
    <div>
      <h1>{props.heading}</h1>
    </div>
  );
};

export default Header;
