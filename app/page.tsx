import HeaderUI from "@/src/header/header";
import MainUI from "@/src/main/main";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <HeaderUI />
      <MainUI />
      <footer className="h-16 bg-gray-800 text-white flex items-center justify-center">
        <p>Copyright by Kim Min Seung 2025</p>
      </footer>
    </div>
  );
}
