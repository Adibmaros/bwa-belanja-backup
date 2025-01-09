
import "../../../globals.css";
import * as React from "react"
import {getUser} from "@/lib/auth";
import {redirect} from "next/navigation";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/app-sidebar";
import Header from "../(index)/_components/Header";

export default async function RootLayout({children}) {

    const {session} = await getUser()

    if (!session){
        return redirect("/dashboard/sign-in")
    }

    return (
        <div>
            <SidebarProvider>
                <AppSidebar/>
                <SidebarInset>
                    <Header/>
                    <div className="flex flex-1 flex-col gap-2 px-4 py-2">
                    <div className="mx-auto h-fit py-2 w-full max-w-screen-xl rounded-xl bg-muted/50">
                                <div className="px-4 py-2">
                                    {children}
                                </div>
                    </div>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </div>

)
}
