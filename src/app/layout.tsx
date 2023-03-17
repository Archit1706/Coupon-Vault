import "./globals.css";
import { getServerSession } from "next-auth/next";
import { getProviders } from "next-auth/react";
import Navbar from "components/Navbar";
import Script from "next/script";
import Footer from "components/Footer";
// import { Roboto } from "@next/font/google";
import { name } from "../../staticProducts";
import Providers from "components/Providers";

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // const session = await getServerSession();
    // const providers = await getProviders();
    // console.log(session);

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="theme-color" content="#000000" />
                <title>{name}</title>
            </head>
            {/* <Script src="../path/to/flowbite/dist/flowbite.bundle.js"></Script> */}
            <body className="wrapper flex flex-col">
                <Providers>
                    <section className="fixed w-screen bg-white dark:bg-[#05091a] z-10">
                        <Navbar />
                    </section>
                    <div className="">{children}</div>
                    <div className="w-screen bg-white z-10">
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
