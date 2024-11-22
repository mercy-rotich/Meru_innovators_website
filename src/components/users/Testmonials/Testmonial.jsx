import { Instagram, Linkedin } from "lucide-react";
const Testmonial = () => {
  return (
    <div className="p-[10px] border border-b-0 border-neutral-300 rounded-md">
      <div className="border-2 border-orange-500 p-[10px] translate-y-6 rounded-md">
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
        <p className="leading-7 text-neutral-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam natus
          fuga modi nostrum odio recusandae optio dolore, accusantium est rem
          nihil reprehenderit obcaecati aperiam. Officia eligendi a atque
          dolorum quas placeat minima totam, quo officiis, dignissimos quia,
          temporibus aspernatur quisquam?
        </p>
        <div className="flex gap-4 pt-[1.5rem] mt-[1rem] border-t border-neutral-300">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={24} />
          </a>
          <div className="universal-button">View profile</div>
        </div>
      </div>
    </div>
  );
};

export default Testmonial;
