'use client'
import Image from 'next/image'
import styles from "@/styles/cartContent.module.css"
import { useState } from "react"
import CartCard from './cartCard';

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
                        return (
                            <CartCard product={p} key={p.id} />
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