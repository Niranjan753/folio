export default function Footer() {
  return (
    <footer className="border-t border-border/30 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8">
            {/* Desktop Keyboard Shortcuts */}
            <div className="hidden lg:flex items-center gap-2">
              <kbd className="px-2 py-1 text-[10px] border border-border/50 rounded font-mono bg-muted/30">↑</kbd>
              <kbd className="px-2 py-1 text-[10px] border border-border/50 rounded font-mono bg-muted/30">↓</kbd>
              <kbd className="px-2 py-1 text-[10px] border border-border/50 rounded font-mono bg-muted/30">H</kbd>
              <kbd className="px-2 py-1 text-[10px] border border-border/50 rounded font-mono bg-muted/30">L</kbd>
              <span className="text-[10px] text-muted-foreground ml-2 font-mono">Navigate</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <kbd className="px-2 py-1 text-[10px] border border-border/50 rounded font-mono bg-muted/30">0</kbd>
              <kbd className="px-2 py-1 text-[10px] border border-border/50 rounded font-mono bg-muted/30">1</kbd>
              <kbd className="px-2 py-1 text-[10px] border border-border/50 rounded font-mono bg-muted/30">2</kbd>
              <span className="text-[10px] text-muted-foreground ml-2 font-mono">Sections</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <kbd className="px-2 py-1 text-[10px] border border-border/50 rounded font-mono bg-muted/30">M</kbd>
              <span className="text-[10px] text-muted-foreground ml-2 font-mono">Contact</span>
            </div>
          </div>
          <div className="text-[10px] text-muted-foreground font-mono text-center sm:text-right">
            © {new Date().getFullYear()} Berlin | Niranjan
          </div>
        </div>
      </div>
    </footer>
  );
}

