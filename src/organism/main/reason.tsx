import { Gauge, Zap, Split, FolderSearch } from "lucide-react";

export function ReasonSection() {
  const metrics = [
    {
      icon: Gauge,
      value: "95+",
      label: "Lighthouse 성능 점수",
      description: "최적화된 웹사이트 성능",
    },

    {
      icon: Zap,
      value: "2.1초",
      label: "평균 로딩 시간",
      description: "빠른 페이지 로드 속도",
    },
    {
      icon: Split,
      value: "32%",
      label: "기대 이탈율 감소",
      description: "성능 향상에 따른 이탈율 감소",
    },
    {
      icon: FolderSearch,
      value: "90+",
      label: "검색엔진 최적화",
      description: "LightHouse기준 90점 이상",
    },
  ];

  return (
    <section id="really" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            VisionPlace는 성능을 보장합니다.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            페이지 이탈율의 큰 사유 중 하나는 로딩속도입니다. <br />
            이탈율을 막기위한 최고의 성능을 보장합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl mb-2 text-gray-900">{metric.value}</div>
              <h3 className="text-lg mb-2 text-gray-900">{metric.label}</h3>
              <p className="text-gray-600 text-sm">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-1 gap-12 items-center">
          <div>
            <h3 className="text-2xl mb-6 text-gray-900">
              Lighthouse 성능 점수
            </h3>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Performance</span>
                  <div className="flex items-center">
                    <div className="w-16 h-2 bg-gray-200 rounded-full mr-2">
                      <div className="w-15 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm text-green-600">98</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Accessibility</span>
                  <div className="flex items-center">
                    <div className="w-16 h-2 bg-gray-200 rounded-full mr-2">
                      <div className="w-full h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm text-green-600">100</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Best Practices</span>
                  <div className="flex items-center">
                    <div className="w-16 h-2 bg-gray-200 rounded-full mr-2">
                      <div className="w-15 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm text-green-600">96</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">SEO</span>
                  <div className="flex items-center">
                    <div className="w-16 h-2 bg-gray-200 rounded-full mr-2">
                      <div className="w-full h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm text-green-600">90</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
