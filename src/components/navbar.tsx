import styles from "@/styles/navbar.module.css"
import Logo from "./logo";
import CartButton from "./cartButton";
export default function Navbar() {
    return (
        <nav className={styles.topMenu}>
            <div className={styles.containerLogo}>
               <Logo />    
            </div>

            <div className={styles.containerCartButton}>
              <CartButton />
            </div>
        </nav>
    )
}