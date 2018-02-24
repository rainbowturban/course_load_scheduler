package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveGetCourseListAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveGetCourseListEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class ReceiveGetCourseListEvent extends GwtEvent<ReceiveGetCourseListEventHandler>{
	public static Type<ReceiveGetCourseListEventHandler> TYPE = new Type<ReceiveGetCourseListEventHandler>();
	
	private ReceiveGetCourseListAction action;
	
	public ReceiveGetCourseListEvent(ReceiveGetCourseListAction action)
	{
		this.action = action;
	}
	
	public ReceiveGetCourseListAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<ReceiveGetCourseListEventHandler> getAssociatedType()
	{
		return TYPE;
	}


	@Override
	protected void dispatch(ReceiveGetCourseListEventHandler handler)
	{
		handler.onReceiveGetCourseList(this);
	}

}
