export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-60 py-10 md:py-0 md:h-24">
        <div className="flex flex-col items-center justify-between gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Ebuka Odini. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Developed by Ebuka Odini
          </p>
        </div>
      </div>
    </footer>
  );
}
