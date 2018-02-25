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
SendNewCourseEventHandler,
LoadViewCoursesEventHandler,
LoadAddCourseEventHandler,
SendEditCourseEventHandler,
LoadCreateAccountEventHandler,
LoadLoginPageEventHandler,
LoadHomePageEventHandler,
GetFrequenciesEventHandler,
SendGetSectionsEventHandler,
SendRemoveSectionEventHandler,
SendGetCourseListEventHandler,
SendRemoveCourseEventHandler,
LoadScheduleEventHandler,
ManageUserPageEventHandler,
ReceiveLoginEventHandler,
ReceiveCreateAccountEventHandler,
ReceiveNewCourseEventHandler,
ReceiveRemoveCourseEventHandler,
ReceiveEditCourseEventHandler,
GetStartTimesEventHandler,
ReceiveStartTimesEventHandler,
SendEditSectionEventHandler,
ReceiveEditSectionEventHandler,
ReceiveGetCourseListEventHandler,
ReceiveRemoveSectionEventHandler,
SendNewSectionEventHandler,
ReceiveNewSectionEventHandler,
ReceiveGetSectionsEventHandler

{
	@Override
	public void onCreateAccount(SendCreateAccountEvent evt) {}

	@Override
	public void onSendGetCourseList(SendGetCourseListEvent evt) {}

	@Override
	public void onGetFrequencies(GetFrequenciesEvent evt) {}

	@Override
	public void onSendGetSections(SendGetSectionsEvent evt) {}

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
	public void onSendEditCourse(SendEditCourseEvent evt) {}

	@Override
	public void onSendNewCourse(SendNewCourseEvent evt) {}

	@Override
	public void onSendRemoveCourse(SendRemoveCourseEvent evt) {}

	@Override
	public void onSendRemoveSection(SendRemoveSectionEvent evt) {}
	
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
	public void onGetStartTimes(GetStartTimesEvent evt) {}
	
	@Override
	public void onReceiveStartTimes(ReceiveStartTimesEvent evt) {}
	public void onSendEditSection(SendEditSectionEvent evt) {}
	
	@Override
	public void onReceiveEditSection(ReceiveEditSectionEvent evt) {}

	@Override
	public void onReceiveGetCourseList(ReceiveGetCourseListEvent evt) {}
	
	@Override
	public void onReceiveRemoveSection(ReceiveRemoveSectionEvent evt) {}
	
	@Override
	public void onSendNewSection(SendNewSectionEvent evt) {}
	
	@Override
	public void onReceiveNewSection(ReceiveNewSectionEvent evt) {}
	
	@Override
	public void onReceiveGetSections(ReceiveGetSectionsEvent evt) {}
}
