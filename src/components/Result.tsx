type props={
  result:string
};

const Result = ({result}:props) => {
  return (
    <>
    <div className="result-value">{result}</div>
    </>
  )
}

export default Result
