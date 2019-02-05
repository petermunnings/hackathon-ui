import Head from 'next/head'
import dynamic from 'next/dynamic'

const TestComponent = dynamic(() => import('../components/test'))

export default () => (
  <div>
    <Head>
      <title>Hackion : Adhara international payments</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p>Hello world!</p>
    <TestComponent />
  </div>
)
