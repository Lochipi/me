import Post from "@/components/post/Post";

export default function Home() {
  return (
    <main className="flex bg-white text-black min-h-screen flex-col">
      <div className="px-20 ">
        <h1 className="text-4xl font-bold mt-4">A Quick snick pick!</h1>
        <div className="mt-4">
          <ol className="list-disc list-inside flex flex-col gap-4">
            <li className="text-2xl font-bold">Online Writer</li>
            <p className="p-0">
              I am an online writer, I create content for different platforms,
              you can check them out on{" "}
              <span>
                <a
                  href="#"
                  className="hover:text-underline hover:text-blue-500 hover:underline"
                >
                  Hashnode
                </a>
              </span>{" "}
              and{" "}
              <span>
                <a
                  href="#"
                  className="hover:text-underline hover:text-blue-500 hover:underline"
                >
                  Medium
                </a>
              </span>
              . I major my content on the web and data areas.
            </p>
            <li className="text-2xl font-bold">Student</li>
            <p>
              I am a student currently studying Software Engineering at Muranga
              University of Technology. I am in my final year of the program.
            </p>
            <li className="text-2xl font-bold">Google DSC Web Lead</li>
            <p>
              write now well, start with I am I am honored to have been elected
              as the Web Lead for the 2023/2024 year in the Google Developer
              Student Clubs (DSC). I am excited to take on this role and work
              closely with a talented team to develop and maintain web projects.
            </p>
            <li className="text-2xl font-bold">
              Machine Learning Competition, SSA
            </li>
            <p>
              I am delighted to share that I participated in a Machine Learning
              competition organized by the SSA. It was an incredible experience
              where I had the opportunity to showcase my skills and knowledge in
              the field of Machine Learning.
            </p>
          </ol>
        </div>
      </div>

      <hr className="mt-8" />

      <div className="py-10" id="blogs">
        <div>
          <h1 className="text-4xl font-bold px-20">Blog and Posts</h1>
        </div>
        <div>
          <Post />
          <Post />
          <Post />
        </div>
      </div>

      <hr />
    </main>
  );
}
