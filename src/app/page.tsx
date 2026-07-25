import StickyNav from "@/components/StickyNav";
import FounderVision from "@/components/FounderVision";
import AboutUs from "@/components/AboutUs";
import DigitalTeam from "@/components/DigitalTeam";
import Gallery from "@/components/Gallery";
import AdvisoryBoard from "@/components/AdvisoryBoard";
import MemberLogin from "@/components/MemberLogin";
import VisitorCounter from "@/components/VisitorCounter";

const tabLabels = ["FOUNDER", "ABOUT", "TEAM", "GALLERY", "BOARD", "LOGIN"];

export default function Home() {
  return (
    <>
      <StickyNav tabLabels={tabLabels}>
        <FounderVision />
        <AboutUs />
        <DigitalTeam />
        <Gallery />
        <AdvisoryBoard />
        <MemberLogin />
      </StickyNav>
      <VisitorCounter />
    </>
  );
}