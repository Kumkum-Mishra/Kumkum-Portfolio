const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Sharda University",
      period: "2023 – 2027",
      grade: "CGPA: 9.10",
    },
    {
      degree: "Class XII (CBSE)",
      institution: "Senior Secondary Education",
      period: "2023",
      grade: "CGPA: 9.14",
    },
    {
      degree: "Class X (CBSE)",
      institution: "Secondary Education",
      period: "2021",
      grade: "CGPA: 9.08",
    },
  ];

  return (
    <section className="section-container">
      <h2 className="section-title">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="group">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <div>
                <h3 className="text-base font-medium text-foreground">
                  {edu.degree}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {edu.institution}
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span>{edu.period}</span>
                <span className="text-foreground font-medium">{edu.grade}</span>
              </div>
            </div>
            {index < education.length - 1 && (
              <div className="divider mt-6" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
