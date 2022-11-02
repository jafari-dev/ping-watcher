import { Logo } from "../../assets";
import "./styles.css";


function Header(): React.ReactElement {
  return (
    <header>
      <Logo />
      <h1>دیده‌بان پینگ گیمینگ ایرانیان</h1>
    </header>
  )
}

export default Header;