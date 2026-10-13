import Image from "next/image";

export function ChefCard({ name, role, img, aspect = "aspect-[284/346]" }: { name: string; role: string; img: string; aspect?: string }) {
  return (
    <div className="group frame">
      <div className={`zoom-img relative overflow-hidden ${aspect}`}>
        <Image src={img} alt={name} fill sizes="(min-width:1024px) 320px, (min-width:640px) 50vw, 100vw" className="object-cover object-top" />
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full justify-center gap-2 bg-gradient-to-t from-navy/90 to-transparent pt-10 pb-4 transition-transform duration-500 group-hover:translate-y-0">
          {["f", "in", "x"].map((s) => (
            <span key={s} className="grid h-9 w-9 place-items-center rounded-full border border-gold-2 text-xs font-semibold text-white uppercase transition-colors hover:bg-gold">
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="border border-t-0 border-gold-2/80 bg-cream py-6 text-center transition-colors duration-500 group-hover:bg-white">
        <h3 className="font-serif text-2xl text-ink">{name}</h3>
        <span className="mx-auto mt-3 block h-[2px] w-6 bg-gold transition-all duration-500 group-hover:w-14" />
        <p className="mt-3 text-[12px] font-medium tracking-[0.22em] text-gold uppercase">{role}</p>
      </div>
    </div>
  );
}
