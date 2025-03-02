import React from "react";
import { Video } from "lucide-react";
import Subtitle from "../../Subtitle/Subtitle";

const About = () => {
  return (
    <div className="mt-[7rem]">
      <div className="mx-auto px-6">
        {/* Introduction Section */}
        <div className="text-center">
          <Subtitle title="About Our Meru University Innovators" />
          <p className="text-gray-700 leading-relaxed mt-4">
            Our university is a beacon of academic excellence, committed to
            fostering innovation, research, and professional development. We aim
            to equip students with the critical thinking skills and expertise
            needed to drive meaningful societal change. Through a dynamic
            curriculum, hands-on experiences, and global collaborations, we
            nurture future leaders who are prepared to tackle real-world
            challenges.
          </p>
        </div>

        {/* Video Section */}
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-3xl">
            <iframe
              className="w-full h-[400px] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/SKBZMDu41oY"
              title="University Innovation Week"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 bg-orange-300">
          <div className="max-w-5xl flex flex-col sm:flex-row gap-6 mx-auto py-6 px-6 items-center">
            <div className="sm:w-1/3">
              <img
                src="https://example.com/valid-image.jpg"
                className="h-auto w-[100px] rounded-lg"
                alt="Our Mission"
              />
            </div>
            <div className="sm:w-2/3 text-center sm:text-left">
              <Subtitle title="Our Mission" />
              <p className="text-gray-600 leading-relaxed mt-2">
                Our mission is to empower students with a holistic education
                that integrates academic knowledge, ethical values, and
                practical skills. We strive to create an inclusive environment
                where students are encouraged to think critically, innovate
                boldly, and lead responsibly. By fostering research, community
                engagement, and cross-disciplinary collaboration, we aim to
                shape professionals who contribute meaningfully to their
                communities and industries.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-12 container mx-auto">
          <Subtitle title="Our Core Values" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[
              {
                title: "Excellence",
                desc: "We uphold the highest standards of academic and professional excellence, ensuring that our students receive a world-class education.",
              },
              {
                title: "Innovation",
                desc: "We foster a culture of creativity and innovation, encouraging students to explore new ideas and solutions to global challenges.",
              },
              {
                title: "Integrity",
                desc: "We emphasize ethical leadership and integrity in all aspects of learning, research, and professional conduct.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-4 border border-neutral-300 rounded-lg shadow-sm bg-gray-50"
              >
                <h3 className="font-semibold text-lg text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600 mt-2">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
