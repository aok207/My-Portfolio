import data from "../../../../data/index.json";

function MySkills() {
  return (
    <section
      id="skills"
      className="flex py-24 px-12 flex-col justify-center items-start gap-20 max-md:items-center dark:bg-slate-900"
    >
      <div className="text-center mx-auto">
        <h2 className="text-4xl font-semibold dark:text-white">My Skills</h2>
      </div>
      <div className="grid justify-center items-start gap-10 grid-cols-4 md:max-lg:grid-cols-2 max-md:grid-cols-1 max-md:text-center max-md:items-center">
        {data?.skills?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col p-5 gap-8 flex-1 rounded-md bg-blue-100 bg-opacity-40 min-h-[505px] hover:shadow-md transition-[box-shadow] duration-300 ease-in-out hover:shadow-blue-700 max-md:items-center dark:bg-inherit"
          >
            <div className="flex rounded-full p-4 bg-white w-fit drop-shadow-md z-10 dark:bg-black">
              <img
                src={item.src}
                alt=""
                width={index === 0 ? "90px" : "60px"}
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold dark:text-gray-300">
                {item.title}
              </h3>
              <p className="dark:text-neutral-300 leading-loose">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MySkills;
