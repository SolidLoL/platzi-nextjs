//este metodo statico applica a todas las pages
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
  render() {
    return (
      <Html>
        <Head>
        {/* Favicon and shit 😊😊😊 */}
        </Head>
        <body className="body">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument