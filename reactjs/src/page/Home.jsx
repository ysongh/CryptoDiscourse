import React from 'react';

function Home() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto my-8 px-4">
        <section className="text-center my-12">
          <h2 className="text-4xl font-bold mb-4">Welcome to ChainDiscourse</h2>
          <p className="text-lg text-gray-700">A decentralized platform for meaningful conversations.</p>
          <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Get Started
          </button>
        </section>

        <section id="features" className="my-12">
          <h3 className="text-3xl font-bold mb-6">Features</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Decentralized Network</h4>
              <p className="text-gray-700">Enjoy secure and private conversations on our decentralized platform.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Crypto Integration</h4>
              <p className="text-gray-700">Seamless integration with your favorite cryptocurrencies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Secure Communication</h4>
              <p className="text-gray-700">Your conversations are protected with end-to-end encryption.</p>
            </div>
          </div>
        </section>

        <section id="about" className="my-12">
          <h3 className="text-3xl font-bold mb-6">About Us</h3>
          <p className="text-gray-700 leading-relaxed">
            ChainDiscourse is built by a team of passionate developers and blockchain enthusiasts. Our mission is to provide a secure and decentralized platform for meaningful conversations. Join us on our journey to revolutionize online communication.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Home;