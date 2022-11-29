import React, {useRef} from 'react';

function Field(){
    const inputRef= useRef(null);

    function handleFocus(){
            inputRef.current.disabled=false;
            inputRef.current.focus();
    }
    function handleReset(){
        inputRef.current.disabled=true;
        inputRef.current.value="";
}

    return(
            <>
            <input disabled type="text" ref={inputRef}/>
            <button onClick={handleFocus}>활성화</button>
            <button onClick={handleReset}>초기화</button>
            </>
    );
}
export default Field;