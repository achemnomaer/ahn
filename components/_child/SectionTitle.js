export default function SectionTitle({ children }) {
  return (
    <div className="w-full flex items-center mb-12">
      <h2 className="mx-auto">
        <div className="relative overflow-hidden w-fit">
          <div className="opacity-100 transform-none">
            <span className="text-3xl md:text-5xl font-black text-end">
              {children}
              <span className="text-primary">.</span>
            </span>
          </div>
        </div>
      </h2>
    </div>
  );
}
