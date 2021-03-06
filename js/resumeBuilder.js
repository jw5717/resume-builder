var bio = {
		"name" : "James Watkins",
		"role" : "Professional Applications Developer",
		"contacts" : {
			"mobile": "314-504-4892",
			"email": "jw5717@att.com",
			"work": "314-592-5032", 
			"github"  :"jw5717",
			"twitter" :"@donthaveone",
			"location": "Wentzville, MO"
		},
		"welcomeMessage" : "Welcome to My Resume",
		"skills" : [
			"tagteam underwater basket weaving", 
			"binge watchng netflix", 
			"making my son look mature",
			"awesomeness",
			"aiming at the ground and missing"
		],
		"biopic": "images/fry.jpg",

		"display":function(){
			var formattedRole   = HTMLheaderRole.replace("%data%", bio.role);
			var formattedName   = HTMLheaderName.replace("%data%",bio.name);
			var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
			var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
			var formattedMobile   = HTMLmobile.replace("%data%",bio.contacts.mobile);
			var formattedEmail    = HTMLemail.replace("%data%",bio.contacts.email);
			var formattedGithub   = HTMLgithub.replace("%data%",bio.contacts.github);
			var formattedTwitter  = HTMLtwitter.replace("%data%",bio.contacts.twitter);
			var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

			$("#header").prepend(formattedRole);
			$("#header").prepend(formattedName);
			$("#header").append(formattedBiopic);
			$("#header").append(formattedWelcomeMessage);
			$("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
			$("#header").append(HTMLskillsStart);
			for(var i=0;  i<bio.skills.length; i++){
						$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
					}
			},
	};

var work = {
	"jobs": [
		{
			"employer": "ATT",
			"title": "Professional Applications Developer",
			"location":"Earth City, MO",
			"dates":"2000-Present",
			"description":"Build web applications and reports"
		},
		{
			"employer": "IKON Office Solutions",
			"title": "Technician",
			"location":"Chesterfield, MO",
			"dates":"1999-2000",
			"description":"Fax and small digital copier repair"			
		},
		{
			"employer": "MEMC",
			"title": "Technician",
			"location":"Saint Peters, MO",
			"dates":"1997-1999",
			"description":"Lapper in the production of silicon wafers"			
		}		
	],
	"display": function(){
		for (var job = 0; job < work.jobs.length; job++) {
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append((HTMLworkEmployer.replace("%data%", work.jobs[job].employer)) + (HTMLworkTitle.replace("%data%", work.jobs[job].title)));
			$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
				
		}
	}
};

var projects = {
	"projects": [
		{
			"title": "ENOT",
			"dates":"2012-2013",
			"description":"identifies and tracks DSL outages",
			"images": ["images/fry.jpg"]
		},
		{
			"title": "Scorecard",
			"dates":"2013-Present",
			"description":"Reports Tier 1 metrics",
			"images": ["images/fry.jpg"]	
		},
		{
			"title": "CAPP",
			"dates":"2013-Present",
			"description":"Tracks tier 1 payout incentive",
			"images": ["images/fry.jpg"]
		}		
	],
	"display":function(){
		for (var proj = 0; proj < projects.projects.length; proj++) {
				$("#projects").append(HTMLprojectStart);
				$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[proj].title));
				$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[proj].dates));
				$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[proj].description));
				for (var image = 0; image < projects.projects[proj].images.length; image++) {
					$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[proj].images[image]));
				}
		}
	}
};

var education = {
	"schools": [
		{
			"name": "Lindenwood University",
			"location": "Saint Charles, MO",
			"degree": "BS",
			"majors": ["CS"],
			"dates": "2007-2010",
			"url": "http://lindenwood.edu/"
		},
		{
			"name": "ITT",
			"location": "Earth City",
			"degree": "BS",
			"majors": ["EE"],
			"dates": "1997-1999",
			"url": "https://www.itt-tech.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"date": "2016",
			"url": "http://www.udacity.com/course/ud804"
		}
	],	
	"display":function(){
		for (var edu = 0; edu < education.schools.length; edu++) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[edu].name) + HTMLschoolDegree.replace("%data%", education.schools[edu].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[edu].dates));
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[edu].majors));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[edu].location));			
		}
		for (var OnlineEdu = 0; OnlineEdu < education.onlineCourses.length; OnlineEdu++) {
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%",education.onlineCourses[OnlineEdu].title) + HTMLonlineSchool.replace("%data%",education.onlineCourses[OnlineEdu].school));
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourses[OnlineEdu].date));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%",education.onlineCourses[OnlineEdu].url));
		}			
	},
};

bio.display();
work.display();
projects.display();
education.display();

function inName() {
  var name = window.name;
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  
  return name[0] +" "+ name[1];	
}

$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);


