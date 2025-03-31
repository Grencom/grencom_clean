import dynamic from "next/dynamic";

const GrencomLandingPage = dynamic(() => import("../grencom-landing/GrencomLandingPage"), {
  ssr: false,
});

export default function Home() {
  return <GrencomLandingPage />;
}
