import { GameGridSkeleton } from '@/components/ui/Skeleton';

export default function JogosLoading() {
  return (
    <div className="min-h-screen bg-background pt-24 px-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="h-10 bg-white/5 rounded-xl w-72 mb-8 animate-pulse" />
        <GameGridSkeleton count={20} />
      </div>
    </div>
  );
}
