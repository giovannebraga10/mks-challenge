'use client'
import { getAllProducts } from "@/services/products"
import styles from "@/styles/content.module.css"
import { useEffect, useState } from "react"
import ProductCard from "./productCard"

export default function Content({ setCartProducts }:any){
    const [products, setProducts] = useState<any>()

    useEffect(() => {
        getAllProducts().then((data) => {
            setProducts(data.products)
        });
    },[]);

    return(
        <div className={styles.content}>
            <div className={styles.containerProducts}>
                {products?.map((p: any) => {
                    
                    return (
                        <ProductCard key={p.id} product={p} setCartProducts={setCartProducts} />
                    )
                })}
            </div>
        </div>
    )
}