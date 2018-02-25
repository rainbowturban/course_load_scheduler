package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.*;

/**
 * Adapter class for convenience
 * All classes that need to implement an event handler can extend from this class
 * This allows for presenters or other classes not to implement a large number of handler interfaces
 * Need to register all event handling functions with this class by implementing the handler and
 * overriding with an empty method
 * 
 * @author dselent
 * 
 */
public abstract class EventHandlerAdapter
implements InvalidAccountCreationEventHandler,
InvalidLoginEventHandler,
LoadAddCourseEventHandler,
LoadAddSectionEventHandler,
LoadCreateAccountEventHandler,
LoadEditCourseEventHandler,
LoadEditSectionEventHandler,
LoadHomePageEventHandler,
LoadLoginPageEventHandler,
LoadScheduleEventHandler,
LoadViewCoursesEventHandler,
ManageUserPageEventHandler,
ReceiveCreateAccountEventHandler,
ReceiveEditCourseEventHandler,
ReceiveEditSectionEventHandler,
ReceiveEndTimesEventHandler,
ReceiveGetCourseListEventHandler,
ReceiveGetFrequenciesEventHandler,
ReceiveGetSectionsEventHandler,
ReceiveGetTermsEventHandler,
ReceiveLoginEventHandler,
ReceiveNewCourseEventHandler,
ReceiveNewSectionEventHandler,
ReceiveRemoveCourseEventHandler,
ReceiveRemoveSectionEventHandler,
ReceiveStartTimesEventHandler,
SendCreateAccountEventHandler,
SendEditCourseEventHandler,
SendEditSectionEventHandler,
SendGetCourseListEventHandler,
SendGetEndTimesEventHandler,
<<<<<<< HEAD
SendGetFacultyEventHandler,
SendGetFrequenciesEventHandler,
SendGetSectionsEventHandler,
SendGetStartTimesEventHandler,
SendGetTermsEventHandler,
SendLoginEventHandler,
SendNewCourseEventHandler,
SendNewSectionEventHandler,
SendRemoveCourseEventHandler,
SendRemoveSectionEventHandler

