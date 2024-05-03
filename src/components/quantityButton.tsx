'use client'
import { useState } from "react"
import styles from "@/styles/quantityButton.module.css"


export default function QuantityButton() {
    const [quantity, setQuantity] = useState<number>(0);

    const add = () => setQuantity((prev:number) => {
        return prev + 1;
    })

    const subtract = () => setQuantity((prev:number) => {
        if (prev < 1) return 0;
        return prev - 1;
    })

    return (
        <div className={styles.groupButton}>
            <button onClick={subtract}>-</button>
            <div>{quantity}</div>
            <button className={styles.add} onClick={add}>+</button>
        </div>
    )
}