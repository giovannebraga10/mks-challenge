import Image from "next/image";
import styles from "@/styles/cartCard.module.css"
import QuantityButton from "./quantityButton";

export default function CartCard ({ product }:any) {
    const { id, name, photo, price } = product;
    const currencyFormat = Intl.NumberFormat("pt-BR",{ style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

                        return (
                            <div className={styles.cartCard} key={id}>
                                <div>
                                    <Image alt={name} src={photo} width={75} height={77} />
                                </div>
                                <div>
                                    {name}
                                </div>
                                <div>
                                    <QuantityButton />
                                </div>
                                <div className={styles.cartCardPrice}>
                                    {currencyFormat.format(price)}
                                </div>
                            </div>
                        )
}