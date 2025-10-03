import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faUsers, faHeart, faPhoneAlt, faStethoscope, faBrain } from '@fortawesome/free-solid-svg-icons';

export default function MeetAnoop() {
  return (<>
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">AG</span>
                </div>
                <p className="text-gray-600">Professional Photo Coming Soon</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Meet <span className="text-blue-600">Anoop Gupta</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              India&apos;s leading diabetes reversal expert with over 15 years of experience...
            </p>
            <div className="space-y-4 mb-8 text-gray-500">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faAward} className="text-blue-600 w-6 h-6 mr-3" />
                <span>Certified Diabetes Educator & Lifestyle Medicine Practitioner</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faUsers} className="text-blue-600 w-6 h-6 mr-3" />
                <span>2000+ Successful Diabetes Reversals</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faHeart} className="text-blue-600 w-6 h-6 mr-3" />
                <span>Holistic Approach to Health & Wellness</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Learn More About Anoop
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                Free Discovery Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Diabetes Reversal Highlights */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          What Sets Anoop&apos;s Approach Apart
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg border-2 border-green-200 hover:border-green-400 transition-colors">
            <FontAwesomeIcon icon={faHeart} className="text-green-500 w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-800">Real, Sustainable Change</h3>
            <p className="text-gray-600">No quick fixes or fad diets. Focus on permanent lifestyle modifications that last a lifetime.</p>
          </div>
          <div className="text-center p-6 rounded-lg border-2 border-blue-200 hover:border-blue-400 transition-colors">
            <FontAwesomeIcon icon={faStethoscope} className="text-blue-500 w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-800">Clinical Results</h3>
            <p className="text-gray-600">Proven track record with documented HbA1c improvements and medication reductions.</p>
          </div>
          <div className="text-center p-6 rounded-lg border-2 border-purple-200 hover:border-purple-400 transition-colors">
            <FontAwesomeIcon icon={faBrain} className="text-purple-500 w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-800">Holistic Wellness</h3>
            <p className="text-gray-600">Address root causes including stress, sleep, nutrition, and mental health.</p>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}
