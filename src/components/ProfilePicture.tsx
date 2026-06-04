interface ProfilePictureProps {
  imageUrl: string;
  alt?: string;
}

export function ProfilePicture({ imageUrl, alt = "Profile" }: ProfilePictureProps) {
  return (
    <div className="mb-6">
      <img
        src={imageUrl}
        alt={alt}
        className="w-full rounded-lg shadow-md object-cover aspect-square"
      />
    </div>
  );
}
