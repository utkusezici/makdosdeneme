
import Head from 'next/head'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Makdos Deneme</title>
        <meta name="description" content="Makdos Deneme" />
      </Head>

      <div className='py-20 mt-10 bg-blue-500'>
        <h1 className='text-5xl font-bold text-center text-white'>Makdos Merhaba</h1>
        <p className='mt-5 text-3xl text-center text-white'>🎉🎉🎉Bu sayfayı gördüysek başardık.🎉🎉🎉</p>
      </div>

    </div>
  )
}
