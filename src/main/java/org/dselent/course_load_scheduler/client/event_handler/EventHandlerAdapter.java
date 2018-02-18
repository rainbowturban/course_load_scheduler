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
SubmitEditCourseEventHandler

{
	@Override
	public void onInvalidAccountCreation(InvalidAccountCreationEvent evt) {}

	@Override
	public void onInvalidLogin(InvalidLoginEvent evt) {}
	
	@Override
	public void onSendLogin(SendLoginEvent evt) {}
	
	@Override
	public void onLoadEditCoursePage(LoadEditCourseEvent evt) {}
	
	@Override
	public void onCreateAccount(SendCreateAccountEvent evt) {}
	
	@Override
	public void onLoadAddSection(LoadAddSectionEvent evt) {}
	
	@Override
	public void onLoadEditSection(LoadEditSectionEvent evt) {}

	@Override
	public void onSubmitNewCourse(SubmitNewCourseEvent evt) {}
	
	@Override
	public void onLoadViewCourses(LoadViewCoursesEvent evt) {}
	
	@Override
	public void onLoadAddCourse(LoadAddCourseEvent evt) {}
	
	@Override
	public void onSubmitEditCourse(SubmitEditCourseEvent evt) {}
	
}
