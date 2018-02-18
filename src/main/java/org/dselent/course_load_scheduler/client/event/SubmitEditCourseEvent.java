package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SubmitEditCourseAction;
import org.dselent.course_load_scheduler.client.event_handler.SubmitEditCourseEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class SubmitEditCourseEvent extends GwtEvent<SubmitEditCourseEventHandler> {
	public static Type<SubmitEditCourseEventHandler> TYPE = new Type<SubmitEditCourseEventHandler>();
	
	private SubmitEditCourseAction action;
	
	public SubmitEditCourseEvent(SubmitEditCourseAction action)
	{
		this.action = action;
	}
	
	public SubmitEditCourseAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<SubmitEditCourseEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(SubmitEditCourseEventHandler handler)
	{
		handler.onSubmitEditCourse(this);
	}
}
