import OpinionSection from './OpinionSection';
import Advertisement from './Advertisement';
import OnlineSurvey from './OnlineSurvey';

// Main Layout Component
const NewsLayout = () => {
  return (
    <div className="bg-gray-50 py-6">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Opinion Section */}
          <div className="lg:col-span-1">
            <OpinionSection />
          </div>
          
          {/* Middle Column - Online Survey */}
          <div className="lg:col-span-1">
            <OnlineSurvey />
          </div>
          
          {/* Right Column - Advertisements */}
          <div className="lg:col-span-1 space-y-6">
            <Advertisement type="banner" />
            <Advertisement type="video" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLayout;