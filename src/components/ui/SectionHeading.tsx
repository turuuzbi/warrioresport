import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  label,
  title,
  sub,
}: {
  index: string;
  label: string;
  title: string;
  sub?: string;
}) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <p className="mono-label flex items-center gap-3">
        <span className="text-accent">{index}</span>
        <span className="h-px w-10 bg-accent/60" />
        {label}
      </p>
      <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight tracking-wide sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-3 max-w-2xl text-base text-mute md:text-lg">{sub}</p>}
    </Reveal>
  );
}
