import { Poppins } from "next/font/google";
import "../../globalLanding.css";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";

const poppins = Poppins({
  weight: ["300", "400", "500", "700", "800"],
  subsets: ["latin"], // Ganti subset dengan yang valid
});

export default async function RootLayout({ children }) {
  const { session, user } = await getUser(); // Tambahkan await untuk fungsi async

  if (!session || !user.role == "customer") {
    return redirect("/sign-in"); // Tambahkan return setelah redirect
  }

  return (
      <div className={poppins.className}>{children}</div>
  );
}
