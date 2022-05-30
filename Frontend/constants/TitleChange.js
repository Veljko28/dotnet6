import Head from 'next/head';

const TitleChange = ({title}) => {
  return (
    <Head>
      <title>Points - {title}</title>  
    </Head>
  )
}

export default TitleChange;