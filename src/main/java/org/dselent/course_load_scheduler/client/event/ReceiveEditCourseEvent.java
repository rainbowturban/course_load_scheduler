package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveEditCourseAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveEditCourseEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class ReceiveEditCourseEvent extends GwtEvent<ReceiveEditCourseEventHandler>{
	public static Type<ReceiveEditCourseEventHandler> TYPE = new Type<ReceiveEditCourseEventHandler>();
	
	private ReceiveEditCourseAction action;
	
	public ReceiveEditCourseEvent(ReceiveEditCourseAction action)
	{
		this.action = action;
	}
	
	public ReceiveEditCourseAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<ReceiveEditCourseEventHandler> getAssociatedType()
	{
		return TYPE;
	}


	@Override
	protected void dispatch(ReceiveEditCourseEventHandler handler)
	{
		handler.onReceiveEditCourse(this);
	}

}
