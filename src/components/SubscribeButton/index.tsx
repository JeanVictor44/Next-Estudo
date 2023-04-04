import styles from './styles.module.scss'

interface SubscriebeButtonProps {
    priceId: string
}

export function SubscribeButton({priceId}: SubscriebeButtonProps){
    return(
       <button
        type="button"
        className={styles.subscribeButton}>
            Subscribe now
       </button> 
    )
} 