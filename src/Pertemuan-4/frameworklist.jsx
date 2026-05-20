import frameworkData from "./framework.json";

export default function FrameworkList() {
  return (
    <div className="p-8">
      {frameworkData.map((item) => (
        <div
          key={item.id}
          className="border p-4 mb-4 rounded-lg shadow-md bg-white"
        >
          <h2 className="text-lg font-bold text-gray-800">
            {item.name}
          </h2>

          <p className="text-gray-600">
            {item.description}
          </p>

          <p className="mt-2 text-sm text-black">
            Developed By:{" "}
            <span className="font-bold">
              {item.details.developer}
            </span>{" "}
            ({item.details.releaseYear})
          </p>

          <a
            href={item.details.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-sm hover:underline"
          >
            Visit Website
          </a>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-200 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}