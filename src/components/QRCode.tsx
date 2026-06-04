interface QRCodeProps {
  imageUrl: string;
  alt?: string;
}

export function QRCode({ imageUrl, alt = "QR Code" }: QRCodeProps) {
  return (
    <div className="mt-6 flex justify-center">
      <img
        src={imageUrl}
        alt={alt}
        className="w-24 h-24 object-cover rounded-sm shadow-sm"
      />
    </div>
  );
}
