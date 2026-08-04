// Erwin Lejeune - 2026-02-15

// Erwin Lejeune - 2026-02-15

interface HeaderProps {
  name: string;
  title: string;
  description?: string;
  profileImage?: string;
}

export function Header({
  name,
  title,
  description,
  profileImage,
}: HeaderProps) {
  return (
    <header className="mb-10">
      <div className="flex items-center gap-8">
        {profileImage && (
          {profileImage}
        )}

        <div className="flex-1">
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 leading-none">
            {name}
          </h1>

          <h2 className="mt-3 text-xl font-semibold text-pink-600">
            {title}
          </h2>

          {description && (
            <p className="mt-2 text-sm text-slate-600 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
