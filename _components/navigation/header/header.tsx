import { MobileHeader } from "./mobile/mobile-header";
import { DesktopHeader } from "./desktop/desktop-header";

export function Header() {
  return (
    <header className="sticky left-0 top-0 mx-auto border-b-4 border-blush-pink bg-black z-50 overflow-y-hidden">
      <div className="max-w-[1280px] mx-auto relative">
        <MobileHeader />
        <DesktopHeader />
      </div>
    </header>
  );
}
