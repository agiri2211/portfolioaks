 var bio={
 	"name": "Akshaya",
 	"role": "Graduate Student",
 	 "contacts":
 	 {
 	 	"mobile":"9805855760",
 	 	"email": "agiri@uncc.edu",
 	 	"github": "akshayagiri",
 	 	"location": "Charlotte, USA"
 	 },

 	 "welcomemessage": "Hello",
 	 "skills": ["optimistic","determined","focused","smart-working"],
 	 "biopic": "images/fry.jpg",

 	  display: function(){
 	 	
 	 	/*for(bios in bio.contacts){
 	 		$("#header").append(HTMLmobile);
 	 		var formattedheadername=HTMLmobile.replace("%data%",bio.contacts[bios].mobile);
 	 		$("#topcontacts").append(formattedheadername);*/


 	 
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#topContacts").append(formattedName);

		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#topContacts").append(formattedRole);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);

		var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedemail);
		$("#footerContacts").append(formattedemail);

		var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedgithub);
		$("#footerContacts").append(formattedgithub);


		var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedlocation);
		$("#footerContacts").append(formattedlocation);

		var formattedwelcomemessage = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage);
		$("#header").append(formattedwelcomemessage);

		

		

	    var formattedSkills = HTMLskills.replace("%data%", bio.skills);
		$("#header").append(formattedSkills);

		

		var formattedimage = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedimage);

		
      //}
	//}


 	 	}


 	 }

 	 bio.display();  






 var education={

"schools": [
          {
          	"name" : "St.josephs",
          	"location" : "India",
          	"degree" : "B.Tech",
          	"majors" :["IT", "CSc"],
          	"dates": "2011-2015",
          	
          	         
          }
          ],



"onlinecourses": [
{
	"title": "Udacity",
           "school": "Udacity",
           "dates": "2016",
           "url": "www.Udacity.com"


} ],           	 

                          
           display: function(){
          
           $("#education").append(HTMLschoolStart);
          for(school in education.schools)
          {

        var formattedschoolname = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedschoolname);
		var formattedschoollocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedschoollocation);
		var formattedschooldegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedschooldegree);
		var formattedschoolmajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedschoolmajors);
		var formattedschooldates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedschooldates);
		

          }

          $("education").append(HTMLonlineClasses);
          for(onlinecourse in education.onlinecourses)
          {
          	
		var formattedonlinetitle = HTMLonlineTitle.replace("%data%", education.onlinecourses[onlinecourse].title);
		$(".education-entry:last").append(formattedonlinetitle);

		var formattedonlineschool = HTMLonlineSchool.replace("%data%", education.onlinecourses[onlinecourse].school);
		$(".education-entry:last").append(formattedonlineschool);

		var formattedonlinedates = HTMLonlineDates.replace("%data%", education.onlinecourses[onlinecourse].dates);
		$(".education-entry:last").append(formattedonlinedates);

		var formattedonlineurl = HTMLonlineURL.replace("%data%", education.onlinecourses[onlinecourse].url);
		$(".education-entry:last").append(formattedonlineurl);

          }

} 

}  


education.display();



var work={
	"jobs": [

      {
       
       "employer" : " flagshipmd",
       "title" : "intern",
       "location" : "jacksonville",
       "dates": "2016",
       "description": "ehjf"

      }
      ],

      display: function(){

      	$("#workExperience").append(HTMLworkStart);

      	for(workk in work.jobs){
         
        var formattedworkemployer = HTMLworkEmployer.replace("%data%", work.jobs[workk].employer);
		$(".work-entry:last").append(formattedworkemployer);

		var formattedworktitle = HTMLworkTitle.replace("%data%", work.jobs[workk].title);
		$(".work-entry:last").append(formattedworktitle);

		var formattedworklocation = HTMLworkLocation.replace("%data%", work.jobs[workk].location);
		$(".work-entry:last").append(formattedworklocation);
        
        var formattedworkdates = HTMLworkDates.replace("%data%", work.jobs[workk].dates);
		$(".work-entry:last").append(formattedworkdates);

        var formattedworkdesc = HTMLworkDescription.replace("%data%", work.jobs[workk].description);
		$(".work-entry:last").append(formattedworkdesc);



      	}
      }
  }

      work.display();





      var projects={

	"projects" : [
     {

     	"title": "proj",
     	"dates": "2015",
     	"description": "hdh",
     	"images": ["images\\logo.png"]

     }

	],

	display: function(){

		$("#projects").append(HTMLprojectStart);

		for(proj in projects.projects){

	    var formattedprojtitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
		$(".project-entry:last").append(formattedprojtitle);

		var formattedprojdates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
		$(".project-entry:last").append(formattedprojdates);

		var formattedprojdesc = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
		$(".project-entry:last").append(formattedprojdesc);

		var formattedprojimages = HTMLprojectImage.replace("%data%", projects.projects[proj].images);
		$(".project-entry:last").append(formattedprojimages);


		}

	}

}

projects.display();


$("#mapDiv").append(googleMap);




	
	
	












