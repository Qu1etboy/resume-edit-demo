import { useState, useEffect } from 'react';
import { useForm } from '../context/useFormContext';

export const EducationForm = ({ id, value }) => {
  const [education, setEducation] = useState(() =>
    value ? value : { degree: '', school: '', year: '' }
  );
  const { handleEducationInput, removeEducation } = useForm();
  const handleChange = e => {
    setEducation({
      ...education,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    handleEducationInput({ education, id });
  }, [education]);

  return (
    <div className="flex gap-2">
      <input
        placeholder="degree"
        value={value.degree}
        name="degree"
        className="border-2 rounded-md p-2 w-full mb-2"
        onChange={e => handleChange(e)}
      />
      <input
        placeholder="school"
        value={value.school}
        name="school"
        className="border-2 rounded-md p-2 w-full mb-2"
        onChange={e => handleChange(e)}
      />
      <input
        placeholder="year"
        value={value.year}
        name="year"
        className="border-2 rounded-md p-2 w-full mb-2"
        onChange={e => handleChange(e)}
      />
      <button onClick={() => removeEducation(id)} className="text-red-500">
        x
      </button>
    </div>
  );
};

export const WorkForm = ({ id, value }) => {
  const [workExp, setWorkExp] = useState(() =>
    value ? value : { company: '', jobTitle: '', dest: '' }
  );
  const { handleWorkExpInput, removeWorkExp } = useForm();

  const handleChange = e => {
    setWorkExp({
      ...workExp,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    handleWorkExpInput({ workExp, id });
  }, [workExp]);

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-2">
        <input
          placeholder="company"
          value={value.company}
          name="company"
          className="border-2 rounded-md p-2 mb-2"
          onChange={e => handleChange(e)}
        />
        <input
          placeholder="job title"
          value={value.jobTitle}
          name="jobTitle"
          className="border-2 rounded-md p-2 mb-2"
          onChange={e => handleChange(e)}
        />
        <br />
        <textarea
          rows="5"
          cols="30"
          value={value.dest}
          name="dest"
          placeholder="description"
          className="border-2 rounded-md p-2 col-span-full mb-2"
          onChange={e => handleChange(e)}
        />
      </div>
      <button onClick={() => removeWorkExp(id)} className="text-red-500 mb-5">
        x
      </button>
    </div>
  );
};

export const SkillForm = ({ id, value }) => {
  const [skill, setSkill] = useState(() => (value ? value : { skill: '' }));

  const { handleSkillInput, removeSkill } = useForm();

  const handleChange = e => {
    setSkill({
      ...skill,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    handleSkillInput({ skill, id });
  }, [skill]);

  return (
    <div className="flex gap-2">
      <input
        placeholder="skill"
        value={value.skill}
        name="skill"
        className="border-2 rounded-md p-2 w-full mb-2"
        onChange={e => handleChange(e)}
      />
      <button onClick={() => removeSkill(id)} className="text-red-500">
        x
      </button>
    </div>
  );
};

export const ContactForm = ({ id, value }) => {
  const [contact, setContact] = useState(() =>
    value ? value : { label: '', link: '' }
  );
  const { handleContactInput, removeContact } = useForm();

  const handleChange = e => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    handleContactInput({ contact, id });
  }, [contact]);
  return (
    <div className="flex gap-2">
      <input
        placeholder="label"
        value={value.label}
        name="label"
        className="border-2 rounded-md p-2 w-full mb-2"
        onChange={e => handleChange(e)}
      />
      <input
        placeholder="link"
        value={value.link}
        name="link"
        className="border-2 rounded-md p-2 w-full mb-2"
        onChange={e => handleChange(e)}
      />
      <button onClick={() => removeContact(id)} className="text-red-500">
        x
      </button>
    </div>
  );
};

export const ProjectForm = ({ id, value }) => {
  const [project, setProject] = useState(() =>
    value ? value : { name: '', dest: '' }
  );
  const { handleProjectInput, removeProject } = useForm();
  const handleChange = e => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    handleProjectInput({ project, id });
  }, [project]);

  return (
    <div className="flex flex-col">
      <input
        placeholder="project name"
        name="name"
        value={value.name}
        onChange={e => handleChange(e)}
        className="border-2 rounded-md p-2 w-full mb-2"
      />
      <textarea
        placeholder="description"
        name="dest"
        value={value.dest}
        onChange={e => handleChange(e)}
        className="border-2 rounded-md p-2 w-full mb-2"
      />
      <button onClick={() => removeProject(id)} className="text-red-500">
        x
      </button>
    </div>
  );
};
