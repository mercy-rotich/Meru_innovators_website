import PageLayout from "../PageLayouts/PageLayout";
import { motion } from "framer-motion";
import { Briefcase, Building, Users } from "lucide-react";
import Alumnis from "./Alumnis";
import Subtitle from "../../../components/Subtitle/Subtitle";
import ShowMoreButton from "../../../components/ShowMore/ShowMore";

import PassportSampleImage from "../../../assets/images/passport.webp";

const AlumniPage = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-blue-600 flex items-center justify-center text-white text-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold">Meet Our Successful Alumni</h1>
          <p className="mt-3 text-lg">
            Our alumni have gone on to achieve excellence in various industries
            worldwide.
          </p>
        </div>
      </section>

      {/* Alumni Profiles */}
      <section className="container mx-auto py-12 px-6">
        {/* Subtitle with Icon */}

        <Subtitle title="Alumni Network" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {Alumnis.map((alum) => (
            <motion.div
              key={alum.id}
              className="bg-white border border-neutral-300 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={PassportSampleImage}
                alt={alum.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {alum.name}
                </h3>
                {/* Profession */}
                <div className="flex items-center gap-2 text-gray-600 mt-1">
                  <Briefcase className="w-5 h-5 text-gray-500" />
                  <p>{alum.profession}</p>
                </div>
                {/* Company */}
                <div className="flex items-center gap-2 text-gray-600 mt-1">
                  <Building className="w-5 h-5 text-gray-500" />
                  <p>{alum.company}</p>
                </div>
                <p className="text-sm text-gray-500 mt-3">{alum.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <ShowMoreButton />
      </section>
    </PageLayout>
  );
};

export default AlumniPage;
