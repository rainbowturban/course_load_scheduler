package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveRemoveCourseAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveRemoveCourseEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class ReceiveRemoveCourseEvent extends GwtEvent<ReceiveRemoveCourseEventHandler>{
	public static Type<ReceiveRemoveCourseEventHandler> TYPE = new Type<ReceiveRemoveCourseEventHandler>();
	
	private ReceiveRemoveCourseAction action;
	
	public ReceiveRemoveCourseEvent(ReceiveRemoveCourseAction action)
	{
		this.action = action;
	}
	
	public ReceiveRemoveCourseAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<ReceiveRemoveCourseEventHandler> getAssociatedType()
	{
		return TYPE;
	}


	@Override
	protected void dispatch(ReceiveRemoveCourseEventHandler handler)
	{
		handler.onReceiveRemoveCourse(this);
	}


}
