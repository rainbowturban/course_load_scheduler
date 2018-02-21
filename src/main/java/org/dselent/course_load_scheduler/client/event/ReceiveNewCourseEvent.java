package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveNewCourseAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveNewCourseEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class ReceiveNewCourseEvent extends GwtEvent<ReceiveNewCourseEventHandler>{
	public static Type<ReceiveNewCourseEventHandler> TYPE = new Type<ReceiveNewCourseEventHandler>();
	
	private ReceiveNewCourseAction action;
	
	public ReceiveNewCourseEvent(ReceiveNewCourseAction action)
	{
		this.action = action;
	}
	
	public ReceiveNewCourseAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<ReceiveNewCourseEventHandler> getAssociatedType()
	{
		return TYPE;
	}


	@Override
	protected void dispatch(ReceiveNewCourseEventHandler handler)
	{
		handler.onReceiveNewCourse(this);
	}

}
