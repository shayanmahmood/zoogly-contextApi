import { useFuture } from "../Context/ContextProvider"

function Name() {
    const { name, settingName } = useFuture()

    return (
        <div id="upload" class="modal" data-state="0" data-ready="false" >
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64px" height="64px" fill="hsl(223, 90%, 60%)"><path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M45.121,28.121l-13,13 C31.535,41.707,30.768,42,30,42s-1.535-0.293-2.121-0.879l-8-8c-1.172-1.171-1.172-3.071,0-4.242c1.172-1.172,3.07-1.172,4.242,0 L30,34.758l10.879-10.879c1.172-1.172,3.07-1.172,4.242,0C46.293,25.05,46.293,26.95,45.121,28.121z" /></svg>
                </div>
                <div class="modal__col">
                    <div class="modal__content">
                        <h2 class="modal__title">Welcome to Zoogle</h2>
                        <div class="modal__actions">
                            <input type="text" placeholder="Enter Your Name Here!" value={name} onChange={(e) => settingName(e.target.value)} style={{
                                marginTop: '-15px',
                                marginLeft: '-15px',
                                width: '100%',
                                height: '40px',
                                borderRadius: '5px',
                                background: 'none',
                                border: 'none',
                                borderBottom: '2px solid #fff',
                                outline: 'none',
                                fontSize: '22px',
                                color: '#fff',
                                paddingLeft: '20px',
                                fontFamily: "Fugaz One"

                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Name
