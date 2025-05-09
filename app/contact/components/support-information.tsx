export default function SupportInformation() {
  const supportChannels = [
    {
      title: "Email Support",
      info: "info@agentifynow.ai",
      description: "24-hour response time guaranteed",
      icon: (
        <svg className="w-8 h-8 text-[#03a7b3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Phone Support",
      info: "+1 (888) 123-4567",
      description: "Available Mon-Fri, 9AM-6PM EST",
      icon: (
        <svg className="w-8 h-8 text-[#03a7b3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "Live Chat",
      info: "Available Now",
      description: "Instant support from our AI team",
      icon: (
        <svg className="w-8 h-8 text-[#03a7b3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-5 bg-gradient-to-b from-[#345d87] to-[#010817]" data-aos="fade-up" data-aos-delay="100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          We&apos;re Here to Help
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportChannels.map((channel, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all text-center group"
            >
              <div className="mb-6 flex justify-center">
                {channel.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2">
                {channel.title}
              </h3>

              <p className="text-2xl text-[#03a7b3] font-semibold mb-2">
                {channel.info}
              </p>

              <p className="text-gray-600">
                {channel.description}
              </p>

              <button className="mt-6 text-[#03a7b3] font-semibold group-hover:text-cyan-800 transition-colors">
                Connect Now →
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Quick Link */}
        <div className="mt-16 text-center">
          <p className="text-white">
            Looking for quick answers? Check our{' '}
            <a href="/faq" className="text-[#03a7b3] hover:text-cyan-800 font-semibold">
              Frequently Asked Questions
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}