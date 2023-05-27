import Head from 'next/head';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About | E-governance</title>
      </Head>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-20">
          <h1 className="text-4xl font-bold text-center mb-10">About E-governance</h1>
          <div className="flex flex-col md:flex-row items-center justify-center mb-10">
            {/* <img
              className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0"
              alt="E-governance"
            /> */}
            <div className="md:ml-10">
              <p className="text-lg font-medium leading-7 mb-4">
                E-governance is the use of technology to provide better and more efficient services to citizens. It
                involves the use of electronic communication and information technology to improve the
                administration and delivery of government services. E-governance helps to make government more
                transparent, accountable and responsive to the needs of citizens.
              </p>
              <p className="text-lg font-medium leading-7 mb-4">
                E-governance includes a variety of initiatives, such as online portals for citizen services, electronic
                voting systems, digital signatures, and the use of social media for public engagement. It also involves
                the use of data analytics and machine learning to improve decision-making and service delivery.
              </p>
              <p className="text-lg font-medium leading-7 mb-4">
                E-governance has the potential to transform the way government operates and delivers services. It can
                improve efficiency, reduce costs, and enhance the quality of services provided to citizens. It can also
                help to create a more participatory and inclusive democracy, by giving citizens a greater voice in
                government decision-making and policy development.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <a
              href="https://en.wikipedia.org/wiki/E-governance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 leading-none text-white bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold text-lg transition duration-200 mt-10"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;