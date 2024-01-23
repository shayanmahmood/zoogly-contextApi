import Name from "../NameGiver/Name"
import ImageUploader from "../ImageUploader/ImageUploader"
import { useFuture } from "../Context/ContextProvider"

function Slides() {
    const { step } = useFuture() // ? states that need
    const  {handleNext, handlePre} = useFuture() // ? function that needs
    return (
        <>
            <h1 style={{ marginTop: '24px', marginLeft: '30px' }}>Zoogle</h1>

            {step === 1 ? <Name /> : null}
            {step === 2 || step === 3 ? <ImageUploader /> : null}
            {
                step > 1 ? <button style={{
                    marginLeft: '382px',
                    position: 'absolute',
                    marginTop: `${step <= 2 ? '-30px' : '-90px'}`
                }} className="color-8" onClick={handlePre}>Previous</button> : null
            }
            {step < 3 ? <button style={{
                position: 'absolute',
                left: '27%',
                marginTop: `${step <= 2 ? '-30px' : '-300px'}`

            }} className="color-8" onClick={handleNext} >Next</button> : null}
        </>
    )
}

export default Slides
