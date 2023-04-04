import { GetStaticProps } from 'next'
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

export default function Home({product}: HomeProps ) {
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
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>
        <img src="/images/mulher.svg" alt="Illustration of a woman sitting in a chair with the laptop and the book of your side and a coffee on the table" />
      </main>
    
    </>

  )
}

// Client side -> useEffect e useState -> dentro do browser
// Server side -> getServerSideProps -> exige mais processamento e tempo, pode acarretar em danos a experiência do usuário se utilizado no contexto errado
// Static site Generation -> getStaticProps 

// Post do blog

// Counteúdo (SSG)
// Comentários (Client side)

// getStaticProps -> Salva o html estático e envia para os usuários -> usar para quando o site é o mesmo para todos os usuários
// getServerSideProps -> Sempre faz a requisição e constrói o html do zero -> usar quando precisar de uma requisição diferente para cada usuário
// useEffect e useState -> Fazer chamadas a api que não necessitam de indexação no google

// se eu preciso fazer uma chamada nova a api por cada usuário a melhor escolha
// é o getServerSideProps, pois ele faz novas buscas na api a cada usuário


// Tudo retornado como props irá para minha página 
export const getStaticProps: GetStaticProps = async () => {
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
    },
    // propriedade que informa ao next de quanto em quanto tempo ele deve reconstruir o html e salvar novamente

    revalidate:60 * 60 * 24 // 24 hours 
  }
}