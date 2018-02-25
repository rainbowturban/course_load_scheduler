package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendNewCourseAction;
import org.dselent.course_load_scheduler.client.event_handler.SendNewCourseEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class SendNewCourseEvent extends GwtEvent<SendNewCourseEventHandler>{
	public static Type<SendNewCourseEventHandler> TYPE = new Type<SendNewCourseEventHandler>();

	private SendNewCourseAction action;

	public SendNewCourseEvent(SendNewCourseAction action)
	{
		this.action = action;
	}

	public SendNewCourseAction getAction()
	{
		return action;
	}

	/*
	 * 
	 */
	 @Override
	 public Type<SendNewCourseEventHandler> getAssociatedType()
	 {
		 return TYPE;
	 }

	 /*
	  * 
	  */
	 @Override
	 protected void dispatch(SendNewCourseEventHandler handler)
	 {
		 handler.onSendNewCourse(this);
	 }
}
