import { PinContainer } from "../ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center" style={{ fontFamily: "Montserrat, sans-serif"}}>
      <PinContainer
        title="@oranch_barber"
        href="https://www.instagram.com/oranch_barber/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            @oranch_barber
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-white">
              🇦🇷Mendoza - Las Heras - B° Aeroparque 🇦🇷 🗓 Lunes a sábados de
              11:00am a 21:00pm 🕗 ☎️ 2612556076
            </span>
          </div>
          <img src="/img1.jpg" alt="logo" className="w-full rounded-lg mt-4" />
        </div>
      </PinContainer>
    </div>
  );
}
