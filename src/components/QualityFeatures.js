import Image from "next/image";

const QualityFeature = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start lg:flex-row sm:flex-col gap-1 sm:gap-4 lg:gap-8">
      <Image src={imgSrc} width={80} height={80} alt="features" />
      <div className="leading-loose">
        <h3 className="text-lg md:text-xl font-semibold mb-4">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const QualityFeatures = () => {
  return (
    <section className="container mx-auto px-5 md:px-16">
      <span className="service-name text-center ">QUALITY FEATURES</span>
      <h2 className="title text-center ">All the features you need</h2>

      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 mt-10 md:mt-20 lg:w-[88%] mx-auto">
        <QualityFeature
          imgSrc="/features/1.svg"
          title="Easy to Use"
          desc=" Powerful yet simple, Quintle is easy to use and understand and doesn't require complicated setup or tag configurations"
        />
        <QualityFeature
          imgSrc="/features/2.svg"
          title="UTMs and Custom Events"
          desc="Quintle automatically understands links with UTM parameters and lets you view and filter your website data based on UTMs. Additionally, you can track any event on your website, such as button clicks, form submissions, purchases, newsletter signups, etc."
        />
        <QualityFeature
          imgSrc="/features/3.svg"
          title="No Cookie Banners"
          desc="All data is anonymized with Quintle, and no personal information is ever collected on your website's users. You can track your website's performance without needing opt-in cookie banners, providing your users with a better and more trusted experience. Umami is GDRP and CCPA compliant by default."
        />
        <QualityFeature
          imgSrc="/features/4.svg"
          title="Customer Support"
          desc="Let's just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world."
        />
      </div>
    </section>
  );
};

export default QualityFeatures;
