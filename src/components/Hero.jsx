import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriterElement = typewriterRef.current;
    if (!typewriterRef.current) return;

    const words = ['Safety', 'Support', 'Protection', 'Guidance'];
    const colors = ['text-yellow-300', 'text-green-300', 'text-blue-300', 'text-purple-300'];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const type = () => {
      const currentWord = words[wordIndex];
      const currentColor = colors[wordIndex];
      
      typewriterElement.className = `font-bold ${currentColor}`;
      
      if (!isDeleting) {
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(type, 2000);
          return;
        }
      } else {
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      
      setTimeout(type, isDeleting ? 100 : 150);
    };

    setTimeout(type, 1000);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative gradient-bg text-white overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Solo traveler watching majestic mountain landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/30"></div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full mb-12">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white">Trusted by 50,000+ solo travelers worldwide</span>
          </div>

          {/* Main Heading - Single Line Structure */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Your Solo <span className="text-yellow-300 font-semibold">Adventure</span>,
            <br />
            Our Shared <span ref={typewriterRef} className="inline-block min-h-[1.2em] border-r-4 border-yellow-400 px-1">Safety</span>
          </h1>

          {/* Sub Heading */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Travel with <span className="text-yellow-300 font-semibold">confidence</span>, 
            explore with <span className="text-green-300 font-semibold">freedom</span>, 
            stay <span className="text-blue-300 font-semibold">connected</span> always.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-white text-gray-900 hover:bg-gray-100 px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-2xl hover:scale-105 flex items-center gap-3">
              Start Your Journey
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="group border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:scale-105 flex items-center gap-3"
            >
              How It Works
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-300 text-sm">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">120+</div>
              <div className="text-gray-300 text-sm">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;