{
	@Override
	public void onCreateAccount(SendCreateAccountEvent evt) {}
=======
ReceiveEndTimesEventHandler,
SendGetSectionTypesEventHandler,
ReceiveGetSectionTypesEventHandler
>>>>>>> 365447b44c91b40f3bc87a759ec4ed5820cfeb4d

{
	//"onSend" methods
	@Override
	public void onGetEndTimes(SendGetEndTimesEvent evt) {}

	@Override
<<<<<<< HEAD
	public void onGetStartTimes(SendGetStartTimesEvent evt) {}
=======
	public void onSendGetSections(SendGetSectionsEvent evt) {}
	
	@Override
	public void onSendLogin(SendLoginEvent evt) {}
>>>>>>> 365447b44c91b40f3bc87a759ec4ed5820cfeb4d

	@Override
	public void onSendEditCourse(SendEditCourseEvent evt) {}

	@Override
	public void onSendNewCourse(SendNewCourseEvent evt) {}

	@Override
	public void onSendRemoveCourse(SendRemoveCourseEvent evt) {}

	@Override
	public void onSendRemoveSection(SendRemoveSectionEvent evt) {}
	
	@Override
	public void onGetStartTimes(SendGetStartTimesEvent evt) {}
	
	@Override
	public void onSendEditSection(SendEditSectionEvent evt) {}
	
	@Override
	public void onSendGetSectionTypes(SendGetSectionTypesEvent evt) {}
	
	@Override
	public void onGetEndTimes(SendGetEndTimesEvent evt) {}
	
	@Override
	public void onSendGetTerms(SendGetTermsEvent evt) {}
	
	@Override
	public void onSendNewSection(SendNewSectionEvent evt) {}
	
	
	//"onLoad" methods
	@Override
	public void onLoadAddCourse(LoadAddCourseEvent evt) {}

	@Override
	public void onLoadAddSection(LoadAddSectionEvent evt) {}

	@Override
	public void onLoadCreateAccount(LoadCreateAccountEvent evt) {}

	@Override
	public void onLoadEditCoursePage(LoadEditCourseEvent evt) {}

	@Override
	public void onLoadEditSection(LoadEditSectionEvent evt) {}

	@Override
	public void onLoadHomePage(LoadHomePageEvent evt) {}

	@Override
	public void onLoadLoginPage(LoadLoginPageEvent evt) {}

	@Override
	public void onLoadSchedulePage(LoadScheduleEvent evt) {}

	@Override
	public void onLoadViewCourses(LoadViewCoursesEvent evt) {}
<<<<<<< HEAD

	@Override 
	public void onManageUserPage(ManageUserPageEvent evt) {}

	@Override
	public void onReceiveCreateAccount(ReceiveCreateAccountEvent evt) {}

	@Override
	public void onReceiveEditCourse(ReceiveEditCourseEvent evt) {}

	@Override
	public void onReceiveEditSection(ReceiveEditSectionEvent evt) {}
=======
	
	@Override
	public void onLoadSchedulePage(LoadScheduleEvent evt) {}
	
>>>>>>> 365447b44c91b40f3bc87a759ec4ed5820cfeb4d

	//Other methods
	@Override
<<<<<<< HEAD
	public void onReceiveEndTimes(ReceiveEndTimesEvent evt) {}

	@Override
	public void onReceiveGetCourseList(ReceiveGetCourseListEvent evt) {}

	@Override
	public void onReceiveGetFrequencies(ReceiveGetFrequenciesEvent evt) {}

=======
	public void onInvalidAccountCreation(InvalidAccountCreationEvent evt) {}

	@Override
	public void onInvalidLogin(InvalidLoginEvent evt) {}
	
	@Override
	public void onCreateAccount(SendCreateAccountEvent evt) {}
	
	@Override 
	public void onManageUserPage(ManageUserPageEvent evt) {}
	
	
	//"onReceive" methods
>>>>>>> 365447b44c91b40f3bc87a759ec4ed5820cfeb4d
	@Override
	public void onReceiveGetSections(ReceiveGetSectionsEvent evt) {}

	@Override
	public void onReceiveGetTerms(ReceiveGetTermsEvent evt) {}

	@Override
	public void onReceiveLogin(ReceiveLoginEvent evt) {}

	@Override
	public void onReceiveNewCourse(ReceiveNewCourseEvent evt) {}

	@Override
	public void onReceiveNewSection(ReceiveNewSectionEvent evt) {}

	@Override
	public void onReceiveRemoveCourse(ReceiveRemoveCourseEvent evt) {}

	@Override
<<<<<<< HEAD
	public void onReceiveRemoveSection(ReceiveRemoveSectionEvent evt) {}

	@Override
	public void onReceiveStartTimes(ReceiveStartTimesEvent evt) {}

	@Override
	public void onSendEditCourse(SendEditCourseEvent evt) {}
=======
	public void onReceiveStartTimes(ReceiveStartTimesEvent evt) {}
	
	@Override
	public void onReceiveEditSection(ReceiveEditSectionEvent evt) {}
>>>>>>> 365447b44c91b40f3bc87a759ec4ed5820cfeb4d

	@Override
	public void onSendEditSection(SendEditSectionEvent evt) {}

	@Override
	public void onSendGetCourseList(SendGetCourseListEvent evt) {}

	@Override
<<<<<<< HEAD
	public void onSendGetFaculty(SendGetFacultyEvent evt) {}

	@Override
	public void onSendGetFrequencies(SendGetFrequenciesEvent evt) {}

=======
	public void onReceiveNewSection(ReceiveNewSectionEvent evt) {}
	
>>>>>>> 365447b44c91b40f3bc87a759ec4ed5820cfeb4d
	@Override
	public void onSendGetSections(SendGetSectionsEvent evt) {}

	@Override
<<<<<<< HEAD
	public void onSendGetTerms(SendGetTermsEvent evt) {}

	@Override
	public void onSendLogin(SendLoginEvent evt) {}

	@Override
	public void onSendNewCourse(SendNewCourseEvent evt) {}

	@Override
	public void onSendNewSection(SendNewSectionEvent evt) {}

	@Override
	public void onSendRemoveCourse(SendRemoveCourseEvent evt) {}

	@Override
	public void onSendRemoveSection(SendRemoveSectionEvent evt) {}
=======
	public void onReceiveGetTerms(ReceiveGetTermsEvent evt) {}
	
	@Override
	public void onReceiveGetFrequencies(ReceiveGetFrequenciesEvent evt) {}
	
	@Override
	public void onReceiveEndTimes(ReceiveEndTimesEvent evt) {}
	
	@Override
	public void onReceiveGetSectionTypes(ReceiveGetSectionTypesEvent evt) {}
>>>>>>> 365447b44c91b40f3bc87a759ec4ed5820cfeb4d

}
