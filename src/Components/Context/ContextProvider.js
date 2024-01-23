const { createContext, useState, useContext, useRef, useEffect, useReducer } = require("react");

const FutureContext = createContext()

function ContextProvider({ children }) {

    /*
    ? ImageUploader Data
    */
    const predictions = [
        {
            Car: "Mehran",
            NetWorth: "10003$",
            FamilyRelation: 'Very Good',
            SpirtualRelation: 'Your Are Very Close God',
            Profession: 'Car Cleaner but with wise',
            Country: "Africa",
            LoveLife: 'not straight'
        },
        {
            Car: "Mercedez",
            NetWorth: "10000000000$",
            FamilyRelation: 'Bad',
            SpirtualRelation: 'You are Very Far From God',
            Profession: 'Car Dealer With Big Building',
            Country: "NewYork",
            LoveLife: 'not straight'
        },
        {
            Car: "MG 360'",
            NetWorth: "13266$",
            FamilyRelation: 'Bad',
            SpirtualRelation: 'far',
            Profession: 'Clthes Company',
            Country: "oslo",
            LoveLife: 'not straight'
        },
        {
            Car: "nissan gtr",
            NetWorth: "77777$",
            FamilyRelation: 'Bad',
            SpirtualRelation: 'ONly Good',
            Profession: 'Food Bussiness',
            Country: "India",
            LoveLife: 'not straight'
        },
        {
            Car: "gli",
            NetWorth: "14566$",
            FamilyRelation: 'Bad',
            SpirtualRelation: 'Very Far',
            Profession: 'Car Dealer',
            Country: "NewYork",
            LoveLife: 'not straight'
        }
    ]

    const initialState = {
        step: 1,
        name: '',
        image: '',
        showChoose: false,
        typingText: '',
        show: false
    }

    function reducer(state, action) {
        switch (action.type) {
            case 'Inc':
                return { ...state, step: state.step + 1 }
            case 'Dec': return { ...state, step: state.step - 1 }
            case 'setname': return { ...state, name: action.payload }
            case 'Image': return { ...state, image: action.payload }
            case 'ShowChooseFalse': return { ...state, showChoose: false }
            case 'ShowChooseTrue': return { ...state, showChoose: true }
            case 'ShowFalse': return { ...state, show: false }
            case 'ShowTrue': return { ...state, show: true }
            case 'SettingImage': return { ...state, image: action.payload }
            case 'setTypingText': return { ...state, typingText: action.payload }
            default:
                break;
        }

    }

    const [{ name, step, image, show, showChoose, typingText }, dispatch] = useReducer(reducer, initialState)

    const [message, setmessage] = useState('')
    // ? typerDataMAker states
    // const [typingText, setTypingText] = useState('');
    /*
   ? ImageUploader REfs
   */
    const newS = useRef(null)
    const actualBtn = useRef(null)
    const con = useRef(null)
    const num = useRef(randomIntFromInterval(1, predictions.length - 1))


    // ? useEfffects
    useEffect(function () {
        dispatch({ type: 'ShowChooseFalse' })
        dispatch({ type: 'ShowFalse' })
    }, [step])

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (message) {
                dispatch({ type: 'setTypingText', payload: message.substring(0, i) })
                i++;

                if (i > message.length) {
                    clearInterval(typingInterval);
                }
            }
        }, 50);

        return () => clearInterval(typingInterval);
    }, [message]);

    // ? SLides Function
    const handlePre = () => {
        if (step > 1) dispatch({ type: 'Dec' })
    }

    const handleNext = () => {
        if (step < 3) dispatch({ type: 'Inc' })
    }

    // ? imageUplaoder functions
    function handleUploadIMage() {
        actualBtn.current.click()
    }
    function handleChange(e) {
        const file = e.target.files[0]
        dispatch({ type: 'SettingImage', payload: file })
    }
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    function handleSummary() {
        newS.current.classList.add('slideInLeft')
        newS.current.classList.add('warm')
        // setshowChoose(true)
        dispatch({ type: 'ShowChooseTrue' })
    }

    function givePrediction(choice) {
        dispatch({ type: 'ShowChooseFalse' })
        dispatch({ type: 'ShowTrue' })
        setmessage(`${name} Your Predection According to Your Choice is: <b class='gra'> ${predictions[num.current][choice]} </b>`)
    }

    function settingName(value) {
        dispatch({ type: 'setname', payload: value })
    }

    return (
        <FutureContext.Provider value={{
            dispatch,
            // ? SLides States
            name,
            step,
            // ? Slides Functions
            handleNext,
            handlePre,

            // ? ImageUploader States
            image,
            show,
            messageToType: message,
            setmessage,
            showChoose,

            // ? ImageUploader Refs
            actualBtn,
            con,
            newS,
            num,

            // ? ImageUploader Data
            predictions,

            // ? ImageUploader Functions
            handleUploadIMage,
            handleChange,
            randomIntFromInterval,
            handleSummary,
            givePrediction,
            settingName,

            // TyperDataMaker Stares
            typingText
        }}>
            {children}
        </FutureContext.Provider>
    )
}

function useFuture() {
    const context = useContext(FutureContext)
    if (context === undefined) {
        throw new Error("UseFuture is used outside the Context")
    }
    return context
}

export { ContextProvider, useFuture }
