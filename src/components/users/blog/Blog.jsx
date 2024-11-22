import { ThumbsUp, MessageSquare } from "lucide-react";
import { ArrowRight } from "lucide-react";
const Blog = () => {
  return (
    <div className="p-[20px] bg-white border border-neutral-300 rounded-md  transition-shadow ease-in-out duration-300">
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Blog"
          className="w-full h-[250px] object-cover rounded-md"
        />
        <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full shadow-md">
          <span className="text-neutral-800 text-lg font-bold">New</span>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <img
          src="https://images.pexels.com/photos/14723868/pexels-photo-14723868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Author"
          className="h-[50px] w-[50px] rounded-full border-2 border-neutral-300"
        />
        <div>
          <h5 className="text-neutral-800 font-semibold">Dennis Peter</h5>
          <p className="text-neutral-400 text-sm">Web Engineer</p>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-neutral-800 mt-4 border-b pb-2 border-neutral-300">
        Getting started with Angular 18 Routing!!
      </h3>
      <ul className="flex items-center flex-wrap gap-2 mt-2">
        <li className="text-sm text-neutral-500 bg-neutral-100 px-3 py-1 rounded-md">
          #NodeJS
        </li>
        <li className="text-sm text-neutral-500 bg-neutral-100 px-3 py-1 rounded-md">
          #APIDevelopment
        </li>
        <li className="text-sm text-neutral-500 bg-neutral-100 px-3 py-1 rounded-md">
          #TypeScript
        </li>
      </ul>
      <div className="flex items-center flex-wrap gap-6 mt-4">
        <div className="flex items-center gap-2">
          <button>
            <ThumbsUp size={24} />
          </button>
          <span className="text-sm text-neutral-700">800</span>
        </div>
        <div className="flex items-center gap-2">
          <button>
            <MessageSquare size={24} />
          </button>
          <span className="text-sm text-neutral-700">1k</span>
        </div>
        <button className="universal-button flex items-center justify-between">
          Readmore <ArrowRight size={16} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Blog;
