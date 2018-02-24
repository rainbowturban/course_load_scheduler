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
SendCreateAccountEventHandler,
SendLoginEventHandler,
LoadEditCourseEventHandler,
LoadAddSectionEventHandler,
LoadEditSectionEventHandler,
SubmitNewCourseEventHandler,
LoadViewCoursesEventHandler,
LoadAddCourseEventHandler,
SubmitEditCourseEventHandler,
LoadCreateAccountEventHandler,
LoadLoginPageEventHandler,
LoadHomePageEventHandler,
GetFrequenciesEventHandler,
GetSectionsEventHandler,
SubmitRemoveSectionEventHandler,
SendGetCourseListEventHandler,
SubmitRemoveCourseEventHandler,
LoadScheduleEventHandler,
ManageUserPageEventHandler,
ReceiveLoginEventHandler,
ReceiveCreateAccountEventHandler,
ReceiveNewCourseEventHandler,
ReceiveRemoveCourseEventHandler,
ReceiveEditCourseEventHandler,
ReceiveGetCourseListEventHandler

{
	@Override
	public void onCreateAccount(SendCreateAccountEvent evt) {}

	@Override
	public void onSendGetCourseList(SendGetCourseListEvent evt) {}

	@Override
	public void onGetFrequencies(GetFrequenciesEvent evt) {}

	@Override
	public void onGetSections(GetSectionsEvent evt) {}

	@Override
	public void onInvalidAccountCreation(InvalidAccountCreationEvent evt) {}

	@Override
	public void onInvalidLogin(InvalidLoginEvent evt) {}

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
	public void onLoadViewCourses(LoadViewCoursesEvent evt) {}

	@Override
	public void onSendLogin(SendLoginEvent evt) {}

	@Override
	public void onSubmitEditCourse(SubmitEditCourseEvent evt) {}

	@Override
	public void onSubmitNewCourse(SubmitNewCourseEvent evt) {}

	@Override
	public void onSubmitRemoveCourse(SubmitRemoveCourseEvent evt) {}

	@Override
	public void onSubmitRemoveSection(SubmitRemoveSectionEvent evt) {}
	
	@Override
	public void onLoadSchedulePage(LoadScheduleEvent evt) {}
	
	@Override 
	public void onManageUserPage(ManageUserPageEvent evt) {}
	
	@Override
	public void onReceiveLogin(ReceiveLoginEvent evt) {}
	
	@Override
	public void onReceiveCreateAccount(ReceiveCreateAccountEvent evt) {}
	
	@Override
	public void onReceiveNewCourse(ReceiveNewCourseEvent evt) {}
	
	@Override
	public void onReceiveRemoveCourse(ReceiveRemoveCourseEvent evt) {}
	
	@Override
	public void onReceiveEditCourse(ReceiveEditCourseEvent evt) {}
	
	@Override
	public void onReceiveGetCourseList(ReceiveGetCourseListEvent evt) {}
	
}
