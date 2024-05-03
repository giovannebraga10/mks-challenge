'use client'
import Image from 'next/image'
import styles from "@/styles/cartContent.module.css"
import { useState } from "react"

export default function CartContent({ cartProductsState }: any) {

    const [cartProducts, setCartProducts] = cartProductsState;
    const currencyFormat = Intl.NumberFormat("pt-BR", { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

    return (
        <div className={styles.cartFinish}>
            <div>
                <div className={styles.cartHeader}>
                    Carrinho de compras
                    <button onClick={() => setCartProducts([])}>X</button>
                </div>
            </div>
            <div className={styles.cartContent}>
                <div className={styles.cartItems}>
                    {cartProducts.map((p: any) => {
                        const { name, photo, price } = p;

                        return (
                            <div className={styles.cartCard} key={p.id}>
                                <div>
                                    <Image alt={name} src={photo} width={75} height={77} />
                                </div>
                                <div>
                                    {name}
                                </div>
                                <div>

                                </div>
                                <div className={styles.cartCardPrice}>
                                    {currencyFormat.format(price)}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.finishPrice}>
                    <div>
                        Total:
                    </div>
                    <div>
                        Preço
                    </div>
                </div>
            </div>
            <div className={styles.finishBuy}>
                <div>
                    Finalizar Compra
                </div>
            </div>
        </div>
    )
}