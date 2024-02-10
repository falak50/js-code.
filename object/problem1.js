// Problem: Find people who have both a Bachelor's degree in Computer Science and have worked as a Senior Developer. Return an array containing their names and their work experience durations in each company.
const per = [
    { 
      name: "John", 
      age: 30, 
      email: "john@example.com",
      achievements: ["First place in coding competition", "Employee of the month"],
      education: {
        degree: "BSC",
        university: "University of XYZ"
      },
      workExperience: [
        { 
          company: "Tech Solutions Inc.", 
          position: "Software Engineer", 
          duration: "3 years"
        },
        { 
          company: "Data Systems Corp.", 
          position: "Senior Developer", 
          duration: "2 years"
        }
      ]
    },
    {
      name: "Alice",
      age: 28,
      email: "alice@example.com",
      achievements: ["Best Research Paper Award", "Team Leader Recognition"],
      education: {
        degree: "MSC",
        university: "ABC University"
      },
      workExperience: [
        {
          company: "Innovative Solutions Ltd.",
          position: "Machine Learning Engineer",
          duration: "4 years"
        },
        {
          company: "Tech Genius Corp.",
          position: "Senior Developer",
          duration: "3 years"
        }
      ]
    }
  ];
 const ans=[];
 for(let i=0;i<per.length;i++){
    const user=per[i];
  //  console.log('user : ',i);
    //console.log(user);
    const edu=user.education.degree;
    //console.log(edu);
    if(edu=='BSC'){
    //   console.log('ok')
        const work=user.workExperience;
        console.log(work);
        for(let j=0;j<work.length;j++){
            console.log('work in loop ',work[j].position);
            if(work[j].position=="Senior Developer"){
                // console.log('bai re bai paise')
                const obj1={
                    name:user.name,
                    workExperience:work
                }
                ans.push(obj1);
            }
        }
    }
 }

 console.log(ans[0].name);