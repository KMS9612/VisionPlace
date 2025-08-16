"use client";
<<<<<<< HEAD

// import HeaderUI from "@/src/organism/header/header";
// import MainUI from "@/src/organism/main/main";
=======
import "@/src/service/_api/fb";
import HeaderUI from "@/src/organism/header/header";
import MainUI from "@/src/organism/main/main";
>>>>>>> b021a3b8dab136f25c0ff182dfcbc1a09e90ac73

export default function Home() {
  // useEffect(() => {
  // 과도한 API통신으로 성능저하 => 추후 Google analytics로 관련 정보 다룰것.
  // fetch("/api/visit_tracker", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ time: new Date() }),
  // });
  // }, []);

  return (
    <div className="relative flex flex-col">
      {/* <HeaderUI />
      <MainUI />
      <footer className="h-16 bg-gray-800 text-white flex items-center justify-center">
        <p>Copyright by Kim Min Seung 2025</p>
      </footer> */}
      <h1>점검 중 입니다. 빠른 시일내로 더 좋은 서비스로 찾아가겠습니다.</h1>
    </div>
  );
}
