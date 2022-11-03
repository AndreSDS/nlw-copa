import Head from "next/head";
import Image from "next/image";

interface HomeProps {
  count: number;
}

export default function Home({ count }: HomeProps) {
  console.log(count);

  return <h1>{count}</h1>;
}

export const getServerSideProps = async () => {
  const res = await fetch("http://0.0.0.0:3333/pools/count");
  const data = await res.json();

  return {
    props: {
      count: data.count,
    },
  };
};
