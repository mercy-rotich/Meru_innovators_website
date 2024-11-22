import React from "react";

import { Video } from "lucide-react";

const About = () => {
  return (
    <div className="mt-[7rem]">
      <div className="container">
        <div className="flex flex-col-reverse sm:flex-row gap-[1rem] justify-between">
          <div>
            <div className="basis-1/2 relative">
              <img
                src="https://images.pexels.com/photos/19547609/pexels-photo-19547609/free-photo-of-smiling-woman-in-graduate-gown-and-brown-dress-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="h-full w-full rounded-md"
              />
              <div className="mt-4 flex items-center text-xl absolute h-full top-0 right-0 w-full justify-center text-white">
                <div className="bg-gradient-to-r from-black to-transparent p-2 flex flex-col items-center justify-center">
                  <Video size={30} className="mr-2" color="white" />{" "}
                  <span className="text-sm">Watch Our Previous innovation week</span>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            <h3 className="subtopic text-topicColor">About University</h3>
            <p className="description text-center sm:text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptas, nisi adipisci. Voluptates officia maxime quaerat nihil
              fuga alias cum iusto commodi, earum voluptas iure molestiae hic
              tenetur necessitatibus architecto provident ipsum doloribus cumque
              nemo neque, beatae, porro ad. Nesciunt ut, dolorum dolore
              repellendus architecto distinctio beatae quas, possimus quia, quam
              exercitationem corporis maiores blanditiis quasi sit enim a! Ipsa
              rerum modi vero neque obcaecati sunt mollitia, dolores nesciunt
              enim dicta ipsam voluptatibus fuga consequuntur eaque? Blanditiis,
              ab.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
