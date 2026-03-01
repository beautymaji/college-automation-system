export default function CountdownTimer({ deadline }) {
  const days =
    Math.ceil(
      (new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24)
    ) || 0;

  return (
    <span className="text-sm text-red-600">
      ⏳ {days} days left
    </span>
  );
}