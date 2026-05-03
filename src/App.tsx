
import './App.scss'
import { connect } from 'react-redux';
import {
  onNumberClick,
  onClearClick,
  onDivideClick,
  onEqualClick,
  onMinusClick,
  onMultiplyClick,
  onPlusClick
} from './redux/actions';
import Button from "./components/Button";
import Result from "./components/Result";
import calucrator from './redux/reducers/calucrator';

function App(props) {
  const {calucrator,
      onNumberClick,
      onClearClick,
      onDivideClick,
      onEqualClick,
      onMinusClick,
      onMultiplyClick,
      onPlusClick
    }=props;

  return (
    <>
    
      <div className='result'>
        <Result result={calucrator.showResult ? calucrator.resultValue : calucrator.inputValue} />
      </div>
      <div className="button-wrapper">
        <div className="number">
          <div className="upper">
            <Button text={'7'} onClick={() => onNumberClick(7)}/>
            <Button text={'8'} onClick={()=>onNumberClick(8)}/>
            <Button text={'9'} onClick={()=>onNumberClick(9)}/>
          </div>
          <div className="middle">
            <Button text={'4'} onClick={()=>onNumberClick(4)}/>
            <Button text={'5'} onClick={() => onNumberClick(5)}/>
            <Button text={'6'} onClick={() => onNumberClick(6)}/>
          </div>
          <div className="lower">
            <Button text={'1'} onClick={() => onNumberClick(1)}/>
            <Button text={'2'} onClick={() => onNumberClick(2)}/>
            <Button text={'3'} onClick={() => onNumberClick(3)}/>
          </div>
          <div className="bottom">
            <Button text={'0'} onClick={() => onNumberClick(0)}/>
            <Button text={'AC'} onClick={() => onClearClick()} />
            <Button text={'='} onClick={() => onEqualClick()}/>
          </div>
        </div>
        <div className="operator">
          <Button text={'÷'} onClick={() => onDivideClick()}/>
          <Button text={'×'} onClick={() => onMultiplyClick()}/>
          <Button text={'-'} onClick={() => onMinusClick()}/>
          <Button text={'+'} onClick={() => onPlusClick()}/>
        </div>
      </div>
      
    </>
  )
};

const mapStateToProps=(state)=>{
  return{
    calucrator:state.calucrator,
  };
}

export default connect(mapStateToProps,{
  onNumberClick,
  onClearClick,
  onDivideClick,
  onEqualClick,
  onMinusClick,
  onMultiplyClick,
  onPlusClick
})(App);
