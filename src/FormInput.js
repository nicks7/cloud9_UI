import React from 'react';
import ShowResult from './ShowResult';

export default function FormInput() {
  const [showResults, setShowResults] = React.useState(false);
  const [showInputForm, setShowInputForm] = React.useState("show");
  const [result, setResult] = React.useState({});
  const [stackName, setStackName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      region: e.target.region.value,
      stackName: e.target.stackName.value
    }
    console.log({payload});
    setStackName(stackName);
    async function fetchData() {
      const url = `https://3l1jn7hdha.execute-api.us-east-1.amazonaws.com/dev/green/v1/sustainability`;
      const response = await fetch(url,
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Srw1kun0YG2q5X5jejY9X810nDNLf88G8cfk0DyO",
          },
          body: JSON.stringify(payload)
        })
        .catch((e) => {
          console.error(e);
        });
      const data = await response.json();
      console.log(data);
      setResult(data);
      setShowInputForm("hidden");
      setShowResults(true);
    }
    fetchData();
    
  };
  return (
    <>
    <div className={` isolate bg-white py-20 px-8 sm:py-15 lg:px-8`}>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Application Sustainability Check</h2>
        
        {showResults && <ShowResult data={result} stack={stackName}/>}
      </div>
      <form onSubmit={handleSubmit} className={`${showInputForm} mx-auto mt-16 max-w-xl sm:mt-20`}>
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="regionId" className="block text-sm font-semibold leading-6 text-gray-900">
              Region
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="region"
                id="regionId"
                autoComplete="AWS Region"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="stackNameId" className="block text-sm font-semibold leading-6 text-gray-900">
              Stack Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="stackName"
                id="stackNameId"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-10">
            <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Submit
            </button>
            </div>
            </div>  
         </div>   
      </form>
    </div>
    </>
  )
}
