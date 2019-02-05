import Head from 'next/head'
import dynamic from 'next/dynamic'

import Layout from '../components/MyLayout.js'

export default () => (
  <div>
    <Head>
      <title>Hackion : Adhara international payments</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <style jsx global>{`
      body { 
        background: #fd0100;
        font-size: 24px ;
	      font-family: arial;
        color: #fff;
      }
    `}</style>
    <Layout>
      <p>Hello world!</p>
    </Layout>
  </div>
)
