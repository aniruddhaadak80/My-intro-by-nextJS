import Addusers from "@/app/components/Addusers";
import DisplayUsers from "@/app/components/DisplayUsers";
export default function Home() {
  return (
    <>
      <h1>Welcome to home 🏡 Page</h1>
      <h2>It is sample project of Next-js. </h2>

      <Addusers />
      <DisplayUsers />
    </>
  );
}

// Title for my home page
export function generateMetadata() {
  return {
    title: "Home page",
  }};
