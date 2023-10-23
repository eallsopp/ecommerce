const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        rerum at, nam, necessitatibus hic eius dolores delectus accusantium ab
        nesciunt cupiditate sunt facere sequi fugit, autem similique vel quas
        cumque!
      </p>
    </>
  );
};

export default About;
