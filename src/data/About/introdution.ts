export const introduction: string[] = [
  "Hi everyone, my name is Taufik Hidayat. I'm a Junior Full Stack Developer, Computer Science Student, YouTuber, Free and Open Source Software Enthusiast, and Linux Nerd",
  `I live in Bandung, Indonesia. I was born in Majalengka, 1 April 2002. I'm ${calculateAge(
    new Date('2002-04-01')
  )} years old. I'm a Computer Science Student from Bale Bandung University.`,
  'Coding has been my passion and hobby since I was 15 years old, and I love computer since I was a kid. Besides coding, I love listening to music. My favorite genres are Pop Punk, Post-hardcore, Metalcore, Nu-metal, and Electronicore. I like playing games too. My favorite genre is First Person Shooter',
  'Sometimes I watch anime, but I prefer watching western movies and series, especially MCU (Marvel Cinematic Universe). I spend a lot of time on Facebook sharing memes and shitposts.',
];

function calculateAge(birthday: Date) {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
