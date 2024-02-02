import { ClerkProvider, auth } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import { Inter } from "next/font/google";
import { revalidatePath } from "next/cache";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CreateProfile from "@/components/CreateProfile";
import SignIn from "@/app/sign-in/[[...sign-in]]/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fetch",
  description: "Social network app",
};

export default async function RootLayout({ children }) {
  const { userId } = auth();
  const profileRes = await sql`
  SELECT * FROM profiles WHERE clerk_user_id = ${userId}`;

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {!userId && <SignIn />}
          {profileRes.rowCount !== 0 && children }
          {userId && profileRes.rowCount === 0 && <CreateProfile /> }
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
