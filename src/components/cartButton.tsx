import Image from "next/image";
import styles from "@/styles/cartButton.module.css"
export default function CartButton() {
    return (
        <button className={styles.cartButton}>
            <Image alt={'cart-icon'} src={'/cart-icon.svg'} width={16} height={16} /> 
            {0}
        </button>
    )
}