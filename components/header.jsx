import Link from 'next/link';
import Head from 'next/head';

export default function Header () {
    return (
        <>
            <Head>
                <html lang="en-US"/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Benoît Fage is "/>
            </Head>
            <header className="flex flex-row justify-between px-16 text-2xl pt-16 select-none">
                <Link href="/"><div className="border-b-2 cursor-pointer p-2 pt-0 text-center" style={{ width: "200px" }}>Resume</div></Link>
                <Link href="/projects"><div className="border-b-2 cursor-pointer p-2 pt-0 text-center" style={{width:"200px"}}>Projects</div></Link>
            </header>
        </>
    )
}