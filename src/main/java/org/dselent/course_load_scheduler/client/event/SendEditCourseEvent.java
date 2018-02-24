package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendEditCourseAction;
import org.dselent.course_load_scheduler.client.event_handler.SendEditCourseEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class SendEditCourseEvent extends GwtEvent<SendEditCourseEventHandler> {
	public static Type<SendEditCourseEventHandler> TYPE = new Type<SendEditCourseEventHandler>();
	
	private SendEditCourseAction action;
	
	public SendEditCourseEvent(SendEditCourseAction action)
	{
		this.action = action;
	}
	
	public SendEditCourseAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<SendEditCourseEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(SendEditCourseEventHandler handler)
	{
		handler.onSendEditCourse(this);
	}
}
