import { useForm } from '../context/useFormContext';
import '../App.css';
import md from 'markdown-it';

const Preview = () => {
  const { name, educations, workExps, skills, contacts, projects } = useForm();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full bg-lime-500 text-center p-5 non-printable ">
        <h1 className="text-3xl font-bold mb-5">Resume.edit</h1>
        <p className="text-xl font-bold">Preview mode</p>
        <div className="flex gap-3 justify-center mt-2">
          {/* <p className='underline cursor-pointer'>Download as HTML</p> */}
          <p
            className="underline cursor-pointer"
            onClick={() => window.print()}
          >
            Download
          </p>
        </div>
      </div>

      <div className="lg:container mb-5 printable p-2 lg:w-1/2">
        <h1 className="text-center text-4xl font-bold mb-5 mt-10">{name}</h1>

        <ul className="p-3 ml-3 flex flex-wrap justify-center gap-5 mb-10">
          {contacts.map((contact, idx) => {
            var link = contact.contact.link;
            // if link != '' or link != undefined
            if (link && !link.includes('https://')) {
              link = 'https://' + link;
            }
            return (
              <li key={idx}>
                <a
                  href={link}
                  className={`${link ? 'underline' : 'cursor-text'}`}
                >
                  {contact.contact.label}
                </a>
              </li>
            );
          })}
        </ul>

        <h1 className="text-xl font-bold border-b border-neutral-900">
          EDUCATION
        </h1>
        <ul className="list-disc p-3 ml-3">
          {educations.map(education => (
            <li>
              {education.education.degree}, {education.education.school},{' '}
              {education.education.year}
            </li>
          ))}
        </ul>
        <h1 className="text-xl font-bold border-b border-neutral-900">
          WORK EXPERIENCE
        </h1>
        <ul className="list-disc p-3 ml-3">
          {workExps.map(workExp => (
            <div className="mb-3">
              <li>
                <span className="font-bold">{workExp.workExp.company}</span> |{' '}
                <span className="font-bold">{workExp.workExp.jobTitle}</span>
              </li>
              <div
                className="prose prose-stone"
                dangerouslySetInnerHTML={{
                  __html: md().render(workExp.workExp.dest),
                }}
              ></div>
            </div>
          ))}
        </ul>
        <h1 className="text-xl font-bold border-b border-neutral-900">
          SKILLS
        </h1>
        <ul className="list-disc p-3 ml-3">
          {skills.map(skill => (
            <li>{skill.skill.skill}</li>
          ))}
        </ul>

        <h1 className="text-xl font-bold border-b border-neutral-900">
          PROJECTS
        </h1>
        <ul className="list-disc p-3 ml-3">
          {projects.map(project => (
            <li>
              <span className="font-bold">{project.project.name}</span>{' '}
              {project.project.dest}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Preview;
