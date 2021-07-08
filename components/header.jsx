import Link from "next/link";
import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <html lang="en-US" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Benoît Fage is " />
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
      </Head>
      <header className="flex flex-row justify-between px-4 pt-4 text-2xl select-none print:hidden sm:px-16 sm:pt-16">
        <Link href="/">
          <div
            className="p-2 pt-0 text-center border-b-2 cursor-pointer"
            style={{ width: "200px" }}
          >
            Resume
          </div>
        </Link>
        <Link href="/projects">
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
