export default function ShowResult(props) {
  console.log({props});
  return (
    <div className="text-left">
      <div className="mt-10 outline outline-offset-2 outline-gray-500 overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-base font-semibold  text-gray-900">AWS Lambda Sustainability check {props.stack}</h3>
        </div>
          {props.data.lambda.map((eachLambda, index) => (
        <div className="outline outline-offset-0 outline-gray-400 ">
            <>
              <dl>
                <div className="bg-gray-50 px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Lambda name</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 font-bold">{eachLambda.name}</dd>
                </div>
                <div className="bg-white px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Status</dt>
                  <dd className={`bg-${eachLambda.arch === "x86_64"? "red": "green"}-200 mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0`}>{eachLambda.arch === "x86_64"? "Using x86 Architecture Non-Sustainable": "Using ARM Architecture Sustainable"}</dd>
                </div>
              </dl>
            </>
        </div>
          ))}
      </div>
      <div className="mt-10 outline outline-offset-2 outline-gray-500 overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-base font-semibold  text-gray-900">Amazon S3 Sustainability check</h3>
        </div>
        <div className="outline outline-offset-2 outline-gray-500 ">
          {props.data.s3.map((eachS3, index) => (
            <>
              <dl>
                <div className="bg-gray-50 px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">S3 bucket name</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 font-bold">{eachS3.name}</dd>
                </div>
                <div className="bg-white px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Status</dt>
                  <dd className={`bg-${eachS3.isLifeCycleConfigured? "green" : "red"}-200 mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0`}>{eachS3.isLifeCycleConfigured? "Sustainable": "Non-Sustainable"}</dd>
                </div>
              </dl>
            </>
          ))}
        </div>
      </div>
      <div className="mt-10 outline outline-offset-2 outline-gray-500 overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-base font-semibold  text-gray-900">Amazon EC2 Sustainability check</h3>
        </div>
        <div className="outline outline-offset-2 outline-gray-500 ">
          {
            props.data.ec2.length == 0 && (
              <>
              <dl>
                <div className="bg-white px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Status</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">No EC2 instances found.</dd>
                </div>
              </dl>
              </>
            )
          }
          {props.data.ec2.map((eachEC2, index) => (
            <>
              <dl>
                <div className="bg-gray-50 px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">S3 bucket name</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{eachEC2.name}</dd>
                </div>
                <div className="bg-white px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Status</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{eachEC2.status}</dd>
                </div>
              </dl>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}
