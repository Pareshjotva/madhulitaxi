export default function Logo({ light = false }) {
  return (
    <span className={`brand${light ? " brand-light" : ""}`}>
      <img className="brand-logo" src="/images/logo.png" alt="Madhuli Taxi Services" />
    </span>
  );
}
