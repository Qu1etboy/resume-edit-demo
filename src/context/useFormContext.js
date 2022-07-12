import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { v4 as uuid } from 'uuid';

const FormContext = createContext();
export const useForm = () => useContext(FormContext);

const FormProvider = ({ children }) => {
  const [name, setName] = useLocalStorage('name', '');
  const [educations, setEducations] = useLocalStorage('educations', [
    { id: uuid(), education: {} },
  ]);
  const [workExps, setWorkExps] = useLocalStorage('workExps', [
    { id: uuid(), workExp: {} },
  ]);
  const [skills, setSkills] = useLocalStorage('skills', [
    { id: uuid(), skill: {} },
  ]);
  const [projects, setProjects] = useLocalStorage('projects', [
    { id: uuid(), project: {} },
  ]);
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: uuid(), contact: {} },
  ]);

  const handleNameInput = value => {
    setName(value);
  };
  const handleEducationInput = ({ education, id }) => {
    // update the education information
    setEducations(
      educations.map(edu => {
        if (edu.id === id) {
          return { id, education };
        } else {
          return edu;
        }
      })
    );
  };
  const addEducation = () => {
    setEducations([...educations, { id: uuid(), education: {} }]);
  };
  const removeEducation = id => {
    setEducations(educations.filter(edu => edu.id !== id));
  };

  const handleWorkExpInput = ({ workExp, id }) => {
    // update workExp information
    setWorkExps(
      workExps.map(exp => {
        if (exp.id === id) {
          return { id, workExp };
        } else {
          return exp;
        }
      })
    );
  };
  const addWorkExp = () => {
    setWorkExps([...workExps, { id: uuid(), workExp: {} }]);
  };
  const removeWorkExp = id => {
    setWorkExps(workExps.filter(workExp => workExp.id !== id));
  };

  const handleSkillInput = ({ skill, id }) => {
    // update skill information
    setSkills(
      skills.map(s => {
        if (s.id === id) {
          return { id, skill };
        } else {
          return s;
        }
      })
    );
  };
  const addSkill = () => {
    setSkills([...skills, { id: uuid(), skill: {} }]);
  };
  const removeSkill = id => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  const handleContactInput = ({ contact, id }) => {
    // update contact information
    setContacts(
      contacts.map(c => {
        if (c.id === id) {
          return { id, contact };
        } else {
          return c;
        }
      })
    );
  };
  const addContact = () => {
    setContacts([...contacts, { id: uuid(), contact: {} }]);
  };
  const removeContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleProjectInput = ({ project, id }) => {
    setProjects(
      projects.map(p => {
        if (p.id === id) {
          return { id, project };
        } else {
          return p;
        }
      })
    );
  };
  const addProject = () => {
    setProjects([...projects, { id: uuid(), project: {} }]);
  };
  const removeProject = id => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const clearInputForm = () => {
    setName('');
    setEducations([{ id: uuid(), education: {} }]);
    setWorkExps([{ id: uuid(), workExp: {} }]);
    setSkills([{ id: uuid(), skill: {} }]);
    setContacts([{ id: uuid(), contact: {} }]);
  };

  return (
    <FormContext.Provider
      value={{
        handleNameInput,
        handleEducationInput,
        handleWorkExpInput,
        handleContactInput,
        handleSkillInput,
        addEducation,
        addWorkExp,
        addSkill,
        addContact,
        removeEducation,
        removeWorkExp,
        removeSkill,
        removeContact,
        handleProjectInput,
        addProject,
        removeProject,
        clearInputForm,
        name,
        educations,
        workExps,
        skills,
        contacts,
        projects,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
