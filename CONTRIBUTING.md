# How To Contribute

### Steps
- Fork this repository
- [Create a folder](http://stackoverflow.com/questions/18773598/creating-folders-inside-github-com-repo-without-using-git) whose name is your presentation title (e.g. Learn-Python).
- Add your source code, slides, and other tutorial files to your new folder. Alternatively, **if you have already published the code, slides, etc. for your tutorial to another blog or website**, just add a README.md to your folder with the tutorial title and a hyperlink to the location of your tutorial.
- In either the "Past Tutorials" or "Upcoming Tutorials" sections, add the following information to the table as below.

**Make sure to link your tutorial title to the folder you created.**

| Tutorial Title        | Location/Time | Speaker Contact Info | Level | Previous Skills Required |
| :-------------------: | :-----------: | :------------------: | :---: | :----------------------: |
| [Learn Python]()      | Online? At a conference? | your_email@place.com | Beginner/Intermediate/Advanced | Any prior knowledge required? |


- **Add needed JSON-formatted information to lsh-tutorials.json (for the website)**

Inside the "tutorials" member, add the object in the array with the following format and change the value as appropriate:

```
	,{
		"topic": "LSH Tutorials",
		"urlFiles": "https://github.com/Ladies-Storm-Hackathons/Tutorials",
        "location": "Online",
        "date": "August 16, 2016",
        "time": "5 pm EST",
        "howToAttendURL": "https://yourURLhere",
        "speakersContactInfo": {
        	"name": "LSH Member",
            "email": "you@email.com",
            "twitter": "https://twitter.com/TheLSHStorm",
            "linkedin": "https://linkedin.com/youraccount"
        },
        "level": "Beginner",
       	"previousSkillRequired": "Add something here if needed"
    }
```

*NOTE: I have added a comma on top of the object to make sure you won't forget to add it in. Add this object after the last entry. Be sure to add this before the "]".*

- Commit your changes to your local branch.
- Submit a pull request to Ladies-Storm-Hackathons/Tutorials. It should be the first option when you press the green pull request button.

### Not Familiar with GitHub?
[Contact Alaina](mailto:alainakafkes@gmail.com) and she'll help you out!
