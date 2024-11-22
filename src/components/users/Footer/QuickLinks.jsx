import { Link } from "react-router-dom"
const QuickLinks = () => {
  return (
    <div>
      <h4 className="text-2xl font-semibold text-darkGreen">Quick Links</h4>
      <ul>
        <li className="pb-[0.5rem]">
          <Link className="hover:underline" to="#">
            Communities
          </Link>
        </li>
        <li className="pb-[0.5rem]">
          <Link className="hover:underline" to="#">
            Upcomming Events
          </Link>
        </li>
        <li className="pb-[0.5rem]">
          <Link className="hover:underline" to="#">
            Executive leaders
          </Link>
        </li>
        <li className="pb-[0.5rem]">
          <Link className="hover:underline" to="#">
            Alumni
          </Link>
        </li>
        <li className="pb-[0.5rem]">
          <Link className="hover:underline" to="#">
            Blog{" "}
          </Link>
        </li>
        <li className="pb-[0.5rem]">
          <Link className="hover:underline" to="#">
            Support
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
