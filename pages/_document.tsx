
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {


  render() {
    return (
      <Html>
        <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest"></link>
<meta property="og:url" content="https://netflix-clone-anoop.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="your fb app id" />
        <meta
          property="og:title"
          content="Netflix Clone | Creative World Inc."
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="A Netflix Clone website made by Anoop P K"
        />
        <meta property="og:image" content="/icon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument