import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function PlayStoreBadge({
  src,
  className,
  isDark,
  width,
  innerClassName,
}: {
  src: string | StaticImport;
  className?: string | undefined;
  isDark?: boolean;
  width?: number;
  innerClassName?: string;
}) {
  if (isDark == false || isDark == undefined) {
    return (
      <div
        className={
          `bg-white px-7 py-[9px] outline outline-1 outline-neutral-200 rounded-md ` +
          className
        }
      >
        <Image
          src={src}
          width={width ? width : 100}
          height={width ? width : 100}
          alt="PlayStore Logo"
          className={innerClassName}
          
        />
      </div>
    );
  } else {
    return (
      <div
        className={
          `bg-black rg:px-14 px-2 py-[9px] outline outline-1 outline-neutral-200 rounded-md ` +
          className
        }
      >
        <Image
          src={src}
          width={500}
          height={500}
          alt="PlayStore Logo"
          className={`rg:w-[120px] md:w-[100px] sm:w-[80px] w-[60px]`}
        />
      </div>
    );
  }
}
