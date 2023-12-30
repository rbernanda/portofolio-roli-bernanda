import Image from "next/image";
import Link from "next/link";

import MaxWidthWrapper from "@/components/MaxwidthWrapper";
import { getSocialMedia } from "@/services/socialMedia";

export default async function Home() {
  const socialMedia = await getSocialMedia();

  return (
    <MaxWidthWrapper className="py-8">
      <section className="min-h-main mb-20 flex flex-col justify-center fade-in-start">
        <h1 className="font-bold text-3xl sm:text-4xl">
          Hi, I&apos;m <strong>Roli Bernanda</strong>
        </h1>
        <p className="mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s
        </p>
        <div className="flex space-x-4 mt-4">
          {socialMedia.map((social) => (
            <Link key={social.id} href={social.href} target="_blank">
              <Image
                src={social.icon}
                alt={social.name}
                width={32}
                height={40}
              />
            </Link>
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
