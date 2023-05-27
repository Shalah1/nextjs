
    import Head from "next/head";
    // import Image from "next/image";
    
    export default function contactUs() {
        return (
            <>
                <Head>
                    <title>Contact Us | E-Governance</title>
                </Head>
    
                <div className="container mx-auto py-10">
    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="px-4 py-6 bg-white rounded-md shadow-md">
                            
    
                            <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            We would love to hear from you! Follow us on social media or contact us directly.
          </p>
          <div className="flex space-x-4 mb-8">
            <a href="#" className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-200">
              Facebook
            </a>
            <a href="#" className="inline-block bg-blue-400 text-white py-2 px-6 rounded hover:bg-blue-500 transition duration-200">
              Twitter
            </a>
            <a href="#" className="inline-block bg-pink-500 text-white py-2 px-6 rounded hover:bg-pink-600 transition duration-200">
              Instagram
            </a>
          </div>
          
        </div>
      </div>
    </section>
    
                           
                        </div>
    
                        <div className="flex flex-col justify-center items-center px-4 py-6 bg-white rounded-md shadow-md">
                           
    
                            <p className="mb-4">
                                E-Governance<br />
                                123 Main Street<br />
                                Anytown, BD 12345<br />
                            </p>
    
                            <p className="mb-4">
                                Email: contact@egov.com<br />
                                Phone: 555-555-5555<br />
                            </p>
                        </div>
                    </div>
    
                </div>
                /</>)
    }