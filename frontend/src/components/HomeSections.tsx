import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCalendarAlt, faVideo } from '@fortawesome/free-solid-svg-icons';

export default function HomeSections() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Reverse Your Diabetes <span className="text-yellow-400"> Naturally</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Join <strong>Anoop Gupta&apos;s</strong> proven diabetes reversal program. 
              Transform your life with sustainable lifestyle changes backed by clinical results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105">
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                Book Free Consultation
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all">
                <FontAwesomeIcon icon={faVideo} className="mr-2" />
                Watch Success Stories
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="w-5 h-5" />
                ))}
              </div>
              <span className="ml-3 text-lg">4.8/5 from 2000+ patients</span>
            </div>
          </div>
          <div className="space-y-8">
            {/* Video Showcase */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white border-opacity-20 transform transition-all duration-300 hover:shadow-2xl">
              <div className="p-6">
                <div className="relative overflow-hidden rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-black">
                  <div className="relative" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/UU09eguVzFE?autoplay=1&rel=0&modestbranding=1"
                      title="Diabetes Reversal Success Stories | Diabefree Life"
                      frameBorder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture, web-share; fullscreen; controls"
                      allowFullScreen
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
