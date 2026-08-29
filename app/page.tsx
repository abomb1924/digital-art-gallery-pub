import { StudioMark } from "@/components/studio-mark"

export default function HomePage() {
  return (
    <div className="flex min-h-[calc(100dvh-6.5rem)] items-center justify-center px-6 py-8 md:min-h-[calc(100dvh-7.5rem)]">
      <h1 className="sr-only">E.D.E Studio</h1>
      <StudioMark />
    </div>
  )
}
