import Image from "next/image";
import Link from "next/link";

import MaxWidthWrapper from "@/components/MaxwidthWrapper";
import Service from "@/services";
import Card from "@/components/Card";

export default async function Home() {
  const socialMedia = await Service.SocialMediaService.getSocialMedia();
  const skills = await Service.SkillService.getSkills();
  const experiences = await Service.ExperienceService.getExperiences();
  const education = await Service.EducationService.getEducation();
  const achievements = await Service.AchievementService.getAchievements();

  return (
    <MaxWidthWrapper className="py-8">
      <section>
        <div className="flex sm:flex-row justify-between items-start flex-col">
          <div>
            <h1 className="font-bold text-3xl sm:text-4xl">
              Hi, I&apos;m <strong>Roli Bernanda</strong>
            </h1>
            <h3 className="font-semibold text-2xl mt-4">
              Software Engineer. Javascript, Golang, Swift
            </h3>
          </div>
          <div className="flex space-x-4 items-center mt-4 justify-center">
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
        </div>
        <div className="mt-4">
          <p>
            I am an enthusiastic software engineer specializing in web, back-end
            and iOS development
          </p>
          <p>
            With over two years of work experience, I have developed a strong
            understanding of the associated technologies and frameworks
          </p>
        </div>
      </section>

      {/* Achievement section */}
      <section className="py-4 space-y-4">
        {achievements.map((curr) => (
          <Card key={curr.id}>
            <div className="p-4 flex flex-col">
              <h3 className="font-semibold text-lg">{curr.title}</h3>
              <p className="opacity-80">{curr.description}</p>
            </div>
          </Card>
        ))}
      </section>

      {/* Experiences section */}
      <section className="py-8 space-y-4 flex flex-col justify-center">
        <h1 className="font-bold text-3xl">Experiences</h1>
        {experiences.map((exp) => (
          <Card key={exp.id} className="p-4">
            <h1 className="font-semibold text-lg">{exp.name}</h1>
            <h3 className="opacity-80">{exp.role}</h3>
          </Card>
        ))}
      </section>

      {/* Skills section */}
      <section className="py-4 space-y-4">
        <h1 className="font-bold text-3xl">Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-8">
          {skills.map((category) => (
            <div key={category.id} className="space-y-4">
              <h1 className="font-semibold text-2xl opacity-80">
                {category.category}
              </h1>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill.id}>
                    <h1 className="font-bold text-lg">{skill.name}</h1>
                    <h3>{skill.description}</h3>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education section */}
      <section className="py-4 space-y-4 flex flex-col justify-center">
        <h1 className="font-bold text-3xl">Education</h1>
        {education.map((ed) => (
          <Card key={ed.id} className="p-4">
            <h1 className="font-semibold text-lg">{ed.school}</h1>
            <h3 className="opacity-80">{ed.fieldOfStudy}</h3>
          </Card>
        ))}
      </section>
    </MaxWidthWrapper>
  );
}
