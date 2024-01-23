import { ContextProvider } from "../Context/ContextProvider"
import Slides from "../Slides/Slides"

function Home() {
    return (
        <ContextProvider>
            <Slides />
        </ContextProvider>
    )
}

export default Home
