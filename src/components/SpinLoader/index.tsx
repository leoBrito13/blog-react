type SpinLoaderProps = {
  ContainerClasses?: string;
};

export function SpinLoader({ ContainerClasses = "" }: SpinLoaderProps) {
  return (
    <div className={`flex items-center justify-center ${ContainerClasses}`}>
      <div className="w-10 h-40 border-4 border-t-transparent border-slate-400 rounded-full animate-spin"></div>
    </div>
  );
}
