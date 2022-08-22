import CounterMaster from "./components/CounterMaster";

function App() {
  return (
    <div className='w-screen h-screen p-10 bg-gray-100 text-slate-700'>
      <h1 className='text-amber-600 max-w-md mx-auto text-center text-2xl font-bold'>
        Counter Application Using React JS
      </h1>

      <CounterMaster />
    </div>
  );
}

export default App;
