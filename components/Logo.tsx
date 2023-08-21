import Image from 'next/image';

export default function Logo({ ...rest }) {
  return <Image src="/logo.png" alt="" className="" width={50} height={50} />;
}
