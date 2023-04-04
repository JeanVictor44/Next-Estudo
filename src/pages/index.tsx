import { GetServerSideProps } from 'next'
import Head from 'next/head'
import styles from './home.module.scss'
import { SubscribeButton } from '@/components/SubscribeButton'
import { stripe } from '@/services/stripe'

interface HomeProps {
  product: {
    priceId: string,
    amount: number
  }
}
export default function Home(props: HomeProps ) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br /> 
            <span>for {props.product.amount} month</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/mulher.svg" alt="" />
      </main>
    </>
    
  )
}

// Tudo retornado como props irá para minha página 
export const getServerSideProps: GetServerSideProps = async () => {
  // executado na camada do next -> servidor do next
  const price = await stripe.prices.retrieve('price_1MtA2NE04pTv8VWtJf5q2Wn3', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount as number / 100),
  }
  return {
    props: {
      product
    }
  }
}