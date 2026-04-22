export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-2 border-primary-600 border-t-transparent animate-spin" />
        <p className="text-zinc-500 text-sm font-medium">Carregando...</p>
      </div>
    </div>
  );
}
