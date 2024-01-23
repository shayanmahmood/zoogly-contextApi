import TyperDataMaker from "../TypingEffect/TyperDataMaker";
import { useFuture } from "../Context/ContextProvider";

function ImageUploader() {
    const { step } = useFuture() // ? Sattes that this componets need as props 
    const { show, showChoose, image } = useFuture() // ? ImageUploader own States
    const { actualBtn, con, newS } = useFuture() // ? All REfs used by this component
    const { handleChange, handleUploadIMage, handleSummary, givePrediction } = useFuture() // ? all function that component need


    return (
        <>
            {image && step === 3 ? <>
                <img ref={newS} className="meImg" src={URL.createObjectURL(image)} style={{
                    width: "500px",
                    height: "500px",
                    position: "absolute",
                    margin: "40px 470px",
                    borderRadius: "5px",
                    transition: "all ease-in-out 3s"
                }} alt="" id="img" />
                <button style={{
                    width: "200px",
                    fontSize: "16px",
                    fontWeight: '600',
                    color: "#fff",
                    cursor: "pointer",
                    margin: "20px",
                    height: "55px",
                    textAlign: "center",
                    border: "none",
                    backgroundSize: "300% 100%",
                    borderRadius: "50px",
                    transition: "all 0.4s ease-in-out",
                    position: 'absolute',
                    zIndex: '100000'
                }} className="color-8" onClick={handleSummary} >Want the Summary</button>
                {
                    show ?
                        <TyperDataMaker /> : null
                }

            </> : null}
            {step === 2 ?
                <>
                    <div id="upload" class="modal" data-state="0" data-ready="false" ref={con}>
                        <div class="modal__header">
                            <button class="modal__close-button" type="button">
                                <svg class="modal__close-icon" viewBox="0 0 16 16" width="16px" height="16px" aria-hidden="true">
                                    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                                        <polyline points="1,1 15,15" />
                                        <polyline points="15,1 1,15" />
                                    </g>
                                </svg>
                                <span class="modal__sr">Close</span>
                            </button>
                        </div>
                        <div class="modal__body">
                            <div class="modal__col">
                                <svg class="modal__icon modal__icon--blue" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true">
                                    <g fill="none" stroke="hsl(223,90%,50%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle class="modal__icon-sdo69" cx="12" cy="12" r="11" stroke-dasharray="69.12 69.12" />
                                        <polyline class="modal__icon-sdo14" points="7 12 12 7 17 12" stroke-dasharray="14.2 14.2" />
                                        <line class="modal__icon-sdo10" x1="12" y1="7" x2="12" y2="17" stroke-dasharray="10 10" />
                                    </g>
                                </svg>
                                <svg class="modal__icon modal__icon--red" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true" display="none">
                                    <g fill="none" stroke="hsl(3,90%,50%)" stroke-width="2" stroke-linecap="round">
                                        <circle class="modal__icon-sdo69" cx="12" cy="12" r="11" stroke-dasharray="69.12 69.12" />
                                        <line class="modal__icon-sdo14" x1="7" y1="7" x2="17" y2="17" stroke-dasharray="14.2 14.2" />
                                        <line class="modal__icon-sdo14" x1="17" y1="7" x2="7" y2="17" stroke-dasharray="14.2 14.2" />
                                    </g>
                                </svg>
                                <svg class="modal__icon modal__icon--green" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true" display="none">
                                    <g fill="none" stroke="hsl(138,90%,50%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle class="modal__icon-sdo69" cx="12" cy="12" r="11" stroke-dasharray="69.12 69.12" />
                                        <polyline class="modal__icon-sdo14" points="7 12.5 10 15.5 17 8.5" stroke-dasharray="14.2 14.2" />
                                    </g>
                                </svg>
                            </div>
                            <div class="modal__col">
                                <div class="modal__content">
                                    <h2 class="modal__title">Welcome to Zoogle</h2>
                                    <p class="modal__message">Select a file to upload from your computer or device.</p>
                                    {image ? <p class="modal__message" style={{ color: '#7fe067', marginTop: '-40px' }}> File Was Uploaded  </p> : null}
                                    <div class="modal__actions">
                                        <button class="modal__button modal__button--upload" onClick={handleUploadIMage} type="button" data-action="file">Choose File</button>
                                        <input id="file" file={image} className="realUploader" type="file" ref={actualBtn} onChange={handleChange} hidden />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </> : null
            }
            {showChoose && step === 3 ? <>
                <p className="gra" style={{ position: 'absolute', top: '500px', left: '70px', fontSize: '30px', marginTop: '-20px', }}>Make Your Choice</p>

                <button className="background" style={{ position: 'absolute', borderRadius: '10px', marginTop: '460px', marginLeft: '70px', zIndex: '30000', cursor: 'pointer', width: '200px', height: '50px' }} onClick={(e) => {
                    givePrediction(e.target.value)
                }
                } value={'Car'} >Car 🚗</button>
                <button className="background" style={{ position: 'absolute', borderRadius: '10px', marginTop: '460px', marginLeft: '280px', zIndex: '30000', cursor: 'pointer', width: '200px', height: '50px' }} onClick={(e) => {
                    givePrediction(e.target.value)
                }
                } value={'NetWorth'}>NetWorth 💰</button>
                <button className="background" style={{ position: 'absolute', borderRadius: '10px', marginTop: '460px', marginLeft: '490px', zIndex: '30000', cursor: 'pointer', width: '200px', height: '50px' }} onClick={(e) => {
                    givePrediction(e.target.value)
                }
                } value={'FamilyRelation'}>FamilyRelation 👪  </button>
                <button className="background" style={{ position: 'absolute', borderRadius: '10px', marginTop: '460px', marginLeft: '700px', zIndex: '30000', cursor: 'pointer', width: '200px', height: '50px' }} onClick={(e) => {
                    givePrediction(e.target.value)
                }
                } value={'SpirtualRelation'}>SpirtualRelation 🕌 </button>
                <button className="background" style={{ position: 'absolute', borderRadius: '10px', marginTop: '460px', marginLeft: '910px', zIndex: '30000', cursor: 'pointer', width: '200px', height: '50px' }} onClick={(e) => {
                    givePrediction(e.target.value)
                }
                } value={'Profession'}>Professtion 🕴 </button>
                <button className="background" style={{ position: 'absolute', borderRadius: '10px', marginTop: '460px', marginLeft: '1120px', zIndex: '30000', cursor: 'pointer', width: '200px', height: '50px' }} onClick={(e) => {
                    givePrediction(e.target.value)
                }
                } value={"LoveLife"}>LoveLife 💝 </button>
                <button className="background" style={{ position: 'absolute', borderRadius: '10px', marginTop: '520px', marginLeft: '120px', zIndex: '30000', cursor: 'pointer', width: '200px', height: '50px' }} onClick={(e) => {
                    givePrediction(e.target.value)
                }
                } value={"Country"}>Country 🏳️‍🌈  </button>
            </> : null
            }

        </>
    )
}

export default ImageUploader
