import { SigInButton } from '../SignInButton'
import styles from './styles.module.scss'

export function Header(){
    return (
        <header className={styles.headerContainer}> 
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="Logo ig.news" />
                <nav>
                    <a href="" className={styles.active}>Home</a>
                    <a href="">Posts</a>
                </nav>
                <SigInButton />
            </div>
        </header>
    )
}