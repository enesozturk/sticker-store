import Head from "next/head";

type PageProps = {
  children: React.ReactNode | React.ReactNode[];
  title: string;
};

function Page({ children, title }: PageProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}

export default Page;
