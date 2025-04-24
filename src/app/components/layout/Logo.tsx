import Link from 'next/link';
import Image from 'next/image';


export const Benchmark =()=> {
  return (
    <Link href="/">
      <Image
        src="./Benchmark.svg"
        alt="logo"
        width={120}
        height={30}
        className="hover:scale-105 transition-all duration-200 ease-in-out"
      />
    </Link>
    
  );
}

export const Logo =()=> {
  return (
    <Link href="/">
      <Image
        src="./logo.svg"
        alt="logo"
        width={50}
        height={50}
        className="hover:scale-105 transition-all duration-200 ease-in-out"
      />
    </Link>
    
  );
}

