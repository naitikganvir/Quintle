import Image from "next/image";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const TeamCard = ({ imgSrc, name, title }) => {
  return (
    <div className="relative flex flex-col gap-1 md:hover:shadow-lg rounded-xl md:py-10 team-card md:cursor-pointer">
      <Image
        src={imgSrc}
        width={130}
        height={130}
        alt="team member"
        className="drop-shadow-2xl w-20 sm:w-32 md:mb-5 mb-3 rounded-full border-2 border-rose-500 mx-auto"
      />
      <h2 className="text-base sm:text-xl font-semibold text-center">{name}</h2>
      <p className="text-center sm:text-base text-sm">{title}</p>
      <div className="flex md:flex-col gap-3 md:absolute md:bottom-12 md:right-8 md:translate-y-10 icons md:transition-all md:duration-500 md:opacity-0 mx-auto md:mx-0 md:text-rose-600">
        <Link
          target="_blank"
          href="https://www.facebook.com/Quintle"
        >
          <FacebookRoundedIcon className="text-xl hover:text-rose-600 cursor-pointer md:hover:text-gray-500" />
        </Link>
        <Link target="_blank" href="https://github.com/Quintle">
          <GitHubIcon className="text-xl hover:text-rose-600 cursor-pointer md:hover:text-gray-500" />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/Quintle/"
        >
          <LinkedInIcon className="text-xl hover:text-rose-600 cursor-pointer md:hover:text-gray-500" />
        </Link>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section className="container mx-auto px-5 md:px-16 lg:px-24">
      <span className="service-name text-center ">PEOPLE LOVE QUICK</span>
      <h2 className="title text-center md:w-1/2 mx-auto">
        The most loved individuals of Quintle
      </h2>

      <div className="mx-auto grid grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-8 mt-16">
        <TeamCard
          imgSrc={"/team/1.png"}
          name="Vishal Sharma"
          title="Excellent service! Their insights helped us boost our revenue significantly. Highly recommended!"
        />
        <TeamCard imgSrc={"/team/2.png"} name="Priya Agrawal" title="Great analytics platform. User-friendly and provides valuable data for informed business decisions" />
        <TeamCard
          imgSrc={"/team/3.png"}
          name="Junaid Khan"
          title="Outstanding analytics! Detailed reports and easy to understand. Helped streamline our operations."
        />
        <TeamCard
          imgSrc={"/team/4.png"}
          name="Ritesh Verma"
          title="Reliable and efficient. The analytics provided were spot on. Our productivity has improved greatly."
        />
        <TeamCard
          imgSrc={"/team/5.png"}
          name="Amar Singh"
          title="Top-notch service. Their analytics have transformed our marketing strategy. Very pleased with the results."
        />
        <TeamCard
          imgSrc={"/team/6.png"}
          name="Pratik Shah"
          title="Highly effective analytics! It provided us with actionable insights and improved our overall performance"
        />
      </div>
    </section>
  );
};

export default Team;
