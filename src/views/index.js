import React from "react"
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"

import Flex from "./Flex"
import Forms from "./Forms"

const App = () => {

    return (
        <BrowserRouter>
            <section id="main">
                <Route
                    path="/flex"
                    render={props => <Flex {...props} />}
                />
                <Route
                    path="/forms"
                    render={props => <Forms {...props} />}
                />
            </section>
        </BrowserRouter>
    )
}

export default App