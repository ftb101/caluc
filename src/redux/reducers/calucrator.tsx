import {INPUT_NUMBER,PLUS,MINUS,MULTIPLY,DEVIDE,EQUAL,CLEAR} from "../actions/types";

const initialAppState={
    inputValue:0,
    operator:'',
    resultValue:0,
    calucrate:false,
    showResult:false,
};

const calucrator=(state=initialAppState,action)=>{
    switch(action.type){
        case INPUT_NUMBER:
            return{
                ...state,
                inputValue:state.inputValue*10+action.number,
                showResult:false,
            };

        case PLUS:
            if(state.calucrate===true){
                return{
                    ...state,
                    inputValue:0,
                    operator:'+',
                    resultValue:state.resultValue+state.inputValue,
                    showResult:true,
                    };
                }else{
                    return{
                        ...state,
                        inputValue:0,
                        operator:'+',
                        resultValue:state.inputValue,
                        showResult:true,    
                    };
                };
            

        case MINUS:
            if(state.calucrate===true){
                return{
                    ...state,
                    inputValue:0,
                    operator:'-',
                    resultValue:state.resultValue-state.inputValue,
                    showResult:true,
                    };
                }else{
                    return{
                        ...state,
                        inputValue:0,
                        operator:'-',
                        resultValue:state.inputValue,
                        showResult:true,    
                    };
                };
                
        case MULTIPLY:
            if(state.calucrate===true){
                return{
                    ...state,
                    inputValue:0,
                    operator:'×',
                    resultValue:state.resultValue*state.inputValue,
                    showResult:true,
                    };
                }else{
                    return{
                        ...state,
                        inputValue:0,
                        operator:'×',
                        resultValue:state.inputValue,
                        showResult:true,    
                    };
                };
            
                
        case DEVIDE:
            if(state.calucrate===true){
                return{
                    ...state,
                    inputValue:0,
                    operator:'÷',
                    resultValue:state.resultValue/state.inputValue,
                    showResult:true,
                    };
                }else{ 
                    return{
                        ...state,
                        inputValue:0,
                        operator:'÷',
                        resultValue:state.inputValue,
                        showResult:true,    
                    };
                };
            
        case CLEAR:
            return{
                inputValue:0,
                operator:'',
                calucrate:false,
                resultValue:0,
                showResult:false,
            };
            
        case EQUAL:
            switch(state.operator){
                case '+':
                    return{
                        inputValue:state.resultValue+state.inputValue,
                        operator:'',
                        calucrate:false,
                        resultValue:state.resultValue+state.inputValue,
                        showResult:true,
                    };
                case '-':
                    return{
                        inputValue:state.resultValue-state.inputValue,
                        operator:'',
                        calucrate:false,
                        resultValue:state.resultValue-state.inputValue,
                        showResult:true,
                    };
                case '×':
                    return{
                        inputValue:state.resultValue*state.inputValue,
                        operator:'',
                        calucrate:false,
                        resultValue:state.resultValue*state.inputValue,
                        showResult:true,
                    };
                case '÷':
                    return{
                        inputValue:state.resultValue/state.inputValue,
                        operator:'',
                        calucrate:false,
                        resultValue:state.resultValue/state.inputValue,
                        showResult:true,
                    };
                default:
                    return state;
            }
        default:
            return state;    
    }
};

export default calucrator;