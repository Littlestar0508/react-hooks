export default function OuterComponent({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) {
  return <div ref={ref}>외부 요소</div>;
}
