import { Firsthalf } from "./components/Firsthalf";
import { Secondhalf } from "./components/Secondhalf";

export default function LandingPage() {
  return (
    <div className="bg-[var(--primary-color)] h-[100vh] w-[100vw] flex justify-center items-center">
      <Firsthalf />
      <Secondhalf />
    </div>
  );
}
