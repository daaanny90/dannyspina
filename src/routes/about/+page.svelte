<script>
  import PageTitle from "$lib/components/PageTitle.svelte";

  const today = new Date();
  const startCodingDate = new Date("2017-01-01");

  const yearsOfExperience = today.getFullYear() - startCodingDate.getFullYear();
</script>

<PageTitle title="About Me" subtitle="" />

<p>
  <strong>I'm Danny</strong>, a web developer with a focus on building scalable
  and maintainable web applications.
  <br />
  <br />
  I have {yearsOfExperience} years of experience working with
  <strong>front-end</strong>
  and <strong>back-end</strong> technologies, and specialize in
  <strong>TypeScript</strong>
  and <strong>JavaScript</strong>. I have a solid understanding of the latest
  web development technologies and frameworks such as <strong>React</strong>,
  <strong>Vue</strong>, <strong>Node.js</strong> and <strong>Express</strong>,
  and have experience working with a variety of databases like
  <strong>MongoDB</strong>, <strong>MySQL</strong> and
  <strong>PostgreSQL</strong>. I am well-versed in <strong>Agile</strong>
  development methodologies and have experience working in a
  <strong>team-oriented environment</strong>.
  <br />
  <br />
  I take pride in my ability to write
  <strong>clean, efficient and well-documented code</strong>, and am always
  looking for ways to improve my skills and stay up-to-date with the latest
  industry trends.
  <br />
  I am also passionate about the <strong>ethical aspects</strong> of software
  development and I love <strong>open source</strong> projects. I am focused on
  <strong>architecture</strong>
  and <strong>design methodologies</strong> such as
  <strong>Domain-Driven Design</strong>, which allows me to create sustainable,
  easy to maintain and well-designed systems.
</p>
<p>
  Beyond writing code, I am deeply invested in the impact that technology has on
  society. I believe that software development is a powerful tool for <strong
    >creating positive change</strong
  >, and I am committed to using my skills for the greater good. This passion
  for ethical technology is reflected in my love for open-source projects and my
  focus on design methodologies like Domain-Driven Design. These practices not
  only result in <strong>sustainable, easy-to-maintain systems</strong>, but
  they also promote transparency and collaboration. I am always eager to apply
  my skills to projects that align with my values and have a
  <strong>meaningful impact on the world</strong>.
</p>

<p>
  In the end, <strong
    >I am grateful to be able to do what I love every day</strong
  >.
  <br />
  <br />
  Programming is not just a job for me, it's a <strong>passion</strong>.
  <br />
  It's a <strong>privilege</strong> to be able to use my skills to create
  something that <strong>can make a difference</strong>, whether it's a small
  feature or a large-scale application. I am constantly in awe of the power of
  code to connect people, solve problems and improve lives. I am excited to
  continue on this journey, and to see where it takes me next.
  <br />
  <br />
  <strong>If you share my passion</strong> for creating meaningful technology
  and want to connect, <strong>I would be happy to hear from you</strong>.
</p>
