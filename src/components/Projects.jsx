import CallMadeIcon from "@mui/icons-material/CallMade";
import data from "../data/index.json";

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col px-12 py-20 items-start gap-16 bg-blue-100/30 dark:bg-gray-950"
    >
      <div className="flex justify-between w-full items-center max-[600px]:block max-[600px]:text-center">
        <div className="flex flex-col items-start gap-6 max-[600px]:gap-3 max-[600px]:block">
          <p className="text-xl font-semibold max-[600px]:text-lg text-gray-600 dark:text-neutral-200">
            Recent Projects
          </p>
          <h2 className="text-4xl font-semibold max-[600px]:text-3xl dark:text-neutral-300">
            My Portfolio
          </h2>
        </div>
        <div className="max-[600px]:mt-4 max-[600px]:text-sm">
          <button
            onClick={() => window.open("https://github.com/aok207", "_blank")}
            className="hoverable flex items-center gap-1 border p-3 rounded-md bg-pink-600 text-white hover:text-pink-600 hover:bg-white hover:border-pink-600 group max-[600px]:mx-auto dark:border-pink-600 dark:hover:bg-inherit"
            id="github-btn"
          >
            <svg
              viewBox="0 0 98 96"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "30px", height: "28px" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                className="fill-white group-hover:fill-pink-600"
              />
            </svg>
            Visit My GitHub
          </button>
        </div>
      </div>
      <div className="grid justify-center items-start gap-10 grid-cols-3 md:max-lg:grid-cols-2 max-md:grid-cols-1 max-md:text-center max-md:items-center">
        {data?.portfolio?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-8 flex-1 bg-white shadow-md rounded-t-xl min-h-[700px] group dark:bg-slate-900"
          >
            <div className="rounded-sm w-full">
              <img src={item.src} alt="project" />
            </div>
            <div className="flex flex-col p-8 items-start gap-8 self-stretch">
              <div className="flex flex-col gap-5">
                <h3 className="font-bold text-xl dark:text-white">
                  {item.title}
                </h3>
                <p className="dark:text-white">{item.description}</p>
              </div>
              <div className="go-to-github-link font-bold cursor-pointer max-[600px]:mx-auto hoverable dark:text-gray-300">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  View On Github <CallMadeIcon />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
