var bio = {
		"name" : "James Watkins",
		"role" : "Professional Applications Developer",
		"contact" : {
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

			$("#header").prepend(formattedRole);
			$("#header").prepend(formattedName);
			$("#header").append(formattedBiopic);
			$("#header").append(formattedWelcomeMessage);

			//Skills are NOT allining properly!!!
			$("#header").append(HTMLskillsStart);
			for(var i=0;  i<bio.skills.length; i++){
						$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
					}
			},

		"TopContactsdisplay":function(){
			var formattedMobile   = HTMLmobile.replace("%data%",bio.contact.mobile);
			var formattedEmail    = HTMLemail.replace("%data%",bio.contact.email);
			var formattedGithub   = HTMLgithub.replace("%data%",bio.contact.github);
			var formattedTwitter  = HTMLtwitter.replace("%data%",bio.contact.twitter);
			var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location);
			$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
		},
		"FooterContactsdisplay": function(){
			var formattedMobile   = HTMLmobile.replace("%data%",bio.contact.mobile);
			var formattedEmail    = HTMLemail.replace("%data%",bio.contact.email);
			var formattedGithub   = HTMLgithub.replace("%data%",bio.contact.github);
			var formattedTwitter  = HTMLtwitter.replace("%data%",bio.contact.twitter);
			var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location);
			$("#footerContacts").append(formattedMobile,formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
		}
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
		for( var job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer));
			$(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs[job].title));
			$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
				
		}
	}
};

var project = {
	"projects": [
		{
			"title": "ENOT",
			"dates":"2012-2013",
			"description":"identifies and tracks DSL outages",
			"image": "images/fry.jpg"
		},
		{
			"title": "Scorecard",
			"dates":"2013-Present",
			"description":"Reports Tier 1 metrics",
			"image": "images/fry.jpg"	
		},
		{
			"title": "CAPP",
			"dates":"2013-Present",
			"description":"Tracks tier 1 payout incentive",
			"image": "images/fry.jpg"
		}		
	],
	"display":function(){
		for(var proj in project.projects){
				$("#projects").append(HTMLprojectStart);
				$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.projects[proj].title));
				$(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.projects[proj].dates));
				$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.projects[proj].description));
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", project.projects[proj].image));
				
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
	"schoolsDisplay":function(){
		for(var edu in education.schools){
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[edu].name) + HTMLschoolDegree.replace("%data%", education.schools[edu].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[edu].dates));
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[edu].majors));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[edu].location));			
			
			
			
		}
	},
	"onlineCourses": [
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"date": "2016",
			"url": "http://www.udacity.com/course/ud804"
		}
	],
	"onlineDisplay":function(){
		for(var OnlineEdu in education.onlineCourses){
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%",education.onlineCourses[OnlineEdu].title) + HTMLonlineSchool.replace("%data%",education.onlineCourses[OnlineEdu].school));
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourses[OnlineEdu].date));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%",education.onlineCourses[OnlineEdu].url));
		}
	}
};

bio.display();
bio.TopContactsdisplay();
bio.FooterContactsdisplay();
work.display();
project.display();
education.schoolsDisplay();
education.onlineDisplay();

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


