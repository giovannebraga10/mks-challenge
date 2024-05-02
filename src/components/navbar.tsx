import styles from "@/styles/navbar.module.css"
import Image from "next/image";
import Logo from "./logo";
export default function Navbar() {
    return (
        <nav className={styles.topMenu}>

            <div className={styles.itensEsquerda}>
               <Logo/>    
            </div>

            <div className={styles.itensDireita}>
                <button className={styles.cartButton}> <Image alt={'cart-icon'} src={'/cart-icon.svg'} width={16} height={16} /> {0}</button>
            </div>
        </nav>
    )
}