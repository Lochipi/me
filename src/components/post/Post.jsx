import Link from "next/link";

function Post() {
  return (
    <div className="text-black px-20 mt-4">
      <Link
        href=""
        className="cursor-pointer transition duration-150 hover:text-blue-500"
      >
        <h1 className="text-3xl">A quick snick pick to JavaScript APIs</h1>
        <h5 className="text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          dolores accusamus unde dolor, perspiciatis amet nostrum ...
        </h5>
      </Link>

      <p className="font-light">
        Posted by{" "}
        <span className="text-gray-800">
          <a
            href="#"
            className="underline italic font-light hover:text-blue-500 text-black"
          >
            Cornelius L. Emase
          </a>{" "}
        </span>{" "}
        on Sep 12th 2023. 2 min read.<span></span>
      </p>
    </div>
  );
}

export default Post;
