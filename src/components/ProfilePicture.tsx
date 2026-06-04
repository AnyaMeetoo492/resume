interface ProfilePictureProps {
  imageUrl: string;
  alt?: string;
}

export function ProfilePicture({ imageUrl, alt = "Profile" }: ProfilePictureProps) {
  return (
    <div className="mb-6 flex justify-center">
      <img
        src={imageUrl}
        alt={alt}
        className="w-32 h-32 rounded-full shadow-md object-cover"
      />
    </div>
  );
}
