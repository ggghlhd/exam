import Components from "./Components";

type Props = {};
const Header = (props: Props) => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Components />
    </header>
  );
};
export default Header;
