import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clockify | Home",
  description: "A digital clock application built with Next.js",
};

const page = () => {
  return <section className="grid h-[90dvh] place-items-center"></section>;
};

export default page;
