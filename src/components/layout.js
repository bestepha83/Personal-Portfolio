import React from "react"
import Header from "./header"

const Layout = props => {
    const { children } = props

    return (
    <div>
        <Header />
        <main>
            <div>
                {children}
            </div>
        </main>
    </div>
    )
}

export default Layout
