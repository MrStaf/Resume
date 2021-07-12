import Link from "next/link";
import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <meta name="description" content="Benoît Fage resume" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <header className="flex flex-row justify-between px-4 pt-4 text-2xl select-none print:hidden sm:px-16 sm:pt-16">
        <Link href="/" prefetch={false}>
          <div
            className="p-2 pt-0 text-center border-b-2 cursor-pointer"
            style={{ width: "200px" }}
          >
            Resume
          </div>
        </Link>
        <Link href="/projects" prefetch={false}>
          <div
            className="p-2 pt-0 text-center border-b-2 cursor-pointer"
            style={{ width: "200px" }}
          >
            Projects
          </div>
        </Link>
      </header>
    </>
  );
}
