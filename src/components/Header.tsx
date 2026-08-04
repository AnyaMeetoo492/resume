// Erwin Lejeune - 2026-02-15

interface HeaderProps {
  name: string;
  title: string;
  description?: string;
  profileImage?: string;
}

/** Top section of the resume: profile picture on left, text on right. */
export function Header({
  name,
  title,
  description,
  profileImage,
}: HeaderProps) {
  return (
    <header className="mb-10">
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8">
        {/* Profile picture on the left */}
        {profileImage && (
          <div className="flex-shrink-0">
            {profileImage}
          </div>
        )}

        {/* Text content on the right */}
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary leading-none">
            {name}
          </h1>

          <h2 className="mt-3 text-lg sm:text-xl font-semibold text-accent">
            {title}
          </h2>

          {description && (
            <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
