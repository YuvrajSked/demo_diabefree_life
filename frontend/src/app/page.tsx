// import Link from 'next/link'; 
import { testimonialService, programService } from '@/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HomeSections, ServiceSection, FaqSectionClient, MeetAnoop, ProgramSection, SuccessStorySection } from '@/components/';
import {
  faStar,
  // faCheck,
  faUsers,
  faPills,
  faHeart,
  faCalendarAlt,
  faStethoscope,
  faAppleAlt,
  faBrain,
  faGraduationCap,
  faVideo,
  faChevronRight,
  faPlay,
  faDownload,
  faNewspaper,
  faQuestionCircle,
  faAward,
  faPhoneAlt,
  faEnvelope,
  faTrophy,
  faCamera,
  faImages,
  faUtensils,
  faLeaf,
  faCertificate
} from '@fortawesome/free-solid-svg-icons';

export default async function Home() {
  const [testimonials, programs] = await Promise.all([
    testimonialService.getTestimonials(),
    programService.getPrograms()
  ]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <HomeSections />
      {/* Who is Anoop Gupta Section */}
      <MeetAnoop />

      {/* Services Strip */}
      <ServiceSection />

      {/* Programs Showcase - Limited to 3 on home page */}
      <ProgramSection
        programs={programs}
        limit={3}
        title="Our Featured Programs"
        description="Discover our most popular diabetes reversal programs designed to help you achieve sustainable results."
      />

      {/* Patient Success Stories */}
      <SuccessStorySection
        testimonials={testimonials}
        limit={6}
        title="Real Patient Success Stories"
      />
      {/* Book Your Free Workshop/Consultation */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Diabetes Reversal Journey?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Book your free consultation with Anoop Gupta and discover how you can reverse your diabetes naturally. 
            Choose from online consultation, in-person workshop, or phone call.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-20">
              <FontAwesomeIcon icon={faVideo} className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-700">Online Consultation</h3>
              <p className="mb-6 opacity-90 text-gray-500">45-minute video call with personalized assessment</p>
              <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors w-full">
                Book Online Session
              </button>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-2xl border-2 border-yellow-400 transform scale-105">
              <FontAwesomeIcon icon={faUsers} className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-700">Workshop/Retreat</h3>
              <p className="mb-6 opacity-90 text-gray-500">Immersive group experience with hands-on learning</p>
              <button className="bg-yellow-400 text-gray-800 hover:bg-yellow-300 font-bold py-3 px-6 rounded-lg transition-colors w-full">
                Join Workshop
              </button>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-20">
              <FontAwesomeIcon icon={faPhoneAlt} className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-700">Phone Consultation</h3>
              <p className="mb-6 opacity-90 text-gray-500">30-minute phone call for initial guidance</p>
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors w-full">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSectionClient />
      {/* Lead Magnet CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Get Your Free Diabetes Reversal Guide
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Download our comprehensive guide with meal plans, exercise routines, and proven strategies to reverse diabetes naturally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 font-medium"
            />
            <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors">
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Download Free
            </button>
          </div>
          <p className="text-sm mt-4 opacity-75">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Featured Educational Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Educational Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-4 rounded-lg mb-4">
                <FontAwesomeIcon icon={faVideo} className="text-red-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-600">Understanding Diabetes</h3>
              <p className="text-gray-600 mb-4">Learn the root causes of Type 2 diabetes and why traditional treatments often fail.</p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">
                <FontAwesomeIcon icon={faPlay} className="mr-2" />
                Watch Video
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <FontAwesomeIcon icon={faAppleAlt} className="text-green-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-600">Nutrition Fundamentals</h3>
              <p className="text-gray-600 mb-4">Discover the foods that heal and the ones that harm your blood sugar levels.</p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">
                <FontAwesomeIcon icon={faPlay} className="mr-2" />
                Watch Video
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <FontAwesomeIcon icon={faHeart} className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-600">Lifestyle Medicine</h3>
              <p className="text-gray-600 mb-4">How sleep, stress, and exercise impact your diabetes reversal journey.</p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">
                <FontAwesomeIcon icon={faPlay} className="mr-2" />
                Watch Video
              </button>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              <FontAwesomeIcon icon={faVideo} className="mr-2" />
              View All Videos
            </button>
          </div>
        </div>
      </section>

      {/* Diet Plan Previews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Featured Diet Plans
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <FontAwesomeIcon icon={faLeaf} className="text-green-600 w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Plant-Based Reversal Plan</h3>
                <p className="text-gray-600">Complete 30-day meal plan focusing on whole foods and plant-based nutrition</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-semibold text-gray-600">Calories/Day</span>
                  <span className="text-green-600 font-bold">1200-1500</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-semibold text-gray-600">Carbs</span>
                  <span className="text-green-600 font-bold">40-45%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-semibold text-gray-600">Protein</span>
                  <span className="text-green-600 font-bold">20-25%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-semibold text-gray-600">Healthy Fats</span>
                  <span className="text-green-600 font-bold">30-35%</span>
                </div>
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors mb-3">
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Download Sample Plan
              </button>
              <button className="w-full bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-3 px-4 rounded-lg transition-colors">
                View Full Plan
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <FontAwesomeIcon icon={faUtensils} className="text-blue-600 w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Mediterranean Style Plan</h3>
                <p className="text-gray-600">Heart-healthy Mediterranean approach adapted for diabetes reversal</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-semibold text-gray-600">Calories/Day</span>
                  <span className="text-blue-600 font-bold">1400-1600</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-semibold text-gray-600">Carbs</span>
                  <span className="text-blue-600 font-bold">35-40%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-semibold text-gray-600">Protein</span>
                  <span className="text-blue-600 font-bold">25-30%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-semibold text-gray-600">Healthy Fats</span>
                  <span className="text-blue-600 font-bold">35-40%</span>
                </div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors mb-3">
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Download Sample Plan
              </button>
              <button className="w-full bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-4 rounded-lg transition-colors">
                View Full Plan
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <FontAwesomeIcon icon={faAppleAlt} className="text-purple-600 w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Low-Carb Intensive Plan</h3>
                <p className="text-gray-600">Accelerated reversal plan with controlled carbohydrate intake</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-semibold text-gray-600">Calories/Day</span>
                  <span className="text-purple-600 font-bold">1300-1500</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-semibold text-gray-600">Carbs</span>
                  <span className="text-purple-600 font-bold">20-25%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-semibold text-gray-600">Protein</span>
                  <span className="text-purple-600 font-bold">30-35%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-semibold text-gray-600">Healthy Fats</span>
                  <span className="text-purple-600 font-bold">40-45%</span>
                </div>
              </div>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors mb-3">
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Download Sample Plan
              </button>
              <button className="w-full bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-bold py-3 px-4 rounded-lg transition-colors">
                View Full Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Workshops Calendar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Upcoming Workshops & Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-600 w-6 h-6 mr-3" />
                <span className="text-blue-600 font-semibold">Dec 15, 2024</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-500">Diabetes Reversal Workshop</h3>
              <p className="text-gray-600 mb-4">3-day intensive workshop covering nutrition, exercise, and lifestyle modifications.</p>
              <div className="flex items-center justify-between">
                <span className="text-green-600 font-bold">₹5,000</span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
                  Register Now
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-green-600 w-6 h-6 mr-3" />
                <span className="text-green-600 font-semibold">Dec 22, 2024</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-500">Online Masterclass</h3>
              <p className="text-gray-600 mb-4">Free 2-hour online session on diabetes prevention and reversal strategies.</p>
              <div className="flex items-center justify-between">
                <span className="text-green-600 font-bold">Free</span>
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors">
                  Join Free
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-purple-600 w-6 h-6 mr-3" />
                <span className="text-purple-600 font-semibold">Jan 5, 2025</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-500">Wellness Retreat</h3>
              <p className="text-gray-600 mb-4">7-day residential retreat with personalized coaching and meal planning.</p>
              <div className="flex items-center justify-between">
                <span className="text-green-600 font-bold">₹25,000</span>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Mentions & Awards Bar */}
      <section className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">As Featured In & Awards</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="text-center opacity-80 hover:opacity-100 transition-opacity">
              <FontAwesomeIcon icon={faAward} className="text-yellow-400 w-8 h-8 mx-auto mb-2" />
              <p className="text-sm font-semibold">Best Diabetes Program 2024</p>
            </div>
            <div className="text-center opacity-80 hover:opacity-100 transition-opacity">
              <FontAwesomeIcon icon={faTrophy} className="text-yellow-400 w-8 h-8 mx-auto mb-2" />
              <p className="text-sm font-semibold">Healthcare Excellence Award</p>
            </div>
            <div className="text-center opacity-80 hover:opacity-100 transition-opacity">
              <FontAwesomeIcon icon={faCertificate} className="text-yellow-400 w-8 h-8 mx-auto mb-2" />
              <p className="text-sm font-semibold">Times Health Summit</p>
            </div>
            <div className="text-center opacity-80 hover:opacity-100 transition-opacity">
              <FontAwesomeIcon icon={faNewspaper} className="text-yellow-400 w-8 h-8 mx-auto mb-2" />
              <p className="text-sm font-semibold">Hindustan Times</p>
            </div>
            <div className="text-center opacity-80 hover:opacity-100 transition-opacity">
              <FontAwesomeIcon icon={faVideo} className="text-yellow-400 w-8 h-8 mx-auto mb-2" />
              <p className="text-sm font-semibold">NDTV Health</p>
            </div>
            <div className="text-center opacity-80 hover:opacity-100 transition-opacity">
              <FontAwesomeIcon icon={faHeart} className="text-yellow-400 w-8 h-8 mx-auto mb-2" />
              <p className="text-sm font-semibold">Health India Magazine</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery & Event Snapshots */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Workshop & Event Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <FontAwesomeIcon icon={faCamera} className="text-white w-8 h-8" />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faPlay} className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white text-sm font-semibold">Mumbai Workshop 2024</p>
              </div>
            </div>
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <FontAwesomeIcon icon={faUsers} className="text-white w-8 h-8" />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faPlay} className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white text-sm font-semibold">Delhi Retreat Success</p>
              </div>
            </div>
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <FontAwesomeIcon icon={faGraduationCap} className="text-white w-8 h-8" />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faImages} className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white text-sm font-semibold">Bangalore Masterclass</p>
              </div>
            </div>
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                <FontAwesomeIcon icon={faHeart} className="text-white w-8 h-8" />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faPlay} className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white text-sm font-semibold">Patient Success Meet</p>
              </div>
            </div>
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center">
                <FontAwesomeIcon icon={faAppleAlt} className="text-white w-8 h-8" />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faImages} className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white text-sm font-semibold">Nutrition Workshop</p>
              </div>
            </div>
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <div className="h-48 bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
                <FontAwesomeIcon icon={faBrain} className="text-white w-8 h-8" />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faPlay} className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white text-sm font-semibold">Mindfulness Session</p>
              </div>
            </div>
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <FontAwesomeIcon icon={faStethoscope} className="text-white w-8 h-8" />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faImages} className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white text-sm font-semibold">Medical Consultation</p>
              </div>
            </div>
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                <FontAwesomeIcon icon={faTrophy} className="text-white w-8 h-8" />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faPlay} className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white text-sm font-semibold">Award Ceremony</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              <FontAwesomeIcon icon={faImages} className="mr-2" />
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <section className="py-8 bg-green-600 text-white overflow-hidden">
        <div className="whitespace-nowrap animate-scroll">
          <span className="inline-block px-8">
            🎉 Rajesh from Mumbai: HbA1c dropped from 9.2% to 5.8% in 4 months!
          </span>
          <span className="inline-block px-8">
            ⭐ &quot;Best decision I ever made&quot; - Priya, Delhi
          </span>
          <span className="inline-block px-8">
            📚 New Book: &quot;Diabetes Reversal Blueprint&quot; now available
          </span>
          <span className="inline-block px-8">
            🏆 Winner: Healthcare Innovation Award 2024
          </span>
          <span className="inline-block px-8">
            💊 Meera stopped all diabetes medications after 6 months
          </span>
          <span className="inline-block px-8">
            🎯 95% success rate in our latest clinical study
          </span>
          <span className="inline-block px-8">
            📅 Next workshop: December 15th - Limited seats available
          </span>
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Latest from Our Blog
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-500">5 Foods That Naturally Lower Blood Sugar</h3>
                <p className="text-gray-600 mb-4">Discover the power foods that can help stabilize your glucose levels and support diabetes reversal...</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Dec 10, 2024</span>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold">
                    Read More <FontAwesomeIcon icon={faChevronRight} className="ml-1" />
                  </button>
                </div>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-500">The Science Behind Diabetes Reversal</h3>
                <p className="text-gray-600 mb-4">Understanding how lifestyle interventions can restore insulin sensitivity and pancreatic function...</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Dec 8, 2024</span>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold">
                    Read More <FontAwesomeIcon icon={faChevronRight} className="ml-1" />
                  </button>
                </div>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-500">Exercise Guidelines for Diabetics</h3>
                <p className="text-gray-600 mb-4">Safe and effective workout routines designed specifically for people with diabetes...</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Dec 5, 2024</span>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold">
                    Read More <FontAwesomeIcon icon={faChevronRight} className="ml-1" />
                  </button>
                </div>
              </div>
            </article>
          </div>
          <div className="text-center mt-8">
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
              View All Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
