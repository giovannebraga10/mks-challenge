
import styles from '@/styles/productCard.module.css'
import Image from 'next/image'

export default function ProductCard({ product, setCartProducts }: any) {
    const { name, photo, description, price } = product;

    const currencyFormat = Intl.NumberFormat("pt-BR",{ style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

    return (
        <div className={styles.productCard}>
            <div className={styles.productImage}>
                <Image alt={name} src={photo} width={130} height={138} />
            </div>
            <div className={styles.productInfo}>
                <div>
                    {name}
                </div>
                <div className={styles.productPrice}>
                    {currencyFormat.format(price)}
                </div>
            </div>
            <div className={styles.productDesc}>
                {description}
            </div>
            <div className={styles.productBuy}>
                <button className={styles.buttonBuy} onClick={() => setCartProducts((prev:any) => [...prev, product])}>COMPRAR</button>
            </div>
        </div>
    )
}