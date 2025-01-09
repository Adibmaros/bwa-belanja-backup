import {Poppins} from "next/font/google";

const poppins = Poppins({
    weight : ['300', '400','500','700','800'],
    subsets : ['latin-ext']
})

import "../../globalLanding.css"

export default function AuthRootLayout({ children }) {
    return (
        <div className={poppins.className} >
        {children}
        </div>
    );
}