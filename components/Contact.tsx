import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. What's Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">
        Reach out to her?
      </h2>
      <p className="max-w-[600px] text-center text-textDark">
        "My inbox is like a 24/7 convenience store for awesome opportunities!
        Whether you're dropping in with questions or just want to share a
        virtual high-five, I'll be here, ready to shoot back a reply that's
        cooler than a penguin on roller skates!"
      </p>
      <a href="mailto:Disha.dishay166@gmail.com" target="_blank">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wide rounded-md hover:bg-hoverColor duration-300">
          Disha says heyy!
        </button>
      </a>
    </section>
  );
};

export default Contact;
