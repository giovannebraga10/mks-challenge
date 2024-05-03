import styles from "@/styles/logo.module.css"

export default function Logo() {
    return (
        <div className={styles.fullLogo}>
            < div className={styles.logo1}>
                MKS
            </div >
            <div className={styles.logo2}>
                Sistemas
            </div>
        </div>
    )
}