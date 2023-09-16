import Info from "@/components/info/Info";

export default function Home() {
  return (
    <div className="min-h-screen px-20">
      <div className="home flex flex-col items-center justify-center">
        <h2 className="text-6xl font-bold shadow-xl text-shadow text-blue-600">
          Cornelius L. Emase
        </h2>
        <p className="text-1xl shadow-lg bg-white p-1">
          Software Engineer & Author, Problem Solver!
        </p>
      </div>
      <div>
        <Info />
      </div>
    </div>
  );
}
