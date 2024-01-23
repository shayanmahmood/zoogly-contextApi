import { useFuture } from '../Context/ContextProvider';

const TyperDataMaker = () => {
    const { typingText } = useFuture()
    const createMarkup = (text) => ({ __html: text });

    return (
        <div id="typing-container" style={{ zIndex: '1000', position: 'relative', width: '1000px', height: '500px', border: 'none', marginLeft: '250px', marginTop: '150px' }}>
            <div id="typing-box" style={{ border: 'none' }} dangerouslySetInnerHTML={createMarkup(typingText)} />
        </div>
    );
};

export default TyperDataMaker;





























