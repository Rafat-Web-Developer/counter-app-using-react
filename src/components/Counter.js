import Button from "./Button";
import Count from "./Count";

const Counter = ({ id, handlerIncrement, handlerDecrement, counterValue }) => {
  return (
    <div className='drop-shadow-lg p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
      <Count counter={counterValue} />
      <div className='flex space-x-3'>
        <Button
          handler={() => handlerIncrement(id)}
          btnClassName='bg-green-400 '>
          Increment
        </Button>
        <Button handler={() => handlerDecrement(id)} btnClassName='bg-red-400 '>
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;
