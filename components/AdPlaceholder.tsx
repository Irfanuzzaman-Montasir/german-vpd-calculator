interface AdPlaceholderProps {
  slot: string;
  className?: string;
  label?: string;
  minHeight?: string;
}

/**
 * Reserved space for future Google AdSense placements.
 * Set data-ad-slot for easy identification.
 * To activate ads: replace this component with the AdSense script snippet.
 */
export default function AdPlaceholder({
  slot,
  className = "",
  label = "Advertisement",
  minHeight = "90px",
}: AdPlaceholderProps) {
  // Only render in production to keep dev environment clean
  // Remove the condition below when activating AdSense
  if (process.env.NODE_ENV === "development") {
    return (
      <div
        className={`ad-placeholder ${className}`}
        style={{ minHeight }}
        data-ad-slot={slot}
        aria-hidden="true"
        role="presentation"
      >
        {label} [{slot}]
      </div>
    );
  }

  // Production: reserved empty space (will be replaced by AdSense)
  return (
    <div
      className={`w-full ${className}`}
      style={{ minHeight }}
      data-ad-slot={slot}
      aria-hidden="true"
      role="presentation"
    />
  );
}
