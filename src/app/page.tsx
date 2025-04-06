import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-blue-50 to-indigo-100">
      <header className="w-full max-w-5xl mx-auto text-center py-10">
        <h1 className="text-5xl font-extrabold text-gray-900">AI Generate News</h1>
        <p className="mt-4 text-xl text-gray-700">
          Revolutionize your news generation with AI. Get analytics, automated news, and more.
        </p>
        <Link href="/signup" legacyBehavior>
          <a className="mt-6 inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition duration-300">
            Get Started
          </a>
        </Link>
      </header>

      <section className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
          <Image src="/images/analytics.svg" alt="Analytics" width={100} height={100} className="mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Analytics Dashboard</h2>
          <p className="mt-4 text-gray-600">
            Get detailed insights and analytics on your news performance.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
          <Image src="/images/automation.svg" alt="Automation" width={100} height={100} className="mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Automated News</h2>
          <p className="mt-4 text-gray-600">
            Automate your news generation process with our advanced tools.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
          <Image src="/images/ai.svg" alt="AI" width={100} height={100} className="mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">AI Based News Generation</h2>
          <p className="mt-4 text-gray-600">
            Leverage AI to generate high-quality news content effortlessly.
          </p>
        </div>
      </section>

      <section className="w-full max-w-5xl mx-auto py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800">Features</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <Image src="/images/real-time.svg" alt="Real-time" width={80} height={80} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Real-time Updates</h3>
            <p className="mt-4 text-gray-600">
              Stay updated with real-time news generation and updates.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <Image src="/images/templates.svg" alt="Templates" width={80} height={80} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Customizable Templates</h3>
            <p className="mt-4 text-gray-600">
              Use customizable templates to create news that fits your style.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <Image src="/images/seo.svg" alt="SEO" width={80} height={80} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">SEO Optimized</h3>
            <p className="mt-4 text-gray-600">
              Generate SEO optimized news content to boost your visibility.
            </p>
          </div>
        </div>
      </section>

      <footer className="w-full max-w-5xl mx-auto text-center py-10">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} AI Generate News. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
