import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import styled from "styled-components";
import { useHello } from "@/hooks/use-hello";
import { useEffect } from "react";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const Container = styled.div`
  border: 1px solid black;
  color: ${({ theme }) => theme.colors.primary};
`;

const Home = (props) => {
  const { data, fetchHello, loading } = useHello();

  useEffect(() => {
    fetchHello();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/blog">Blog</Link>
      <Container>Create Next App</Container>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();

  // Pass data to the page via props
  return { props: { repo } };
};
