import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex justify-center">
      <Head>
        <title>Create Next App</title>
      </Head>

      <div className="mt-4 p-4 w-1/4 rounded bg-blue-100 text-center">
        <p className="text-blue-700">This should be very blue.</p>
      </div>
    </div>
  )
}
