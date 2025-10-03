import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faAppleAlt, faHeart, faGraduationCap, faStethoscope, faBrain } from '@fortawesome/free-solid-svg-icons';

export default function ServiceSection() {
return (<>
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <FontAwesomeIcon icon={faStethoscope} className="text-blue-500 w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-800">Consultations</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <FontAwesomeIcon icon={faHeart} className="text-red-500 w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-800">Programs</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <FontAwesomeIcon icon={faGraduationCap} className="text-green-500 w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-800">Workshops</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <FontAwesomeIcon icon={faAppleAlt} className="text-orange-500 w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-800">Diet Plans</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <FontAwesomeIcon icon={faBrain} className="text-purple-500 w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-800">Mental Wellness</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <FontAwesomeIcon icon={faVideo} className="text-indigo-500 w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-800">Educational Content</p>
              </div>
            </div>
          </div>
        </section>
      </>)
}
