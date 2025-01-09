import Form from './_components/form'
import {DarkMode} from "@/components/DarkMode";

export default function Page() {
    return (
        <div>
            <div className="float-right m-4" >
                <DarkMode/>
            </div>
    <div className="flex h-screen w-full items-center justify-center px-4">
            <Form/>
        </div>
        </div>
    )
}
