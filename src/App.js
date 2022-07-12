import { Link } from 'react-router-dom';
import {
  EducationForm,
  WorkForm,
  SkillForm,
  ContactForm,
  ProjectForm,
} from './components/FormComponents';
import { useForm } from './context/useFormContext';
import './App.css';

function App() {
  const {
    name,
    educations,
    workExps,
    skills,
    contacts,
    projects,
    handleNameInput,
    addEducation,
    addWorkExp,
    addSkill,
    addContact,
    addProject,
    clearInputForm,
  } = useForm();

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="bg-lime-500 w-full p-3 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-5">Resume.edit</h1>
        <p className="w-[350px]">
          Fast and Simple way to make your resume. Just type your information
          below and click preview to see the result and download as PDF!
        </p>
      </div>
      <div className="lg:container mx-auto mt-3 lg:w-1/2 p-2">
        <div className="text-xl font-bold mb-3 mt-5">NAME</div>
        <input
          placeholder="name"
          value={name}
          className="border-2 p-2 rounded-md w-full focus:outline-none"
          onChange={e => handleNameInput(e.target.value)}
        ></input>
        <br />

        <div className="text-xl font-bold mt-5 mb-3">EDUCATION</div>
        {educations.map(edu => (
          <EducationForm key={edu.id} id={edu.id} value={edu.education} />
        ))}
        <button onClick={() => addEducation()} className="text-lime-500">
          Add more
        </button>

        <div className="text-xl font-bold mt-5 mb-3">WORK EXPERIENCE</div>
        {workExps.map(workExp => (
          <WorkForm key={workExp.id} id={workExp.id} value={workExp.workExp} />
        ))}
        <button onClick={() => addWorkExp()} className="text-lime-500">
          Add more
        </button>

        <div className="text-xl font-bold mt-5 mb-3">SKILLS</div>
        {skills.map(skill => (
          <SkillForm key={skill.id} id={skill.id} value={skill.skill} />
        ))}
        <button onClick={() => addSkill()} className="text-lime-500">
          Add more
        </button>

        <div className="text-xl font-bold mt-5 mb-3">PROJECTS</div>
        {projects.map(project => (
          <ProjectForm
            key={project.id}
            id={project.id}
            value={project.project}
          />
        ))}
        <button onClick={() => addProject()} className="text-lime-500">
          Add more
        </button>

        <div className="text-xl font-bold mt-5 mb-3">CONTACT</div>
        {contacts.map(contact => (
          <ContactForm
            key={contact.id}
            id={contact.id}
            value={contact.contact}
          />
        ))}
        <button onClick={() => addContact()} className="text-lime-500">
          Add more
        </button>

        <div className="flex gap-2 justify-center my-5">
          <Link
            to="/preview"
            target="_blank"
            className="p-3 bg-lime-300 rounded-md hover:bg-lime-500 duration-200"
          >
            Preview
          </Link>
          <button
            onClick={clearInputForm}
            className="p-3 bg-lime-300 rounded-md hover:bg-lime-500 duration-200"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
