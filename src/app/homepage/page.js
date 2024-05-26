import Link from 'next/link';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <header className="w-full py-6 bg-gray-900 text-white text-center">
        <h1 className="text-3xl font-bold">MockInterview</h1>
        <p className="mt-2"> AI-Powered Interview Practice Platform</p>
      </header>
      <main className="flex-1 w-full max-w-4xl mx-auto p-4">
        <section className="text-center mt-8">
          <h2 className="text-2xl font-semibold">Boost Your Interview Confidence</h2>
          <p className="mt-4 text-gray-700">
            Are you a job seeker looking to ace your next interview? MockInterview leverages cutting-edge AI technology to help you prepare for any job role, giving you the confidence and skills to impress potential employers.
          </p>
        </section>
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Personalized Interview Questions</h3>
            <p className="mt-2 text-gray-600">
              Upload your CV and job description, and let our AI generate tailored interview questions to match the role you're applying for.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Real-Time Feedback</h3>
            <p className="mt-2 text-gray-600">
              Practice with AI-generated questions and receive instant feedback on your performance to help you improve.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Audio Responses</h3>
            <p className="mt-2 text-gray-600">
              Respond to interview questions in real-time using your voice. Our AI will analyze and provide insights to help you refine your answers.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Detailed Performance Reports</h3>
            <p className="mt-2 text-gray-600">
              Get a comprehensive report on your interview performance, highlighting strengths and areas for improvement.
            </p>
          </div>
        </section>
        <section className="mt-12 text-center">
          <h3 className="text-2xl font-semibold">Start Your Journey to Success</h3>
          <p className="mt-4 text-gray-700">
            Join MockInterview today and take the first step towards landing your dream job. Our AI-driven platform is designed to make you stand out from the competition.
          </p>
          <Link href="/dashboard" className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700">
            
              Get Interviewed
            
          </Link>
        </section>
      </main>
      <footer className="w-full py-4 bg-gray-800 text-white text-center">
        <p>© 2024 MockInterview. All rights reserved.</p>
      </footer>
    </div>
  );
}
