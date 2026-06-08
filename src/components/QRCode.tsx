interface QRCodeProps {
  imageUrl: string;
  alt?: string;
  title: string;
}

export function QRCode({ imageUrl, alt = "QR Code", title }: QRCodeProps) {
  return (
    <div className="mt-6 flex items-center gap-4">
      <img
        src={imageUrl}
        alt={alt}
        className="w-24 h-24 object-cover rounded-sm shadow-sm flex-shrink-0"
      />
      <div className="flex-1">
        <p className="text-xs text-primary/80 leading-relaxed">
          {title}
          <br />
          <a
            href="https://linktr.ee/anyameetoo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline transition-colors font-medium"
          >
            linktr.ee/anyameetoo
          </a>
        </p>
      </div>
    </div>
  );
}
