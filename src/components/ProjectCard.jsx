export default function ProjectCard({ title, description, iframe, video }) {
  return (
    <div className="bg-gray-700 p-4 mb-6 rounded-md">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="mb-3">{description}</p>
      {iframe && (
        <iframe
          src={iframe}
          width="640"
          height="400"
          className="w-full border"
          allowFullScreen
        ></iframe>
      )}
      {video && (
        <video src={video} controls width="640" className="w-full"></video>
      )}
    </div>
  );
}
